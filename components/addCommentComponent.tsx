"use client";
import { AUTH_REDIRECT_URL } from "@/config/global";
import { ILocalComment } from "@/types/localCommentInterface";
import { createComment } from "@/utils/commentsProvider";
import { Session } from "next-auth";
import { SignInOptions, SignInResponse, signIn } from "next-auth/react";
import React, { EventHandler, FormEvent, useState } from "react";

function AddCommentComponent({
  session, postId
}: {
  session: Session;
  postId
: string}): JSX.Element {
  const [comment, setComment] = useState<ILocalComment>({} as ILocalComment);

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    const resp: ILocalComment | undefined = await createComment({
      ...comment,
      email: session?.user?.email as string,
      postId: postId,
    });
    if (resp) window.location.reload();
  };
  return (
    <div>
      <form method="POST" onSubmit={onFormSubmit}>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Title</label>
          <input
            className="border border-gray-300 p-2 rounded-lg mb-4"
            name="title"
            id="title"
            type="text"
            value={comment.name}
            onChange={({ target }) =>
              setComment({ ...comment, name: target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Comment</label>
          <textarea
            className="border border-gray-300 p-2 rounded-lg mb-4"
            name="username"
            id="username"
            rows={4}
            value={comment.body}
            onChange={({ target }) =>
              setComment({ ...comment, body: target.value })
            }
          />
        </div>

        <input
          className="rounded-full cursor-pointer font-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-600"
          type="submit"
          value={`Add comment as ${session?.user?.username}`}
        />
      </form>
    </div>
  );
}

export default AddCommentComponent;
