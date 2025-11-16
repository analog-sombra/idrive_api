import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt, IsEnum } from 'class-validator';
import { SalaryStatus } from '../entities/salary-history.entity';

@InputType()
export class WhereSalaryHistorySearchInput {
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
  salaryId?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  month?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  year?: number;

  @IsOptional()
  @IsEnum(SalaryStatus)
  @Field(() => SalaryStatus, { nullable: true })
  status?: SalaryStatus;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search?: string;
}
