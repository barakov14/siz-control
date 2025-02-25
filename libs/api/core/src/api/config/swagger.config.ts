import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('СИЗ.Контрол API')
  .setDescription('Документация REST API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
