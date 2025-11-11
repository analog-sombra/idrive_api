import { ObjectType, Field, Int } from '@nestjs/graphql';

type Constructor<T = any> = new (...args: any[]) => T;

export function BasePaginated<T>(classRef: Constructor<T>) {
  @ObjectType({ isAbstract: true })
  abstract class BasePaginatedType {
    @Field(() => [classRef])
    data: T[];

    @Field(() => Int)
    total: number;

    @Field(() => Int)
    skip: number;

    @Field(() => Int)
    take: number;
  }

  return BasePaginatedType;
}
