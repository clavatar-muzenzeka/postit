import AddCommentComponent from "@/components/addCommentComponent";
import CommentComponent from "@/components/commentComponent";
import { authOptions } from "@/config/authOptions";
import { IComment } from "@/types/commentInterface";
import { IPost } from "@/types/postInterface";
import { IUser } from "@/types/userInterface";
import { fetchComments } from "@/utils/commentsProvider";
import { fetchLocalPostById, fetchPostById } from "@/utils/postsProvider";
import { fetchUserById } from "@/utils/usersProvider";
import { Session, getServerSession } from "next-auth";
import React from "react";
import styles from "./styles.module.css";
import UserDetailsComponent from "@/components/userDetailsComponent";
import { ILocalPost } from "@/types/localPostInterface";
import { ILocalUser } from "@/types/localUserInterface";
import Link from "next/link";

const page = async ({ params }: { params: { postId: string } }) => {
  let isLocal = params.postId.toString().length > 10;
  const post: IPost | ILocalPost = isLocal
    ? await fetchLocalPostById(params.postId)
    : await fetchPostById(params.postId);
  const session: Session = (await getServerSession(authOptions)) as Session;
  const comments: Array<IComment> = await fetchComments(post.id??(post as unknown as ILocalPost)._id);
  const user: IUser | ILocalUser = isLocal
    ? ((post as unknown as ILocalPost).userId as ILocalUser)
    : await fetchUserById(post.userId.toString());
  const mapCommentsToCommentComponents = (comment: IComment) => {
    return (
      <CommentComponent key={comment.id} comment={comment}></CommentComponent>
    );
  };
  return (
    <div>
      <h1 className="text-4xl capitalize border-b pb-4 font-extrabold border-gray-300">
        {post.title}
      </h1>
      <div
        className={
          styles.userInfos + ` mt-2 mb-8 rounded-md bg-gray-100 px-12 py-6`
        }
      >
        Autor: <strong>{user.username}</strong> ({user.email})
      </div>
      <div className="relative">
        <div className="hidden absolute p-8 bg-white -top-12 rounded-lg shadow-lg">
          <UserDetailsComponent user={user}></UserDetailsComponent>
        </div>
      </div>

      <p>{post.body}</p>
      <div className="mt-8">
        <h1 className="text-4xl mb-4 border-b border-gray-100">Comments</h1>
        <>
          {session?.user?
          <AddCommentComponent postId={params.postId} session={session}></AddCommentComponent>:
          <Link
            className="rounded-full cursor-pointer font-md px-4 py-2 bg-gray-800 text-white active:bg-gray-900 hover:bg-gray-600"
            href="/auth/signin"
          >
            Sign in to leave comment
          </Link>}
          
        </>
      </div>
      <div className="mt-8">
        <>{comments.map(mapCommentsToCommentComponents)}</>
      </div>
    </div>
  );
};

export default page;
