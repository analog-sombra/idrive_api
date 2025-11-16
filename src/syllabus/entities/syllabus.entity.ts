import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Course } from 'src/course/entities/course.entity';

@ObjectType()
export class Syllabus {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  courseId: number;

  @Field(() => String)
  syllabusId: string;

  // Day Information
  @Field(() => Int)
  dayNumber: number;

  // Lesson Details
  @Field(() => String)
  title: string;

  @Field(() => String)
  topics: string;

  // Learning Objectives
  @Field(() => String, { nullable: true })
  objectives?: string;

  @Field(() => String, { nullable: true })
  practicalActivities?: string;

  // Assessment
  @Field(() => String, { nullable: true })
  assessmentCriteria?: string;

  // Additional Notes
  @Field(() => String, { nullable: true })
  notes?: string;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => Course, { nullable: true })
  course?: Course;
}
