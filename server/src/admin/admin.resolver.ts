import { Args, Query, Resolver } from '@nestjs/graphql'
import { AdminType } from 'src/graphql/types'
import { AdminAuthType } from 'src/graphql/types/admin.type'
import { AdminService } from './admin.service'
import { AdminArgs } from './dto/admin.args'

@Resolver(of => AdminType)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(returns => AdminAuthType)
  async auth(@Args() adminArgs: AdminArgs): Promise<AdminAuthType> {
    return await this.adminService.findOne(adminArgs)
  }
}
