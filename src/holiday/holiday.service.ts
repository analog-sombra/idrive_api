import { Injectable } from '@nestjs/common';
import { CreateHolidayInput } from './dto/create-holiday.input';
import { SearchHolidayInput } from './dto/search-holiday.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { holiday, PrismaClient } from '@prisma/client';
import { UpdateHolidayInput } from './dto/update-holiday.input';
import { HolidayPagination } from './holiday.resolver';

@Injectable()
export class HolidayService extends BaseService<
  holiday,
  typeof CreateHolidayInput,
  typeof UpdateHolidayInput,
  typeof SearchHolidayInput,
  typeof HolidayPagination,
  PrismaClient['holiday']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Holiday', prisma.holiday);
  }
}
