import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Recipe as RecipeDb } from '../database/schema/recipe.schema'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { UpdateRecipeInput } from './dto/update-recipe.input'
import { Recipe } from './recipe.graphql.model'

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(RecipeDb.name) private recipeDbModel: Model<RecipeDb>
  ) {}

  async create(newRecipeInput: NewRecipeInput): Promise<Recipe> {
    return new this.recipeDbModel(newRecipeInput).save()
  }

  async update(updateRecipeInput: UpdateRecipeInput): Promise<Recipe> {
    const id = updateRecipeInput._id
    return this.recipeDbModel.findByIdAndUpdate(id, updateRecipeInput)
  }

  async findOneById(id: string): Promise<Recipe> {
    let recipe
    try {
      recipe = await this.recipeDbModel.findById(id)
    } catch (ExceptionsHandler) {
      throw new BadRequestException(`${id} is not a valid id.`)
    }
    if (!recipe) {
      throw new NotFoundException(`${id} is not found.`)
    }
    return recipe
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipeDbModel.find().setOptions({ ...recipesArgs })
  }

  async del(id: string): Promise<boolean> {
    const removeRecipe = await this.recipeDbModel.findByIdAndDelete(id)
    if (removeRecipe) return true
    return false
  }
}
