import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray } from 'class-validator';

export class MealDto {
  @ApiProperty()
  @IsString()
  day: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  meals: string[];
}

export class MealPlanDto {
  @ApiProperty()
  @IsString()
  dietType: string;

  @ApiProperty({ type: [MealDto] })
  @IsArray()
  plan: MealDto[];
}
