import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './configs/app/configuration.service';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const appConfig: AppConfigService = app.get(AppConfigService);
  await app.listen(appConfig.port);

  console.log(`Listening on port: ${appConfig.port}`);
}
bootstrap();
