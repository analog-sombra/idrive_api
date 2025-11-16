import { Resolver, ObjectType } from '@nestjs/graphql';
import { SyllabusService } from './syllabus.service';
import { Syllabus } from './entities/syllabus.entity';
import { CreateSyllabusInput } from './dto/create-syllabus.input';
import { SearchSyllabusInput } from './dto/search-syllabus.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { UpdateSyllabusInput } from './dto/update-syllabus.input';
import { syllabus, PrismaClient } from '@prisma/client';

@ObjectType()
export class SyllabusPagination extends BasePaginated(Syllabus) {}

const BaseSyllabusResolver = createBaseResolver<
  typeof Syllabus,
  syllabus,
  typeof CreateSyllabusInput,
  typeof UpdateSyllabusInput,
  typeof SearchSyllabusInput,
  typeof SyllabusPagination,
  PrismaClient['syllabus']
>(
  () => Syllabus,
  'Syllabus',
  () => CreateSyllabusInput,
  () => UpdateSyllabusInput,
  () => SearchSyllabusInput,
  () => SyllabusPagination,
);

@Resolver(() => Syllabus)
export class SyllabusResolver extends BaseSyllabusResolver {
  constructor(private readonly syllabusService: SyllabusService) {
    super(syllabusService);
  }
}
