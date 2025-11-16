import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { SearchCourseInput } from './dto/search-course.input';
import { BaseService } from 'src/base/base.service';
import { CoursePagination } from './course.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { course, PrismaClient } from '@prisma/client';
import { UpdateCourseInput } from './dto/update-course.input';

@Injectable()
export class CourseService extends BaseService<
  course,
  typeof CreateCourseInput,
  typeof UpdateCourseInput,
  typeof SearchCourseInput,
  typeof CoursePagination,
  PrismaClient['course']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Course', prisma.course);
  }
}
