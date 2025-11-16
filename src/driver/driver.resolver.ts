import { Resolver, ObjectType } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import { Driver } from './entities/driver.entity';
import { CreateDriverInput } from './dto/create-driver.input';
import { WhereDriverSearchInput } from './dto/search-driver.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { UpdateDriverInput } from './dto/update-driver.input';
import { driver, PrismaClient } from '@prisma/client';

@ObjectType()
export class DriverPagination extends BasePaginated(Driver) {}

const BaseDriverResolver = createBaseResolver<
  typeof Driver,
  driver,
  typeof CreateDriverInput,
  typeof UpdateDriverInput,
  typeof WhereDriverSearchInput,
  typeof DriverPagination,
  PrismaClient['driver']
>(
  () => Driver,
  'Driver',
  () => CreateDriverInput,
  () => UpdateDriverInput,
  () => WhereDriverSearchInput,
  () => DriverPagination,
);

@Resolver(() => Driver)
export class DriverResolver extends BaseDriverResolver {
  constructor(private readonly driverService: DriverService) {
    super(driverService);
  }
}
