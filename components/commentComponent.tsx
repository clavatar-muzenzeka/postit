import React, { ReactNode } from "react";
import { IComment } from "@/types/commentInterface";

const CommentComponent: (props: {
  comment: IComment;
}) => React.JSX.Element = (props: { comment: IComment }) => {
  return (
    <div className="p-6 mb-4 bg-black  text-white">
      <h2 className="text-xl font-light capitalize text-bg-yellow-light">
        {props.comment.name}
      </h2>
      <small className="text-sm text-bg-yellow">
        From <strong>{props.comment.email}</strong>
      </small>
      <p className="my-4 text-lg">{props.comment.body}</p>
    </div>
  );
};

export default CommentComponent;
