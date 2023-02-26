import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Sequelize } from 'sequelize-typescript';
import { Settings } from 'luxon';

import { AppModule } from './app.module';

import { umzugInitializer } from '../umzug-initializer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Luxon Global Settings
  Settings.defaultZone = 'America/Bogota';

  const configService = app.get(ConfigService);
  const sequelize = app.get(Sequelize);

  // Migrations
  const appEnv = configService.get('server.env');

  if (appEnv === 'PRODUCTION' || appEnv === 'DOCKER') {
    const { migrator, seeder } = umzugInitializer(sequelize);

    await migrator.up();
    await seeder.up();
  }

  const port = configService.get<number>('server.port');
  await app.listen(port);
}
bootstrap();
