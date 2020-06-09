import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import modules from '../database/schema'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: `${process.env.DATABASE_URI}/${process.env.DATABASE_TABLE}`,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useFindAndModify: false
        }
      }
    }),
    modules
  ],
  exports: [modules]
})
export class DatabaseModule {}
