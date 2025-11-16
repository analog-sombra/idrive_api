import { Injectable } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { WhereServiceSearchInput } from './dto/search-service.input';
import { BaseService } from 'src/base/base.service';
import { ServicePagination } from './service.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { service, PrismaClient } from '@prisma/client';
import { UpdateServiceInput } from './dto/update-service.input';

@Injectable()
export class ServiceService extends BaseService<
  service,
  typeof CreateServiceInput,
  typeof UpdateServiceInput,
  typeof WhereServiceSearchInput,
  typeof ServicePagination,
  PrismaClient['service']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Service', prisma.service);
  }
}
