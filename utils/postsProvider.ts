import { JSON_PLACEHOLDER_API, POSTIT_API } from "@/config/global";
import { ILocalPost } from "@/types/localPostInterface";
import { IPost } from "@/types/postInterface";
import { Observable, combineLatest, from, map, switchMap } from "rxjs";
const POSTS_PATH = "/posts";
export async function fetchPosts(): Promise<Array<IPost|ILocalPost>|undefined> {
  const localPostsRespons = await fetch(`${POSTIT_API}${POSTS_PATH}`, {cache: "no-cache"});
  //const localPosts: Array<ILocalPost> = await localPostsRespons.json();
  //const response = await fetch(`${JSON_PLACEHOLDER_API}${POSTS_PATH}`);
  const localPosts = fetch(`${POSTIT_API}${POSTS_PATH}`, { cache: "no-cache" });

  const remotePosts = 
    fetch(`${JSON_PLACEHOLDER_API}${POSTS_PATH}`, { cache: "no-cache" });

  const mergedPosts: Observable<Array<IPost|ILocalPost>> = combineLatest([localPosts, remotePosts]).pipe(
    switchMap(([mlocalPosts, mremotePosts]) => {
      return combineLatest([from(mlocalPosts.json()), from(mremotePosts.json())]).pipe(
        map(([localPosts, remotePosts]) => {
          return [...localPosts, ...remotePosts];
        })
      )
    })
  );
  
  return mergedPosts.toPromise();
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