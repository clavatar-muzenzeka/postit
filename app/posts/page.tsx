import PostComponent from "@/components/postComponent";
import { authOptions } from "@/config/authOptions";
import { ILocalPost } from "@/types/localPostInterface";
import { IPost } from "@/types/postInterface";
import { fetchPosts } from "@/utils/postsProvider";
import { Session, getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { Abril_Fatface } from "next/font/google";
import { postValidationSchema, postsArrayValidationSchema } from "@/validation/postValidation";
import { z } from "zod";
const abril = Abril_Fatface({ weight: "400", subsets: ["latin", "latin-ext"] });

async function PostsPage(): Promise<JSX.Element> {
  const posts: Array<IPost | ILocalPost> | undefined = await fetchPosts();
  try {
    const validatedData = postsArrayValidationSchema.parse(posts);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("/!\\ Validation errors:", error.errors); // TODO: Handle error properly
    } else {
      console.error("/!\\ Unexpected error:", error); // TODO: Handle error properly
    }
  }
  const session: Session = (await getServerSession(authOptions)) as Session;
  const mapPostToPostComponent = (post: IPost | ILocalPost) => {
    return (
      <PostComponent
        key={(post as IPost).id ?? (post as ILocalPost)._id}
        post={post}
      ></PostComponent>
    );
  };
  return (
    <div className="w-full max-sm:h-max max-sm:flex max-sm:flex-col items-center">
      <h1
        className="text-6xl w-full max-sm:text-center relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold
      "
      >
        Posts
      </h1>
      <div className="mb-16 float-end max-sm:float-none">
        {session?.user ? (
          <Link
            className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-cyan border border-black"
            href={`/posts/new?userId=${session?.user?._id ?? 0}`}
          >
            Add A Post
          </Link>
        ) : (
          <Link
            className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-cyan border border-black"
            href="/auth/signin"
          >
            Sign in to add post
          </Link>
        )}
      </div>
      <div className="clear-end"></div>
      <>{posts?.map(mapPostToPostComponent)}</>
    </div>
  );
}

export default PostsPage;
