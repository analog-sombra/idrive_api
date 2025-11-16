import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateHolidayInput } from './create-holiday.input';
import { IsEnum, IsOptional } from 'class-validator';
import { HolidayStatus } from '../entities/holiday.entity';

@InputType()
export class UpdateHolidayInput extends PartialType(CreateHolidayInput) {
  @IsOptional()
  @IsEnum(HolidayStatus)
  @Field(() => String, { nullable: true })
  status?: HolidayStatus;
}
