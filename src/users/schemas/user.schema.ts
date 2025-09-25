import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: '' })
  dietaryRestrictions?: string;

  // Track last update
  @Prop({ type: Date, default: null })
  lastUpdatedAt?: Date;

  // Reset flag for Sunday
  @Prop({ type: Boolean, default: true })
  canUpdateProfile?: boolean;
}


export type UserDocument = User & Document & { _id: string };

export const UserSchema = SchemaFactory.createForClass(User);
