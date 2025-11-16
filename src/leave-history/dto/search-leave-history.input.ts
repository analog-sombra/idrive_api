import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt, IsEnum } from 'class-validator';
import { LeaveStatus } from '../entities/leave-history.entity';

@InputType()
export class WhereLeaveHistorySearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  driverId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  leaveId?: string;

  @IsOptional()
  @IsEnum(LeaveStatus)
  @Field(() => LeaveStatus, { nullable: true })
  status?: LeaveStatus;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  leaveType?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search?: string;
}
