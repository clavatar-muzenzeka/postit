import { ILocalPost } from "@/types/localPostInterface";
import { Schema, model, Types, ObjectId, models } from "mongoose";

const postSchema = new Schema<ILocalPost>({
  userId: {
    type: "ObjectID",
    ref: "User",
    required: [true, "Field userId required"],
  },
  title: { type: String, required: [true, "Post title is required"] },
  body: { type: String, required: [true, "Post body is required"] },
});

export const LocalPost = (models && models['Post']) || model<ILocalPost>("Post", postSchema);
