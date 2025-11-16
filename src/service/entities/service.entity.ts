import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';

export enum ServiceType {
  LICENSE = 'LICENSE',
  ADDON = 'ADDON',
}

export enum ServiceStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UPCOMING = 'UPCOMING',
  DISCONTINUED = 'DISCONTINUED',
}

registerEnumType(ServiceType, {
  name: 'ServiceType',
});

registerEnumType(ServiceStatus, {
  name: 'ServiceStatus',
});

@ObjectType()
export class Service {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => String)
  serviceId: string;

  // Basic Information
  @Field(() => String)
  serviceName: string;

  @Field(() => ServiceType)
  serviceType: ServiceType;

  @Field(() => String)
  category: string;

  // Pricing & Duration
  @Field(() => Number)
  price: number;

  @Field(() => Int)
  duration: number;

  // Service Details
  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  features?: string;

  @Field(() => String, { nullable: true })
  includedServices?: string;

  @Field(() => String, { nullable: true })
  requirements?: string;

  @Field(() => String, { nullable: true })
  termsAndConditions?: string;

  // Performance Metrics
  @Field(() => Int)
  activeUsers: number;

  @Field(() => Number)
  totalRevenue: number;

  // Status
  @Field(() => ServiceStatus)
  status: ServiceStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => School, { nullable: true })
  school?: School;
}
