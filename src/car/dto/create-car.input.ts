import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { CarStatus, FuelType, TransmissionType } from '../entities/car.entity';

@InputType()
export class CreateCarInput {
  @Field(() => Int)
  schoolId: number;

  @Field(() => String)
  carId: string;

  // Basic Information
  @Field(() => String)
  carName: string;

  @Field(() => String)
  model: string;

  @Field(() => String)
  registrationNumber: string;

  @Field(() => Int)
  year: number;

  @Field(() => String)
  color: string;

  // Technical Specifications
  @Field(() => FuelType)
  fuelType: FuelType;

  @Field(() => TransmissionType)
  transmission: TransmissionType;

  @Field(() => Int, { nullable: true, defaultValue: 5 })
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

  @Field(() => Int, { nullable: true, defaultValue: 0 })
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

  // Status
  @Field(() => CarStatus, { nullable: true, defaultValue: CarStatus.AVAILABLE })
  status?: CarStatus;
}
