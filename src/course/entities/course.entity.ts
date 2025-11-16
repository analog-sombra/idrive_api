import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  Float,
} from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';

export enum CourseType {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  REFRESHER = 'REFRESHER',
}

export enum CourseStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UPCOMING = 'UPCOMING',
  ARCHIVED = 'ARCHIVED',
}

registerEnumType(CourseType, {
  name: 'CourseType',
});

registerEnumType(CourseStatus, {
  name: 'CourseStatus',
});

@ObjectType()
export class Course {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => String)
  courseId: string;

  // Basic Information
  @Field(() => String)
  courseName: string;

  @Field(() => CourseType)
  courseType: CourseType;

  @Field(() => Int)
  hoursPerDay: number;

  @Field(() => Int)
  courseDays: number;

  @Field(() => Float)
  price: number;

  // Enrollment
  @Field(() => Int)
  enrolledStudents: number;

  // Course Details
  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  syllabus?: string;

  @Field(() => String, { nullable: true })
  requirements?: string;

  // Performance Metrics
  @Field(() => Int)
  sessionsCompleted: number;

  @Field(() => Float)
  totalRevenue: number;

  // Status
  @Field(() => CourseStatus)
  status: CourseStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => School, { nullable: true })
  school?: School;
}
