import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";
import { LocalPost } from "@/models/post";
import { ILocalPost } from "@/types/localPostInterface";

export const GET = async (
  request: NextRequest,
  context: { params: { postId: string } }
) => {
  try {
    await connectToDB();
    const post: ILocalPost | null = await LocalPost.findOne({
      _id: context.params.postId,
    })
      .populate("userId")
      .exec();
    if (!post)  return new Response(`Post with id ${context.params.postId} not found`, { status: 404 });
    return new Response(JSON.stringify(post), { status: 200 });
    
  } catch (error: any) {
    console.log("Error on fetching posts: ", error);
    return new Response(`Failed to load posts, details: ${error.message}`, {
      status: 500,
    });
  }
};
