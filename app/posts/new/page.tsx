"use client";
import { ILocalPost } from "@/types/localPostInterface";
import { createPost } from "@/utils/postsProvider";
import React, { EventHandler, FormEvent, useState } from "react";

function NewPost({searchParams}: {searchParams:{userId: string}}): JSX.Element {
  // const session: Session = (await getServerSession(authOptions)) as Session;
  console.log("User ID: ", searchParams.userId)
  const [post, setPost] = useState<ILocalPost>({} as ILocalPost);

   const onFormSubmit: EventHandler<FormEvent> = async (e) => {
     e.preventDefault();

     const createdPost = await createPost(
      {
        ...post,
        userId: searchParams.userId ,
      }
     )

     if(createdPost) window.location.href = "/posts"
    
   };

  return (
    <>
      <h1 className="text-6xl w-full relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold">
        New Post
      </h1>
      <div className="mt-8 p-12 border border-black">
        <form method="POST" onSubmit={onFormSubmit}>
          <div className="flex flex-col">
            <label for="title" className="mb-2 text-xl text-coorporate-orange after:content-['*']">
              Title
            </label>
            <input
              className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
              name="title"
              id="title"
              type="text"
              value={post.title}
              onChange={({ target }) =>
                setPost({ ...post, title: target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label for="body" className="mb-2 text-xl text-coorporate-orange after:content-['*']">
              Content
            </label>
            <textarea
              className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
              name="body"
              id="body"
              rows={4}
              value={post.body}
              onChange={({ target }) =>
                setPost({ ...post, body: target.value })
              }
            />
          </div>

          <input
            className="rounded-full px-6 py-2 hover:bg-bg-yellow cursor-pointer bg-coorporate-orange border border-black h-auto float-end"
            type="submit"
            value="Add post"
          />
          <div className="clear-end"></div>
        </form>
      </div>
    </>
  );
}

export default NewPost;

