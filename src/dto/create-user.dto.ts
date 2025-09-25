import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'test@example.com', description: 'Unique email address of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'Password for the account (minimum 6 chars recommended)' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({
    example: 'vegetarian',
    description: 'User dietary restriction (e.g., vegetarian, gluten-free)',
  })
  @IsString()
  @IsOptional()
  dietaryRestrictions?: string; // ✅ make plural to match your schema
}
