import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSyllabusInput } from './create-syllabus.input';

@InputType()
export class UpdateSyllabusInput extends PartialType(CreateSyllabusInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  courseId?: number;

  @Field(() => String, { nullable: true })
  syllabusId?: string;

  // Day Information
  @Field(() => Int, { nullable: true })
  dayNumber?: number;

  // Lesson Details
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  topics?: string;

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
