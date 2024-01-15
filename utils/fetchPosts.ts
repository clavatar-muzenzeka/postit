import { IPost } from '../types/post';
export async function fetchPosts(): Promise<Array<IPost>> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}