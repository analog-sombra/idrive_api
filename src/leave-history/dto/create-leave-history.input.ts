import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsDateString,
  Min,
} from 'class-validator';

@InputType()
export class CreateLeaveHistoryInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  driverId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  leaveId: string;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => Date)
  fromDate: Date;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => Date)
  toDate: Date;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  reason: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  leaveType?: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field(() => Int)
  totalDays: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  approvedBy?: number;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  approvedAt?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rejectionReason?: string;
}
