import { JSON_PLACEHOLDER_API, POSTIT_API } from "@/config/global";
import { IComment } from "@/types/commentInterface";
import { ILocalComment } from "@/types/localCommentInterface";
const COMMENTS_PATH = "/comments";
export async function fetchComments(
  postId: number
): Promise<Array<IComment>> {
  const localCommentsRespons = await fetch(
    `${POSTIT_API}${COMMENTS_PATH}?postId=${postId}`,
    {
      cache: "no-cache",
    }
  );
  const localComments: Array<ILocalComment> = await localCommentsRespons.json();
  const response = await fetch(
    `${JSON_PLACEHOLDER_API}${COMMENTS_PATH}?postId=${postId}`
  );

  const data = await response.json();
  return [...localComments, ...data];
}

export async function createComment(comment: ILocalComment): Promise<ILocalComment> {
  const response = await fetch(`${POSTIT_API}${COMMENTS_PATH}`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
}
