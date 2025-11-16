import { Module } from '@nestjs/common';
import { SalaryHistoryService } from './salary-history.service';
import { SalaryHistoryResolver } from './salary-history.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SalaryHistoryResolver, SalaryHistoryService],
  exports: [SalaryHistoryService],
})
export class SalaryHistoryModule {}
