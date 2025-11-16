import { Resolver, ObjectType } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { Service } from './entities/service.entity';
import { CreateServiceInput } from './dto/create-service.input';
import { WhereServiceSearchInput } from './dto/search-service.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { service, PrismaClient } from '@prisma/client';
import { UpdateServiceInput } from './dto/update-service.input';

@ObjectType()
export class ServicePagination extends BasePaginated(Service) {}

const BaseServiceResolver = createBaseResolver<
  typeof Service,
  service,
  typeof CreateServiceInput,
  typeof UpdateServiceInput,
  typeof WhereServiceSearchInput,
  typeof ServicePagination,
  PrismaClient['service']
>(
  () => Service,
  'Service',
  () => CreateServiceInput,
  () => UpdateServiceInput,
  () => WhereServiceSearchInput,
  () => ServicePagination,
);

@Resolver(() => Service)
export class ServiceResolver extends BaseServiceResolver {
  constructor(private readonly serviceService: ServiceService) {
    super(serviceService);
  }
}
