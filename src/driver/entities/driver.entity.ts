import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { School } from 'src/school/entities/school.entity';
import { LeaveHistory } from 'src/leave-history/entities/leave-history.entity';
import { SalaryHistory } from 'src/salary-history/entities/salary-history.entity';

export enum DriverStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  SUSPENDED = 'SUSPENDED',
}

registerEnumType(DriverStatus, {
  name: 'DriverStatus',
});

@ObjectType()
export class Driver {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => String)
  driverId: string;

  // Personal Information
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  mobile: string;

  @Field(() => String, { nullable: true })
  alternatePhone?: string;

  @Field(() => String)
  address: string;

  @Field(() => Date)
  dateOfBirth: Date;

  @Field(() => String, { nullable: true })
  bloodGroup?: string;

  @Field(() => String)
  gender: string;

  // License Information
  @Field(() => String)
  licenseNumber: string;

  @Field(() => String)
  licenseType: string;

  @Field(() => Date)
  licenseIssueDate: Date;

  @Field(() => Date)
  licenseExpiryDate: Date;

  // Professional Information
  @Field(() => Int)
  experience: number;

  @Field(() => Date)
  joiningDate: Date;

  @Field(() => Float)
  salary: number;

  // Emergency Contact
  @Field(() => String, { nullable: true })
  emergencyContactName?: string;

  @Field(() => String, { nullable: true })
  emergencyContactNumber?: string;

  @Field(() => String, { nullable: true })
  emergencyContactRelation?: string;

  // Performance Metrics
  @Field(() => Int)
  totalBookings: number;

  @Field(() => Int)
  completedBookings: number;

  @Field(() => Int)
  cancelledBookings: number;

  @Field(() => Float)
  rating: number;

  // Status
  @Field(() => DriverStatus)
  status: DriverStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => School, { nullable: true })
  school?: School;

  @Field(() => [LeaveHistory], { nullable: true })
  leaveHistory?: LeaveHistory[];

  @Field(() => [SalaryHistory], { nullable: true })
  salaryHistory?: SalaryHistory[];
}
