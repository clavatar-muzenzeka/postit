import { ILocalUser } from "@/types/localUserInterface";
import { Schema, models, model } from "mongoose";
// @ts-ignore
import * as bcrypt from "bcryptjs";

export type ILocalAuthUser = ILocalUser & { hashedPassword: string };

const userSchema = new Schema<ILocalAuthUser>({
  name: { type: String, required: [true, "Name is required"] },
  username: { type: String, required: [true, "Username is required"] },
  email: String,

  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: Number,
      lng: Number,
    },
  },
  phone: String,
  website: String,
  hashedPassword: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

userSchema.methods.encryptPassword = function (password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed;
};

userSchema.virtual("password").set(function (password: string) {
  this.hashedPassword = userSchema.methods.encryptPassword(password);
});

export const LocalUser =
  (models && models["User"]) || model<ILocalAuthUser>("User", userSchema);
