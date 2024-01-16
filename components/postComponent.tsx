import React, { ReactNode } from "react";
import FilledButtonComponent from "./fillButtonComponent";
import { IPost } from "@/types/postInterface";
import Link from "next/link";
import { ILocalPost } from "@/types/localPostInterface";

const PostComponent: (props: {
  post: IPost | ILocalPost;
}) => React.JSX.Element = (props: { post: IPost | ILocalPost }) => {
  return (
    <Link
      href={`/posts/${
        (props.post as IPost).id ?? (props.post as ILocalPost)._id
      }`}
    >
      <div className="p-6 mb-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg">
        <h2 className="text-2xl font-light capitalize text-gray-600">
          {props.post.title}
        </h2>
        <p className="mb-4 text-lg">{props.post.body}</p>
      </div>
    </Link>
  );
};

export default PostComponent;
