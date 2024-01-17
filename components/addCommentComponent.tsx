"use client";
import { AUTH_REDIRECT_URL } from "@/config/global";
import { ILocalComment } from "@/types/localCommentInterface";
import { createComment } from "@/utils/commentsProvider";
import { Session } from "next-auth";
import { SignInOptions, SignInResponse, signIn } from "next-auth/react";
import React, { EventHandler, FormEvent, useState } from "react";

function AddCommentComponent({
  session,
  postId,
}: {
  session: Session;
  postId: string;
}): JSX.Element {
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
    <div
      data-testid="add-comment-component"
      className="mt-8 p-6 border border-black"
    >
      <form method="POST" onSubmit={onFormSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="mb-2 text-xl text-coorporate-orange after:content-['*']"
          >
            Title
          </label>
          <input
            data-testid="title-input"
            className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
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
          <label
            htmlFor="body"
            className="mb-2 text-xl
            
             text-coorporate-orange after:content-['*']"
          >
            Comment
          </label>

          <textarea
            data-testid="body-input"
            className="bg-bg-yellow p-2 mb-4 focus:outline-none focus:border-coorporate-orange focus:border"
            name="body"
            id="body"
            rows={4}
            value={comment.body}
            onChange={({ target }) =>
              setComment({ ...comment, body: target.value })
            }
          />
        </div>
        <input
        data-testid="submit-comment-button"
          className="rounded-full px-6 py-2 hover:bg-bg-yellow cursor-pointer bg-coorporate-cyan border border-black h-auto float-end"
          type="submit"
          value={`Add comment as ${session?.user?.username}`}
        />
        <div className="clear-end"></div>
      </form>
    </div>
  );
}

export default AddCommentComponent;
