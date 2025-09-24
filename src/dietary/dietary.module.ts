import { Module } from '@nestjs/common';
import { DietaryService } from './dietary.service';
import { DietaryController } from './dietary.controller';

@Module({
  providers: [DietaryService],
  controllers: [DietaryController]
})
export class DietaryModule {}
