import { Resolver, ObjectType } from '@nestjs/graphql';
import { HolidayService } from './holiday.service';
import { Holiday } from './entities/holiday.entity';
import { CreateHolidayInput } from './dto/create-holiday.input';
import { SearchHolidayInput } from './dto/search-holiday.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { holiday, PrismaClient } from '@prisma/client';
import { UpdateHolidayInput } from './dto/update-holiday.input';

@ObjectType()
export class HolidayPagination extends BasePaginated(Holiday) {}

const BaseHolidayResolver = createBaseResolver<
  typeof Holiday,
  holiday,
  typeof CreateHolidayInput,
  typeof UpdateHolidayInput,
  typeof SearchHolidayInput,
  typeof HolidayPagination,
  PrismaClient['holiday']
>(
  () => Holiday,
  'Holiday',
  () => CreateHolidayInput,
  () => UpdateHolidayInput,
  () => SearchHolidayInput,
  () => HolidayPagination,
);

@Resolver(() => Holiday)
export class HolidayResolver extends BaseHolidayResolver {
  constructor(private readonly holidayService: HolidayService) {
    super(holidayService);
  }
}
