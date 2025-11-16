import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  Min,
} from 'class-validator';
import { DriverStatus } from '../entities/driver.entity';

@InputType()
export class UpdateDriverInput {
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  mobile?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  alternatePhone?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bloodGroup?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  gender?: string;

  // License Information
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  licenseNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  licenseType?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  licenseIssueDate?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  licenseExpiryDate?: Date;

  // Professional Information
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  experience?: number;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  joiningDate?: Date;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  salary?: number;

  // Emergency Contact
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  emergencyContactName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  emergencyContactNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  emergencyContactRelation?: string;

  // Performance Metrics
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  totalBookings?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  completedBookings?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  cancelledBookings?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  rating?: number;

  // Status
  @IsOptional()
  @IsEnum(DriverStatus)
  @Field(() => DriverStatus, { nullable: true })
  status?: DriverStatus;
}
