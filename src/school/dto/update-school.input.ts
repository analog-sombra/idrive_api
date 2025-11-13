import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSchoolInput } from './create-school.input';
import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

enum SchoolStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

@InputType()
export class UpdateSchoolInput extends PartialType(CreateSchoolInput) {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsEnum(SchoolStatus)
  @Field(() => String, { nullable: true })
  status?: SchoolStatus;
}
