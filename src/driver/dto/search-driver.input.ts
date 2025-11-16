import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt, IsEnum } from 'class-validator';
import { DriverStatus } from '../entities/driver.entity';

@InputType()
export class WhereDriverSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  userId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  driverId?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  mobile?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  licenseNumber?: string;

  @IsOptional()
  @IsEnum(DriverStatus)
  @Field(() => DriverStatus, { nullable: true })
  status?: DriverStatus;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search?: string;
}
