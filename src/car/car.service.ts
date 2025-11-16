import { Injectable } from '@nestjs/common';
import { CreateCarInput } from './dto/create-car.input';
import { SearchCarInput } from './dto/search-car.input';
import { BaseService } from 'src/base/base.service';
import { CarPagination } from './car.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { car, PrismaClient } from '@prisma/client';
import { UpdateCarInput } from './dto/update-car.input';

@Injectable()
export class CarService extends BaseService<
  car,
  typeof CreateCarInput,
  typeof UpdateCarInput,
  typeof SearchCarInput,
  typeof CarPagination,
  PrismaClient['car']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Car', prisma.car);
  }
}
