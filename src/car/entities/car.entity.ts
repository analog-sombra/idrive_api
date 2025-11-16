import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  Float,
} from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';

export enum CarStatus {
  AVAILABLE = 'AVAILABLE',
  IN_USE = 'IN_USE',
  MAINTENANCE = 'MAINTENANCE',
  INACTIVE = 'INACTIVE',
}

export enum FuelType {
  PETROL = 'PETROL',
  DIESEL = 'DIESEL',
  ELECTRIC = 'ELECTRIC',
  HYBRID = 'HYBRID',
  CNG = 'CNG',
}

export enum TransmissionType {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
  AMT = 'AMT',
  CVT = 'CVT',
}

registerEnumType(CarStatus, {
  name: 'CarStatus',
});

registerEnumType(FuelType, {
  name: 'FuelType',
});

registerEnumType(TransmissionType, {
  name: 'TransmissionType',
});

@ObjectType()
export class Car {
  @Field(() => Int)
  id: number;

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

  @Field(() => Int)
  seatingCapacity: number;

  @Field(() => String, { nullable: true })
  engineNumber?: string;

  @Field(() => String, { nullable: true })
  chassisNumber?: string;

  // Purchase Information
  @Field(() => Date, { nullable: true })
  purchaseDate?: Date;

  @Field(() => Float, { nullable: true })
  purchaseCost?: number;

  @Field(() => Int)
  currentMileage: number;

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
  @Field(() => Int)
  totalBookings: number;

  // Status
  @Field(() => CarStatus)
  status: CarStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => School, { nullable: true })
  school?: School;
}
