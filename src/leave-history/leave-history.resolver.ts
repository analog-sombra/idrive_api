import { Resolver, ObjectType } from '@nestjs/graphql';
import { LeaveHistoryService } from './leave-history.service';
import { LeaveHistory } from './entities/leave-history.entity';
import { CreateLeaveHistoryInput } from './dto/create-leave-history.input';
import { WhereLeaveHistorySearchInput } from './dto/search-leave-history.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { UpdateLeaveHistoryInput } from './dto/update-leave-history.input';
import { leaveHistory, PrismaClient } from '@prisma/client';

@ObjectType()
export class LeaveHistoryPagination extends BasePaginated(LeaveHistory) {}

const BaseLeaveHistoryResolver = createBaseResolver<
  typeof LeaveHistory,
  leaveHistory,
  typeof CreateLeaveHistoryInput,
  typeof UpdateLeaveHistoryInput,
  typeof WhereLeaveHistorySearchInput,
  typeof LeaveHistoryPagination,
  PrismaClient['leaveHistory']
>(
  () => LeaveHistory,
  'LeaveHistory',
  () => CreateLeaveHistoryInput,
  () => UpdateLeaveHistoryInput,
  () => WhereLeaveHistorySearchInput,
  () => LeaveHistoryPagination,
);

@Resolver(() => LeaveHistory)
export class LeaveHistoryResolver extends BaseLeaveHistoryResolver {
  constructor(private readonly leaveHistoryService: LeaveHistoryService) {
    super(leaveHistoryService);
  }
}
