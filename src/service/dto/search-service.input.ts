import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, IsEnum } from 'class-validator';
import { ServiceType, ServiceStatus } from '../entities/service.entity';

@InputType()
export class WhereServiceSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsEnum(ServiceType)
  @Field(() => ServiceType, { nullable: true })
  serviceType?: ServiceType;

  @IsOptional()
  @IsEnum(ServiceStatus)
  @Field(() => ServiceStatus, { nullable: true })
  status?: ServiceStatus;
}
