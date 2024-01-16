import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";
import { LocalPost } from "@/models/post";
import { ILocalPost } from "@/types/localPostInterface";

export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();
    const posts: Array<ILocalPost> = await LocalPost.find({}).sort({_id: -1});
    console.log("Fetched posts: ", posts);
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error: any) {
    console.log("Error on fetching posts: ", error);
    return new Response(`Failed to load posts, details: ${error.message}`, {
      status: 500,
    });
  }
};

export const POST = async (request: NextRequest) => {
  const receivedPost: ILocalPost = await request.json();
  try {
    await connectToDB();
    const newPost = new LocalPost(receivedPost);
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new Response(
      `Failed to create a new post, details: ${error.message}`,
      { status: 500 }
    );
  }
};
