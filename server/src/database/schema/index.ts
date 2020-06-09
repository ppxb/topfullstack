import { MongooseModule } from '@nestjs/mongoose'
import { Admin, AdminSchema } from './admin.schema'
import { Recipe, RecipeSchema } from './recipe.schema'

export default MongooseModule.forFeature([
  { name: Admin.name, schema: AdminSchema },
  { name: Recipe.name, schema: RecipeSchema }
])
