import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayResolver } from './holiday.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HolidayResolver, HolidayService],
  exports: [HolidayService],
})
export class HolidayModule {}
