import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsDateString,
  Min,
} from 'class-validator';

@InputType()
export class CreateSalaryHistoryInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  driverId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  salaryId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  month: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  year: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field(() => Int)
  monthNumber: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field(() => Float)
  basicSalary: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true, defaultValue: 0 })
  bonus?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true, defaultValue: 0 })
  deductions?: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field(() => Float)
  netSalary: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  transactionId?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  remarks?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  paidBy?: number;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  paidOn?: Date;
}
