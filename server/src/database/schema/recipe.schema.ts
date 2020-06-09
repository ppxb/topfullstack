import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Recipe extends Document {
  @Prop()
  title: string
  @Prop()
  description: string
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)
