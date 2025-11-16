import { Injectable } from '@nestjs/common';
import { CreateSalaryHistoryInput } from './dto/create-salary-history.input';
import { WhereSalaryHistorySearchInput } from './dto/search-salary-history.input';
import { BaseService } from 'src/base/base.service';
import { SalaryHistoryPagination } from './salary-history.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateSalaryHistoryInput } from './dto/update-salary-history.input';
import { PrismaClient, salaryHistory } from '@prisma/client';

@Injectable()
export class SalaryHistoryService extends BaseService<
  salaryHistory,
  typeof CreateSalaryHistoryInput,
  typeof UpdateSalaryHistoryInput,
  typeof WhereSalaryHistorySearchInput,
  typeof SalaryHistoryPagination,
  PrismaClient['salaryHistory']
> {
  constructor(private readonly prisma: PrismaService) {
    super('SalaryHistory', prisma.salaryHistory);
  }
}
