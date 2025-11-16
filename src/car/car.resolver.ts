import { Resolver, ObjectType } from '@nestjs/graphql';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './dto/create-car.input';
import { SearchCarInput } from './dto/search-car.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { car, PrismaClient } from '@prisma/client';
import { UpdateCarInput } from './dto/update-car.input';

@ObjectType()
export class CarPagination extends BasePaginated(Car) {}

const BaseCarResolver = createBaseResolver<
  typeof Car,
  car,
  typeof CreateCarInput,
  typeof UpdateCarInput,
  typeof SearchCarInput,
  typeof CarPagination,
  PrismaClient['car']
>(
  () => Car,
  'Car',
  () => CreateCarInput,
  () => UpdateCarInput,
  () => SearchCarInput,
  () => CarPagination,
);

@Resolver(() => Car)
export class CarResolver extends BaseCarResolver {
  constructor(private readonly carService: CarService) {
    super(carService);
  }
}
