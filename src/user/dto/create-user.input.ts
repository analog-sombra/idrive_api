import { InputType, Field } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  contact1: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  contact2: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  address: string;

  @IsOptional()
  @IsEnum(Role)
  @Field(() => Role, {
    nullable: true,
  })
  role: Role;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  email: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  password: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  otp: string;

  @IsOptional()
  @IsString()
  @Field(() => Date, {
    nullable: true,
  })
  dob: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  profile: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;

  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  schoolId?: number;
}
