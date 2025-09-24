import { Controller, Get, Param } from '@nestjs/common';
import { DietaryService } from './dietary.service';
import { MealPlanDto } from '../dto/meal-plan.dto';

@Controller('dietary')
export class DietaryController {
  constructor(private readonly dietaryService: DietaryService) {}

  @Get(':dietType')
  getMealPlan(@Param('dietType') dietType: string): MealPlanDto {
    return this.dietaryService.getMealPlan(dietType);
  }
}
