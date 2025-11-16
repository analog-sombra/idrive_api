import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateCourseInput } from './create-course.input';
import { CourseType, CourseStatus } from '../entities/course.entity';

@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @Field(() => String, { nullable: true })
  courseId?: string;

  // Basic Information
  @Field(() => String, { nullable: true })
  courseName?: string;

  @Field(() => CourseType, { nullable: true })
  courseType?: CourseType;

  @Field(() => Int, { nullable: true })
  hoursPerDay?: number;

  @Field(() => Int, { nullable: true })
  courseDays?: number;

  @Field(() => Float, { nullable: true })
  price?: number;

  // Enrollment
  @Field(() => Int, { nullable: true })
  enrolledStudents?: number;

  // Course Details
  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  syllabus?: string;

  @Field(() => String, { nullable: true })
  requirements?: string;

  // Performance Metrics
  @Field(() => Int, { nullable: true })
  sessionsCompleted?: number;

  @Field(() => Float, { nullable: true })
  totalRevenue?: number;

  // Status
  @Field(() => CourseStatus, { nullable: true })
  status?: CourseStatus;
}
