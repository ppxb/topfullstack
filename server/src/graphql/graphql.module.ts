import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DatabaseModule } from 'src/database/database.module'
import { RecipesResolver } from 'src/recipes/recipes.resolver'
import { RecipesService } from 'src/recipes/recipes.service'

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    })
  ],
  providers: [RecipesService, RecipesResolver]
})
export class GraphQLAppModule {}
