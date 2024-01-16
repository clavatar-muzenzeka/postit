import { Types } from "mongoose";
import { ILocalUser } from "./localUserInterface";

export interface ILocalPost {
  _id: string;
  userId: Types.ObjectId|string|ILocalUser;
  title: string;
  body: string;
}