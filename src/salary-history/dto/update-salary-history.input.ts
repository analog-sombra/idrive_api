import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  Min,
} from 'class-validator';
import { SalaryStatus } from '../entities/salary-history.entity';

@InputType()
export class UpdateSalaryHistoryInput {
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  month?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  year?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  monthNumber?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  basicSalary?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  bonus?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  deductions?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  netSalary?: number;

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

  @IsOptional()
  @IsEnum(SalaryStatus)
  @Field(() => SalaryStatus, { nullable: true })
  status?: SalaryStatus;
}
