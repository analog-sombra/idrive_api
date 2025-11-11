import { Resolver, ObjectType } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { WhereUserSearchInput } from './dto/search-user.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { user, PrismaClient } from '@prisma/client';

@ObjectType()
export class UserPagination extends BasePaginated(User) {}

const BaseUserResolver = createBaseResolver<
  typeof User,
  user,
  typeof CreateUserInput,
  typeof UpdateUserInput,
  typeof WhereUserSearchInput,
  typeof UserPagination,
  PrismaClient['user']
>(
  () => User,
  'User',
  () => CreateUserInput,
  () => UpdateUserInput,
  () => WhereUserSearchInput,
  () => UserPagination,
);

@Resolver(() => User)
export class UserResolver extends BaseUserResolver {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
