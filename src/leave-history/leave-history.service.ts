import { Injectable } from '@nestjs/common';
import { CreateLeaveHistoryInput } from './dto/create-leave-history.input';
import { WhereLeaveHistorySearchInput } from './dto/search-leave-history.input';
import { BaseService } from 'src/base/base.service';
import { LeaveHistoryPagination } from './leave-history.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateLeaveHistoryInput } from './dto/update-leave-history.input';
import { leaveHistory, PrismaClient } from '@prisma/client';

@Injectable()
export class LeaveHistoryService extends BaseService<
  leaveHistory,
  typeof CreateLeaveHistoryInput,
  typeof UpdateLeaveHistoryInput,
  typeof WhereLeaveHistorySearchInput,
  typeof LeaveHistoryPagination,
  PrismaClient['leaveHistory']
> {
  constructor(private readonly prisma: PrismaService) {
    super('LeaveHistory', prisma.leaveHistory);
  }
}
