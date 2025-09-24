import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: CreateUserDto) {
    const created = new this.userModel(data);
    return created.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

async findById(id: string) {
  return this.userModel.findById(id).exec();
}

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
