"use client";
import { ILocalPost } from "@/types/localPostInterface";
import { createPost } from "@/utils/postsProvider";
import React, { EventHandler, FormEvent, useState } from "react";

function AddPostPage({
  searchParams,
}: {
  searchParams: { userId: string };
}): JSX.Element {
  const [post, setPost] = useState<ILocalPost>({} as ILocalPost);
  const [errors, setErrors] = useState<{
    titleError?: string;
    bodyError?: string;
  }>({});

  const validateForm = (formValue: ILocalPost): boolean => {
    let formValid = false;
    if (!formValue.title) setErrors({ titleError: "Post title is required" });
    else if (!formValue.body)
      setErrors({ bodyError: "Post content is required" });
    else {
      setErrors({});
      formValid = true;
    }
    return formValid;
  };

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();

    if (validateForm(post)) {
      const createdPost = await createPost({
        ...post,
        userId: searchParams.userId,
      });

      if (createdPost) window.location.href = "/posts";
    }
  };

  return (
    <div
      data-testid="add-post-component"
      className="h-full max-sm:flex-col max-sm:flex items-center w-full"
    >
      <h1 className="text-6xl w-full max-sm:text-center relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold">
        New Post
      </h1>
      <div className="mt-8 p-12 border border-black">
        <form method="POST" onSubmit={onFormSubmit}>
          <div className="flex mb-2 flex-col">
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
              value={post.title}
              onChange={({ target }) =>
                setPost({ ...post, title: target.value })
              }
            />
            {errors.titleError && (
              <p className="text-red-600 text-sm">{errors.titleError}</p>
            )}
          </div>
          <div className="flex mb-2 flex-col">
            <label
              htmlFor="body"
              className="mb-2 text-xl text-coorporate-orange after:content-['*']"
            >
              Content
            </label>
            <textarea
              data-testid="body-input"
              className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
              name="body"
              id="body"
              rows={4}
              value={post.body}
              onChange={({ target }) =>
                setPost({ ...post, body: target.value })
              }
            />
            {errors.bodyError && (
              <p className="text-red-600 text-sm">{errors.bodyError}</p>
            )}
          </div>

          <input
            data-testid="submit-post-button"
            className="rounded-full max-sm:w-full px-6 py-2 hover:bg-bg-yellow cursor-pointer bg-coorporate-cyan border border-black h-auto float-end"
            type="submit"
            value="Add post"
          />
          <div className="clear-end"></div>
        </form>
      </div>
    </div>
  );
}

export default AddPostPage;
