import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';

@InputType()
export class WhereUserSearchInput extends PartialType(CreateUserInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact1?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact2?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address?: string;

  @IsOptional()
  @IsEnum(Role)
  @Field(() => Role, { nullable: true })
  role?: Role;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  otp?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  dob?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  profile?: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
