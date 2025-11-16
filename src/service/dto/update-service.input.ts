import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateServiceInput } from './create-service.input';
import {
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsEnum,
  Min,
} from 'class-validator';
import { ServiceType, ServiceStatus } from '../entities/service.entity';

@InputType()
export class UpdateServiceInput extends PartialType(CreateServiceInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  serviceName?: string;

  @IsOptional()
  @IsEnum(ServiceType)
  @Field(() => ServiceType, { nullable: true })
  serviceType?: ServiceType;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  category?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Number, { nullable: true })
  price?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  duration?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  features?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  includedServices?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  requirements?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  termsAndConditions?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  activeUsers?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Number, { nullable: true })
  totalRevenue?: number;

  @IsOptional()
  @IsEnum(ServiceStatus)
  @Field(() => ServiceStatus, { nullable: true })
  status?: ServiceStatus;
}
