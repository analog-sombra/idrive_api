import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SearchSyllabusInput {
  @Field(() => Int, { nullable: true })
  courseId?: number;

  @Field(() => Int, { nullable: true })
  dayNumber?: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  syllabusId?: string;
}
