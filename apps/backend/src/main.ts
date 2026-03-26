import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.enableCors({
    origin: [
      process.env.FRONTEND_URL,
      process.env.ADMIN_URL,
    ],
    credentials: true,
  })

  await app.listen(4002)
  console.log('Backend running on http://localhost:4002')
}
bootstrap()
