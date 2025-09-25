// src/dietary/dietary.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { DietaryService } from './dietary.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MealPlanDto } from '../dto/meal-plan.dto';

@ApiTags('dietary')
@Controller('dietary')
export class DietaryController {
  constructor(private readonly dietaryService: DietaryService) {}

  @Get(':dietType')
  @ApiOperation({ summary: 'Get static 7-day meal plan for diet type' })
  @ApiResponse({ status: 200, type: MealPlanDto })
  getMealPlan(@Param('dietType') dietType: string): MealPlanDto {
    return this.dietaryService.getMealPlan(dietType);
  }
}
