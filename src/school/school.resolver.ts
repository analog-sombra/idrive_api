import { Resolver, ObjectType } from '@nestjs/graphql';
import { SchoolService } from './school.service';
import { School } from './entities/school.entity';
import { CreateSchoolInput } from './dto/create-school.input';
import { WhereSchoolSearchInput } from './dto/search-school.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { school, PrismaClient } from '@prisma/client';
import { UpdateSchoolInput } from './dto/update-school.input';

@ObjectType()
export class SchoolPagination extends BasePaginated(School) {}

const BaseSchoolResolver = createBaseResolver<
  typeof School,
  school,
  typeof CreateSchoolInput,
  typeof UpdateSchoolInput,
  typeof WhereSchoolSearchInput,
  typeof SchoolPagination,
  PrismaClient['school']
>(
  () => School,
  'School',
  () => CreateSchoolInput,
  () => UpdateSchoolInput,
  () => WhereSchoolSearchInput,
  () => SchoolPagination,
);

@Resolver(() => School)
export class SchoolResolver extends BaseSchoolResolver {
  constructor(private readonly schoolService: SchoolService) {
    super(schoolService);
  }
}
