import { Module } from '@nestjs/common'
import { GraphQLAppModule } from './graphql/graphql.module'

@Module({
  imports: [GraphQLAppModule]
})
export class AppModule {}
