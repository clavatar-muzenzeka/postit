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
      <div className="p-6 rounded mb-6 bg-black hover:bg-coorporate-blue text-white cursor-pointer ">
        <h2 className="text-xl font-light mb-4 capitalize text-bg-yellow">
          {props.post.title}
        </h2>
        <p className="mb-4 text-lg">{props.post.body}</p>
      </div>
    </Link>
  );
};

export default PostComponent;
