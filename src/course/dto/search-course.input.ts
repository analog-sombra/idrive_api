import { InputType, Field, Int } from '@nestjs/graphql';
import { CourseType, CourseStatus } from '../entities/course.entity';

@InputType()
export class SearchCourseInput {
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @Field(() => String, { nullable: true })
  courseName?: string;

  @Field(() => CourseType, { nullable: true })
  courseType?: CourseType;

  @Field(() => CourseStatus, { nullable: true })
  status?: CourseStatus;

  @Field(() => String, { nullable: true })
  courseId?: string;
}
