import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import 'dotenv/config'
import { AppModule } from './app.module'

const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true
    })
  )
  await app.listen(port)
}
bootstrap().then(() =>
  console.log(
    `🚀 graphql-playground is running on:http://localhost:${port}/graphql`
  )
)
