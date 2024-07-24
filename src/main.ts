import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS se necessário
  app.enableCors();

  // Configurar porta
  const port = process.env.PORT || 4000;
  await app.listen(port);

  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
