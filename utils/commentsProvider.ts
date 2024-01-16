import { JSON_PLACEHOLDER_API, POSTIT_API } from "@/config/global";
import { IComment } from "@/types/commentInterface";
import { ILocalComment } from "@/types/localCommentInterface";
const COMMENTS_PATH = "/comments";
export async function fetchComments(
  commentId: number
): Promise<Array<IComment>> {
  const localCommentsRespons = await fetch(`${POSTIT_API}${COMMENTS_PATH}`, {
    cache: "no-cache",
  });
  const localComments: Array<ILocalComment> = await localCommentsRespons.json();
  const response = await fetch(
    `${JSON_PLACEHOLDER_API}${COMMENTS_PATH}?commentId=${commentId}`
  );

  const data = await response.json();
  return [...localComments, ...data];
}
