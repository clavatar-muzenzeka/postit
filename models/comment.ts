import { ILocalComment } from "@/types/localCommentInterface";
import { Schema, model, Types, ObjectId, models } from "mongoose";

const commentSchema = new Schema<ILocalComment>({
  name: { type: String, required: [true, "Comment title is required"] },
  email: { type: String, required: [true, "Comment email is required"] },
  postId: { type: String, required: [true, "Comment postId is required"] },
  body: { type: String, required: [true, "Comment body is required"] },
});

export const LocalComment = (models && models['Comment']) || model<ILocalComment>("Comment", commentSchema);
