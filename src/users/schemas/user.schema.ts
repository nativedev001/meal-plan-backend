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

  @Prop([String])
  dietaryRestrictions?: string[];
}


export type UserDocument = User & Document & { _id: string };

export const UserSchema = SchemaFactory.createForClass(User);
