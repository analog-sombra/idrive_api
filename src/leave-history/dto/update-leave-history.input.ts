import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
  IsInt,
  IsDateString,
  IsEnum,
  Min,
} from 'class-validator';
import { LeaveStatus } from '../entities/leave-history.entity';

@InputType()
export class UpdateLeaveHistoryInput {
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  fromDate?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  toDate?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  reason?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  leaveType?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  totalDays?: number;

  @IsOptional()
  @IsEnum(LeaveStatus)
  @Field(() => LeaveStatus, { nullable: true })
  status?: LeaveStatus;

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
