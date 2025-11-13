import { Injectable } from '@nestjs/common';
import { CreateSchoolInput } from './dto/create-school.input';
import { WhereSchoolSearchInput } from './dto/search-school.input';
import { BaseService } from 'src/base/base.service';
import { SchoolPagination } from './school.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { school, PrismaClient } from '@prisma/client';
import { UpdateSchoolInput } from './dto/update-school.input';

@Injectable()
export class SchoolService extends BaseService<
  school,
  typeof CreateSchoolInput,
  typeof UpdateSchoolInput,
  typeof WhereSchoolSearchInput,
  typeof SchoolPagination,
  PrismaClient['school']
> {
  constructor(private readonly prisma: PrismaService) {
    super('School', prisma.school);
  }
}
