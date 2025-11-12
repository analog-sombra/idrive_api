import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllExceptionsFilter } from './common/filters/http-exception.filter.js';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor.js';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.enableCors({ origin: '*' });

  // Get ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port', 9997);

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that don't have decorators
      forbidNonWhitelisted: true, // Throw error if non-whitelisted properties exist
      transform: true, // Automatically transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // Automatically convert primitive types
      },
    }),
  );

  // Global Exception Filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Global Logging Interceptor
  app.useGlobalInterceptors(new LoggingInterceptor());

  // CORS Configuration
  // app.enableCors({
  //   origin: (
  //     origin: string | undefined,
  //     callback: (err: Error | null, allow?: boolean) => void,
  //   ) => {
  //     // Allow requests with no origin (like mobile apps or Postman)
  //     if (!origin) {
  //       callback(null, true);
  //       return;
  //     }

  //     // Check if origin is in allowed list
  //     if (allowedOrigins.includes(origin)) {
  //       callback(null, true);
  //       return;
  //     }

  //     // Log rejected origins for debugging
  //     logger.warn(`CORS blocked origin: ${origin}`);
  //     callback(new Error('Not allowed by CORS'));
  //   },
  //   credentials: true,
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  //   allowedHeaders: [
  //     'Content-Type',
  //     'Authorization',
  //     'Accept',
  //     'apollo-require-preflight',
  //   ],
  //   exposedHeaders: ['Content-Type', 'Authorization'],
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  // });

  // Body parser configuration
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(port);

  logger.log(`🚀 Application is running on: http://localhost:${port}`);
  logger.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`);
  logger.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  // logger.log(`🔒 CORS enabled for: ${allowedOrigins.join(', ')}`);
}

bootstrap().catch((error) => {
  console.error('❌ Error starting application:', error);
  process.exit(1);
});
