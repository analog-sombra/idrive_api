import { Module } from '@nestjs/common';
import { LeaveHistoryService } from './leave-history.service';
import { LeaveHistoryResolver } from './leave-history.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LeaveHistoryResolver, LeaveHistoryService],
  exports: [LeaveHistoryService],
})
export class LeaveHistoryModule {}
