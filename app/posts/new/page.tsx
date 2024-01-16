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
    <div>
      <h1 className="text-4xl mb-8 border-b pb-4 font-extrabold border-gray-300">
        New Post
      </h1>
      <form method="POST" onSubmit={onFormSubmit}>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Title</label>
          <input
            className="border border-gray-300 p-2 rounded-lg mb-4"
            name="title"
            id="title"
            type="text"
            value={post.title}
            onChange={({ target }) => setPost({ ...post, title: target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Content</label>
          <textarea
            className="border border-gray-300 p-2 rounded-lg mb-4"
            name="body"
            id="body"
            rows={4}
            value={post.body}
            onChange={({ target }) => setPost({ ...post, body: target.value })}
          />
        </div>

        <input
          className="rounded-full font-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-600"
          type="submit"
          value="Add post"
        />
      </form>
    </div>
  );
}

export default NewPost;

