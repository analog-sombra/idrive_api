import { Injectable } from '@nestjs/common';
import { CreateSyllabusInput } from './dto/create-syllabus.input';
import { SearchSyllabusInput } from './dto/search-syllabus.input';
import { BaseService } from 'src/base/base.service';
import { SyllabusPagination } from './syllabus.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { syllabus, PrismaClient } from '@prisma/client';
import { UpdateSyllabusInput } from './dto/update-syllabus.input';

@Injectable()
export class SyllabusService extends BaseService<
  syllabus,
  typeof CreateSyllabusInput,
  typeof UpdateSyllabusInput,
  typeof SearchSyllabusInput,
  typeof SyllabusPagination,
  PrismaClient['syllabus']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Syllabus', prisma.syllabus);
  }
}
