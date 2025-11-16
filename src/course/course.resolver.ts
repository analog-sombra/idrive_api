import { Resolver, ObjectType } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { SearchCourseInput } from './dto/search-course.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { course, PrismaClient } from '@prisma/client';
import { UpdateCourseInput } from './dto/update-course.input';

@ObjectType()
export class CoursePagination extends BasePaginated(Course) {}

const BaseCourseResolver = createBaseResolver<
  typeof Course,
  course,
  typeof CreateCourseInput,
  typeof UpdateCourseInput,
  typeof SearchCourseInput,
  typeof CoursePagination,
  PrismaClient['course']
>(
  () => Course,
  'Course',
  () => CreateCourseInput,
  () => UpdateCourseInput,
  () => SearchCourseInput,
  () => CoursePagination,
);

@Resolver(() => Course)
export class CourseResolver extends BaseCourseResolver {
  constructor(private readonly courseService: CourseService) {
    super(courseService);
  }
}
