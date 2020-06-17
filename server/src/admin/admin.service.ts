import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Admin } from 'src/database/schema'
import { AdminAuthType, AdminType } from 'src/graphql/types/admin.type'
import { comparePwd } from 'src/utils'
import { AdminArgs } from './dto/admin.args'

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtService: JwtService
  ) {}

  async initAdmin() {
    const originAdmin = await this.adminModel.find({ username: 'admin' })
    if (originAdmin.length === 0) {
      await new this.adminModel({
        username: 'admin',
        password: '123456'
      }).save()
    }
  }

  async findOne(adminArgs: AdminArgs): Promise<AdminAuthType> {
    const { username, password } = adminArgs
    const res = await this.adminModel.findOne({ username })
    if (!res) {
      throw new NotFoundException(`${username} is not found.`)
    }
    const pwdValid = comparePwd(password, res.password)
    if (!pwdValid) {
      throw new BadRequestException(`password is not valid.`)
    }
    return {
      admin: res,
      token: this.jwtService.sign(String(res._id))
    }
  }

  async getAdminInfo(token: string): Promise<AdminType> {
    const id = this.jwtService.decode(token)
    return this.adminModel.findById(id)
  }
}
