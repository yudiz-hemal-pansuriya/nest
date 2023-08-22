import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  sUserName: string;

  @Prop()
  sEmail: string;

  @Prop()
  nAge: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
