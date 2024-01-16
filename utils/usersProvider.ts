import { JSON_PLACEHOLDER_API, POSTIT_API } from "@/config/global";
import { ILocalUser } from "@/types/localUserInterface";
import { IUser } from "@/types/userInterface";
const USERS_PATH = "/users";

export async function fetchUserById(id: string): Promise<IUser> {
  const response = await fetch(`${JSON_PLACEHOLDER_API}${USERS_PATH}/${id}`);
  const data = await response.json();
  return data;
}

export async function createUser(user: ILocalUser): Promise<ILocalUser> {
  const response = await fetch(`${POSTIT_API}${USERS_PATH}`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data: ILocalUser = await response.json();
  return data;
}
