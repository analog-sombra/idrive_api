import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt, IsDateString } from 'class-validator';

@InputType()
export class SearchHolidayInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  declarationType?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  carId?: number;

  @IsOptional()
  @IsDateString()
  @Field(() => String, { nullable: true })
  startDate?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => String, { nullable: true })
  endDate?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  status?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  reason?: string;
}
