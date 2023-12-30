import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport'; // Importar o passport

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Configurar o middleware Passport
  app.use(passport.initialize());

  await app.listen(3000);
}
bootstrap();
