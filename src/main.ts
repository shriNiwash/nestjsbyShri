import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {resolve,join} from 'path';
import {NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule
  )
  await app.listen(3000);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
}
bootstrap();
