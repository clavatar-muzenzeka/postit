import { JSON_PLACEHOLDER_API, POSTIT_API } from "@/config/global";
import { ILocalPost } from "@/types/localPostInterface";
import { IPost } from "@/types/postInterface";
const POSTS_PATH = "/posts";
export async function fetchPosts(): Promise<Array<IPost|ILocalPost>> {
  const localPostsRespons = await fetch(`${POSTIT_API}${POSTS_PATH}`, {cache: "no-cache"});
  const localPosts: Array<ILocalPost> = await localPostsRespons.json();
  const response = await fetch(`${JSON_PLACEHOLDER_API}${POSTS_PATH}`);
  const data = await response.json();
  return [...localPosts, ...data];
}

export async function createPost(post: ILocalPost): Promise<IPost> {
  const response = await fetch(`${POSTIT_API}${POSTS_PATH}`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchPostById(id: string): Promise<IPost> {
  const response = await fetch(`${JSON_PLACEHOLDER_API}${POSTS_PATH}/${id}`);
  const data = await response.json();
  return data;
}

export async function fetchLocalPostById(id: string): Promise<IPost> {
  const response = await fetch(`${POSTIT_API}${POSTS_PATH}/${id}`);
  const data = await response.json();
  return data;
}