import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Driver } from 'src/driver/entities/driver.entity';

export enum LeaveStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(LeaveStatus, {
  name: 'LeaveStatus',
});

@ObjectType()
export class LeaveHistory {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  driverId: number;

  @Field(() => String)
  leaveId: string;

  // Leave Details
  @Field(() => Date)
  fromDate: Date;

  @Field(() => Date)
  toDate: Date;

  @Field(() => String)
  reason: string;

  @Field(() => String, { nullable: true })
  leaveType?: string;

  @Field(() => Int)
  totalDays: number;

  // Approval Details
  @Field(() => LeaveStatus)
  status: LeaveStatus;

  @Field(() => Int, { nullable: true })
  approvedBy?: number;

  @Field(() => Date, { nullable: true })
  approvedAt?: Date;

  @Field(() => String, { nullable: true })
  rejectionReason?: string;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  // Relations
  @Field(() => Driver, { nullable: true })
  driver?: Driver;
}
