import {
  Controller,
  Get,
  Patch,
  Delete,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getProfile(@Req() req: any) {
    return this.usersService.findById(req.user.userId);
  }

@Patch('me')
@ApiBody({
  schema: {
    example: {
      dietaryRestrictions: 'gluten-free',
    },
  },
})
async updateProfile(@Req() req: any, @Body() data: UpdateUserDto) {
  if (!req.user) {
    console.log('Unauthorized: req.user is undefined');
  }
  return this.usersService.update(req.user.userId, data);
}

  @Delete('me')
  async deleteAccount(@Req() req: any) {
    return this.usersService.delete(req.user.userId);
  }
}
