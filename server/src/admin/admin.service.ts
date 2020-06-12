import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Admin } from 'src/database/schema'
import { AdminAuthType } from 'src/graphql/types/admin.type'
import { comparePwd, genPsd } from 'src/utils'
import { AdminArgs } from './dto/admin.args'

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async initAdmin() {
    const originAdmin = await this.adminModel.find({ username: 'admin' })
    if (originAdmin.length === 0) {
      await new this.adminModel({
        username: 'admin',
        password: await genPsd('123456')
      }).save()
    }
  }

  async findOne(adminArgs: AdminArgs): Promise<AdminAuthType> {
    const { username, password } = adminArgs
    const res = await this.adminModel.findOne({ username })
    if (!res) {
      throw new NotFoundException(`${username} is not found.`)
    }
    const pwdValid = await comparePwd(password, res.password)
    if (!pwdValid) {
      throw new BadRequestException(`password is not valid.`)
    }
    return {
      admin: res,
      token: '132213123'
    }
  }
}
