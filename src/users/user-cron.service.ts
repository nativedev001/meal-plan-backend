import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserCronService {
  private readonly logger = new Logger(UserCronService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  
  @Cron('0 0 * * 0')
  async resetUpdateRestriction() {
    this.logger.log('🔄 Resetting weekly update restriction for all users');
    await this.userModel.updateMany({}, { canUpdateProfile: true }).exec();
  }
}
