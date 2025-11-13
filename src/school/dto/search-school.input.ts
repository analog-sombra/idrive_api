import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class WhereSchoolSearchInput {
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
  phone?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  alternatePhone?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  registrationNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  gstNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  status?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  establishedYear?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  website?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  weeklyHoliday?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ownerName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ownerPhone?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ownerEmail?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bankName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ifscCode?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rtoLicenseNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insuranceProvider?: string;
}
