import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AdminType {
  @Field(type => ID)
  _id: string
  @Field()
  username: string
  @Field()
  password: string
  @Field()
  nickname: string
  @Field()
  avatar: string
  @Field(type => [String])
  roles: string[]
}

@ObjectType()
export class AdminAuthType {
  @Field(type => AdminType, { description: '登录成功后返回的Admin对象' })
  admin: AdminType
  @Field({ description: '登录成功后返回的token' })
  token: string
}
