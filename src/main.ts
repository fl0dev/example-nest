import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ? parseInt(process.env.PORT) : 80;
  console.log(`NestJS app listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
