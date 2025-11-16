import { Injectable } from '@nestjs/common';
import { CreateDriverInput } from './dto/create-driver.input';
import { WhereDriverSearchInput } from './dto/search-driver.input';
import { BaseService } from 'src/base/base.service';
import { DriverPagination } from './driver.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { driver, PrismaClient } from '@prisma/client';
import { UpdateDriverInput } from './dto/update-driver.input';

@Injectable()
export class DriverService extends BaseService<
  driver,
  typeof CreateDriverInput,
  typeof UpdateDriverInput,
  typeof WhereDriverSearchInput,
  typeof DriverPagination,
  PrismaClient['driver']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Driver', prisma.driver);
  }
}
