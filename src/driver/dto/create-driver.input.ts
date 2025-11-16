import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsDateString,
  Min,
} from 'class-validator';

@InputType()
export class CreateDriverInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  driverId: string;

  // Personal Information
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  alternatePhone?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => Date)
  dateOfBirth: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bloodGroup?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  gender: string;

  // License Information
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  licenseNumber: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  licenseType: string;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => Date)
  licenseIssueDate: Date;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => Date)
  licenseExpiryDate: Date;

  // Professional Information
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  experience?: number;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  joiningDate?: Date;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true, defaultValue: 0 })
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

  // Performance Metrics (optional on creation)
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  totalBookings?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  completedBookings?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  cancelledBookings?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true, defaultValue: 0 })
  rating?: number;
}
