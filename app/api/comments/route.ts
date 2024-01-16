import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";
import { LocalComment } from "@/models/comment";
import { ILocalComment } from "@/types/localCommentInterface";

export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();
    const comments: Array<ILocalComment> = await LocalComment.find({}).sort({_id: -1});
    console.log("Fetched comments: ", comments);
    return new Response(JSON.stringify(comments), { status: 200 });
  } catch (error: any) {
    console.log("Error on fetching comments: ", error);
    return new Response(`Failed to load comments, details: ${error.message}`, {
      status: 500,
    });
  }
};

export const COMMENT = async (request: NextRequest) => {
  const receivedComment: ILocalComment = await request.json();
  try {
    await connectToDB();
    const newComment = new LocalComment(receivedComment);
    await newComment.save();
    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new Response(
      `Failed to create a new comment, details: ${error.message}`,
      { status: 500 }
    );
  }
};
