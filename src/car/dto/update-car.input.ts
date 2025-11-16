import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateCarInput } from './create-car.input';
import { CarStatus, FuelType, TransmissionType } from '../entities/car.entity';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  schoolId?: number;

  // Basic Information
  @Field(() => String, { nullable: true })
  carName?: string;

  @Field(() => String, { nullable: true })
  model?: string;

  @Field(() => String, { nullable: true })
  registrationNumber?: string;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => String, { nullable: true })
  color?: string;

  // Technical Specifications
  @Field(() => FuelType, { nullable: true })
  fuelType?: FuelType;

  @Field(() => TransmissionType, { nullable: true })
  transmission?: TransmissionType;

  @Field(() => Int, { nullable: true })
  seatingCapacity?: number;

  @Field(() => String, { nullable: true })
  engineNumber?: string;

  @Field(() => String, { nullable: true })
  chassisNumber?: string;

  // Purchase Information
  @Field(() => Date, { nullable: true })
  purchaseDate?: Date;

  @Field(() => Float, { nullable: true })
  purchaseCost?: number;

  @Field(() => Int, { nullable: true })
  currentMileage?: number;

  // Documents & Compliance
  @Field(() => String, { nullable: true })
  insuranceNumber?: string;

  @Field(() => Date, { nullable: true })
  insuranceExpiry?: Date;

  @Field(() => Date, { nullable: true })
  pucExpiry?: Date;

  @Field(() => Date, { nullable: true })
  fitnessExpiry?: Date;

  // Maintenance
  @Field(() => Date, { nullable: true })
  lastServiceDate?: Date;

  @Field(() => Date, { nullable: true })
  nextServiceDate?: Date;

  // Assignment
  @Field(() => Int, { nullable: true })
  assignedDriverId?: number;

  // Performance Metrics
  @Field(() => Int, { nullable: true })
  totalBookings?: number;

  // Status
  @Field(() => CarStatus, { nullable: true })
  status?: CarStatus;
}
