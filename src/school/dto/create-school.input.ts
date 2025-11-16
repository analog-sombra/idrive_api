import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

@InputType()
export class CreateSchoolInput {
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
  phone: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  alternatePhone?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  registrationNumber: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  gstNumber?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  establishedYear: string;

  @IsOptional()
  @IsUrl()
  @Field(() => String, { nullable: true })
  website?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  logo?: string;

  // Operating Hours
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  dayStartTime?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  dayEndTime?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  lunchStartTime?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  lunchEndTime?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  weeklyHoliday?: string;

  // Owner/Contact Person
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ownerName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ownerPhone?: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  ownerEmail?: string;

  // Bank Details
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bankName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  accountNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ifscCode?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  branchName?: string;

  // License & Certifications
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rtoLicenseNumber?: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  rtoLicenseExpiry?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insuranceProvider?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insurancePolicyNumber?: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  insuranceExpiry?: Date;

  // Social Media
  @IsOptional()
  @IsUrl()
  @Field(() => String, { nullable: true })
  facebook?: string;

  @IsOptional()
  @IsUrl()
  @Field(() => String, { nullable: true })
  instagram?: string;

  @IsOptional()
  @IsUrl()
  @Field(() => String, { nullable: true })
  twitter?: string;
}
