import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { WhereUserSearchInput } from './dto/search-user.input';
import { BaseService } from 'src/base/base.service';
import { UserPagination } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { user, PrismaClient } from '@prisma/client';
@Injectable()
export class UserService extends BaseService<
  user,
  typeof CreateUserInput,
  typeof UpdateUserInput,
  typeof WhereUserSearchInput,
  typeof UserPagination,
  PrismaClient['user']
> {
  constructor(private readonly prisma: PrismaService) {
    super('User', prisma.user);
  }
}
