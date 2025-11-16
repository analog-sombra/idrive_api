import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSyllabusInput {
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
}
