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
  @Field()
  role: number
}
