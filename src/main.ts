import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: null, // Desativa a resposta automática de erros
    })
  );
  await app.listen(3000);
}

bootstrap()

