import { Resolver, ObjectType } from '@nestjs/graphql';
import { SalaryHistoryService } from './salary-history.service';
import { SalaryHistory } from './entities/salary-history.entity';
import { CreateSalaryHistoryInput } from './dto/create-salary-history.input';
import { WhereSalaryHistorySearchInput } from './dto/search-salary-history.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { UpdateSalaryHistoryInput } from './dto/update-salary-history.input';
import { PrismaClient, salaryHistory } from '@prisma/client';

@ObjectType()
export class SalaryHistoryPagination extends BasePaginated(SalaryHistory) {}

const BaseSalaryHistoryResolver = createBaseResolver<
  typeof SalaryHistory,
  salaryHistory,
  typeof CreateSalaryHistoryInput,
  typeof UpdateSalaryHistoryInput,
  typeof WhereSalaryHistorySearchInput,
  typeof SalaryHistoryPagination,
  PrismaClient['salaryHistory']
>(
  () => SalaryHistory,
  'SalaryHistory',
  () => CreateSalaryHistoryInput,
  () => UpdateSalaryHistoryInput,
  () => WhereSalaryHistorySearchInput,
  () => SalaryHistoryPagination,
);

@Resolver(() => SalaryHistory)
export class SalaryHistoryResolver extends BaseSalaryHistoryResolver {
  constructor(private readonly salaryHistoryService: SalaryHistoryService) {
    super(salaryHistoryService);
  }
}
