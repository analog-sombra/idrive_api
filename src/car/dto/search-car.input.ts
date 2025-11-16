import { InputType, Field, Int } from '@nestjs/graphql';
import { CarStatus, FuelType } from '../entities/car.entity';

@InputType()
export class SearchCarInput {
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @Field(() => CarStatus, { nullable: true })
  status?: CarStatus;

  @Field(() => FuelType, { nullable: true })
  fuelType?: FuelType;

  @Field(() => Int, { nullable: true })
  assignedDriverId?: number;

  @Field(() => String, { nullable: true })
  search?: string;
}
