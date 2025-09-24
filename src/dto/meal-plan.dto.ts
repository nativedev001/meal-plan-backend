import { IsString, IsArray } from 'class-validator';

export class MealDto {
  @IsString()
  day: string;

  @IsArray()
  meals: string[];
}

export class MealPlanDto {
  @IsString()
  dietType: string;

  @IsArray()
  plan: MealDto[];
}
