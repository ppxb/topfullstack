import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Admin extends Document {
  @Prop()
  username: string
  @Prop()
  password: string
  @Prop({ default: 'admin' })
  nickname: string
  @Prop({
    default:
      'https://img2.woyaogexing.com/2020/06/10/4ffa769a66d744e99d2914ee179682b2!400x400.jpeg'
  })
  avatar: string
  @Prop({ default: ['admin'] })
  roles: string[]
}

export const AdminSchema = SchemaFactory.createForClass(Admin)
