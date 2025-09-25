import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: CreateUserDto) {
    const created = new this.userModel(data);
    return created.save();
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id).select('-password').exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

 async update(id: string, data: UpdateUserDto) {
  const user = await this.userModel.findById(id).exec();
  if (!user) throw new NotFoundException('User not found');

  if (!user.canUpdateProfile) {
    throw new Error('You can only update your profile once per week.');
  }

  Object.assign(user, data);
  user.lastUpdatedAt = new Date();
  user.canUpdateProfile = false; 

  await user.save();
  return user.toObject({ versionKey: false });
}

  async delete(id: string) {
    const deleted = await this.userModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('User not found');
    return deleted;
  }
}
