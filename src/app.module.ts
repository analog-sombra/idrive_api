import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration.js';
import { validationSchema } from './config/env.validation.js';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UploaderModule } from './uploader/uploader.module';
import { SchoolModule } from './school/school.module';
import { DriverModule } from './driver/driver.module';
import { LeaveHistoryModule } from './leave-history/leave-history.module';
import { SalaryHistoryModule } from './salary-history/salary-history.module';
import { CarModule } from './car/car.module';
import { CourseModule } from './course/course.module';
import { SyllabusModule } from './syllabus/syllabus.module';
import { HolidayModule } from './holiday/holiday.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    // Configuration Module - Load first
    ConfigModule.forRoot({
      isGlobal: true, // Make config available globally
      load: [configuration],
      validationSchema,
      validationOptions: {
        allowUnknown: true, // Allow unknown env variables
        abortEarly: false, // Validate all fields, not just first error
      },
      cache: true, // Cache config values
      expandVariables: true, // Allow variable expansion in .env
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      sortSchema: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    UploaderModule,
    AuthModule,
    UserModule,
    SchoolModule,
    DriverModule,
    LeaveHistoryModule,
    SalaryHistoryModule,
    CarModule,
    CourseModule,
    SyllabusModule,
    HolidayModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
