import PostComponent from "@/components/postComponent";
import { authOptions } from "@/config/authOptions";
import { ILocalPost } from "@/types/localPostInterface";
import { IPost } from "@/types/postInterface";
import { fetchPosts } from "@/utils/postsProvider";
import { Session, getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

async function Posts(): Promise<JSX.Element> {
  const posts: Array<IPost|ILocalPost> = await fetchPosts();
  const session: Session = (await getServerSession(authOptions)) as Session;
  const mapPostToPostComponent = (post: IPost|ILocalPost) => {
    return <PostComponent key={((post as IPost).id)??((post as ILocalPost)._id)} post={post}></PostComponent>;
  };
  return (
    <div>
      <h1 className="text-4xl mb-8 border-b pb-4 font-extrabold border-gray-300">
        Posts
      </h1>
      <div className="mb-8">
        {session?.user ? (
          <Link
          
            className="rounded-full cursor-pointer font-md px-4 py-2 bg-gray-800 text-white active:bg-gray-900 hover:bg-gray-600"
            href={`/posts/new?userId=${(session?.user?._id)??0}`}
          >
            Add Post
          </Link>
        ) : (
          <Link
            className="rounded-full cursor-pointer font-md px-4 py-2 bg-gray-800 text-white active:bg-gray-900 hover:bg-gray-600"
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
