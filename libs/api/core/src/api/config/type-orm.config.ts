import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Автозагрузка сущностей
  synchronize: true, // Отключить в продакшене
  autoLoadEntities: true, // Только для NestJS
});

export const dataSourceConfig = (configService: ConfigService): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // В проде ставим false
});

export const createDataSource = (configService: ConfigService): DataSource =>
  new DataSource(dataSourceConfig(configService));
