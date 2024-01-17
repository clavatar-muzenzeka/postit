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
  const comments: Array<IComment> = await fetchComments(
    post.id ?? (post as unknown as ILocalPost)._id
  );
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
      <h1 className="text-6xl w-full relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold capitalize">
        {post.title}
      </h1>
      <div
        className={
          styles.userInfos +
          ` mt-2 mb-8 text-white  bg-coorporate-orange  px-12 py-6`
        }
      >
        Autor: <strong>{user.username}</strong> ({user.email})
      </div>
      <div className="relative">
        <div className="hidden absolute -top-12 left-4 z-10">
          <UserDetailsComponent user={user}></UserDetailsComponent>
        </div>
      </div>

      <p>{post.body}</p>
      <div className="mt-8">
        <h1 className="text-4xl mb-4 pb-2 font-light text-coorporate-blue border-coorporate-blue">
          Comments
        </h1>
        <>
          {session?.user ? (
            <AddCommentComponent
              postId={params.postId}
              session={session}
            ></AddCommentComponent>
          ) : (
            <>
              <Link
                className="rounded-full float-end hover:bg-bg-yellow px-6 py-2 bg-coorporate-cyan border border-black"
                href="/auth/signin"
              >
                Sign in to leave comment
              </Link>
              <div className="clear-end"></div>
            </>
          )}
        </>
      </div>
      <div className="mt-8">
        <>{comments.map(mapCommentsToCommentComponents)}</>
      </div>
    </div>
  );
};

export default page;
