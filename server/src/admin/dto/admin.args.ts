import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class AdminArgs {
  @Field(type => String)
  username: string

  @Field(type => String)
  password: string
}
