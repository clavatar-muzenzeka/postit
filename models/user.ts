import { ILocalUser } from "@/types/localUserInterface";
import { Schema, models, model } from "mongoose";

const userSchema = new Schema<ILocalUser>({
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
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

export const LocalUser =
  (models && models["User"]) || model<ILocalUser>("User", userSchema);
