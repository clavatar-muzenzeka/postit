import PostComponent from "@/components/postComponent";
import { authOptions } from "@/config/authOptions";
import { ILocalPost } from "@/types/localPostInterface";
import { IPost } from "@/types/postInterface";
import { fetchPosts } from "@/utils/postsProvider";
import { Session, getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { Abril_Fatface } from "next/font/google";
const abril = Abril_Fatface({ weight: "400", subsets: ["latin", "latin-ext"] });

async function Posts(): Promise<JSX.Element> {
  const posts: Array<IPost | ILocalPost> = await fetchPosts();
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
    <div className="w-full">
      <h1
        className="text-6xl w-full relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold
      "
      >
        Posts
      </h1>
      <div className="mb-16">
        {session?.user ? (
          <Link
            className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-orange border border-black"
            href={`/posts/new?userId=${session?.user?._id ?? 0}`}
          >
            Add Post
          </Link>
        ) : (
          <Link
            className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-orange border border-black"
            href="/auth/signin"
          >
            Sign in to add post
          </Link>
        )}
      </div>
      <>{posts.map(mapPostToPostComponent)}</>
    </div>
  );
}

export default Posts;
