import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Driver } from 'src/driver/entities/driver.entity';

export enum SalaryStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  PROCESSING = 'PROCESSING',
}

registerEnumType(SalaryStatus, {
  name: 'SalaryStatus',
});

@ObjectType()
export class SalaryHistory {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  driverId: number;

  @Field(() => String)
  salaryId: string;

  // Salary Details
  @Field(() => String)
  month: string;

  @Field(() => Int)
  year: number;

  @Field(() => Int)
  monthNumber: number;

  @Field(() => Float)
  basicSalary: number;

  @Field(() => Float)
  bonus: number;

  @Field(() => Float)
  deductions: number;

  @Field(() => Float)
  netSalary: number;

  // Payment Details
  @Field(() => String, { nullable: true })
  paymentMethod?: string;

  @Field(() => String, { nullable: true })
  transactionId?: string;

  @Field(() => String, { nullable: true })
  remarks?: string;

  @Field(() => Int, { nullable: true })
  paidBy?: number;

  @Field(() => Date, { nullable: true })
  paidOn?: Date;

  // Status
  @Field(() => SalaryStatus)
  status: SalaryStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  // Relations
  @Field(() => Driver, { nullable: true })
  driver?: Driver;
}
