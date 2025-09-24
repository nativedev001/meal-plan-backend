import { Injectable, NotFoundException } from '@nestjs/common';
import { MealPlanDto } from '../dto/meal-plan.dto';

@Injectable()
export class DietaryService {
  private readonly mealPlans: Record<string, MealPlanDto> = {
    vegetarian: {
      dietType: 'vegetarian',
      plan: [
        { day: 'Monday', meals: ['Oatmeal', 'Veggie Wrap', 'Lentil Curry'] },
        { day: 'Tuesday', meals: ['Smoothie Bowl', 'Chickpea Salad', 'Pasta Primavera'] },
        { day: 'Wednesday', meals: ['Avocado Toast', 'Veggie Burger', 'Stuffed Peppers'] },
        { day: 'Thursday', meals: ['Fruit Salad', 'Quinoa Bowl', 'Vegetable Stir-Fry'] },
        { day: 'Friday', meals: ['Granola', 'Veggie Sandwich', 'Paneer Tikka'] },
        { day: 'Saturday', meals: ['Pancakes', 'Hummus Wrap', 'Veggie Pizza'] },
        { day: 'Sunday', meals: ['Tofu Scramble', 'Greek Salad', 'Mushroom Risotto'] },
      ],
    },
    'gluten-free': {
      dietType: 'gluten-free',
      plan: [
        { day: 'Monday', meals: ['Smoothie', 'Grilled Chicken Salad', 'Rice & Beans'] },
        { day: 'Tuesday', meals: ['Eggs & Avocado', 'Quinoa Salad', 'Salmon & Veggies'] },
        { day: 'Wednesday', meals: ['Fruit Bowl', 'Rice Noodles', 'Beef & Veggies'] },
        { day: 'Thursday', meals: ['Chia Pudding', 'Stuffed Potatoes', 'Chicken Curry (GF)'] },
        { day: 'Friday', meals: ['Yogurt & Berries', 'Gluten-Free Wrap', 'Grilled Fish'] },
        { day: 'Saturday', meals: ['Omelette', 'GF Pasta', 'Shrimp Stir-Fry'] },
        { day: 'Sunday', meals: ['Smoothie Bowl', 'Cauliflower Rice Bowl', 'Roast Chicken'] },
      ],
    },
  };

  getMealPlan(dietType: string): MealPlanDto {
    const plan = this.mealPlans[dietType.toLowerCase()];
    if (!plan) throw new NotFoundException(`Meal plan for ${dietType} not found`);
    return plan;
  }
}
