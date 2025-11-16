import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Car } from 'src/car/entities/car.entity';
import { School } from 'src/school/entities/school.entity';

export enum HolidayDeclarationType {
  ALL_CARS_MULTIPLE_DATES = 'ALL_CARS_MULTIPLE_DATES',
  ONE_CAR_MULTIPLE_DATES = 'ONE_CAR_MULTIPLE_DATES',
  ALL_CARS_PARTICULAR_SLOTS = 'ALL_CARS_PARTICULAR_SLOTS',
  ONE_CAR_PARTICULAR_SLOTS = 'ONE_CAR_PARTICULAR_SLOTS',
}

export enum HolidayStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  UPCOMING = 'UPCOMING',
  CANCELLED = 'CANCELLED',
}

registerEnumType(HolidayDeclarationType, {
  name: 'HolidayDeclarationType',
});

registerEnumType(HolidayStatus, {
  name: 'HolidayStatus',
});

@ObjectType()
export class Holiday {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => HolidayDeclarationType)
  declarationType: HolidayDeclarationType;

  @Field(() => Int, { nullable: true })
  carId?: number;

  @Field(() => Car, { nullable: true })
  car?: Car;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => [String], { nullable: true })
  slots?: string[];

  @Field(() => String)
  reason: string;

  @Field(() => HolidayStatus)
  status: HolidayStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => School, { nullable: true })
  school?: School;
}
