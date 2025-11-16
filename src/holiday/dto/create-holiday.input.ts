import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsInt,
  IsDateString,
} from 'class-validator';
import { HolidayDeclarationType } from '../entities/holiday.entity';

@InputType()
export class CreateHolidayInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsEnum(HolidayDeclarationType)
  @Field(() => String)
  declarationType: HolidayDeclarationType;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  carId?: number;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => String)
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => String)
  endDate: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  slots?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  reason: string;
}
