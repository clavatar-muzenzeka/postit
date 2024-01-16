import React, { ReactNode } from "react";
import { IComment } from "@/types/commentInterface";

const CommentComponent: (props: {
  comment: IComment;
}) => React.JSX.Element = (props: { comment: IComment }) => {
  return (
    <div className="p-6 mb-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-light capitalize text-gray-600">
        {props.comment.name}
      </h2>
      <small className="text-sm text-gray-400">
        From <strong>{props.comment.email}</strong>
      </small>
      <p className="my-2 text-lg">{props.comment.body}</p>
    </div>
  );
};

export default CommentComponent;
