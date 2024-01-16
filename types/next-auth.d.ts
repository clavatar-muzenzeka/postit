import NextAuth, { DefaultSession } from "next-auth";
import { ILocalUser } from "./localUserInterface";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id: string;
    user: ILocalUser & DefaultSession["user"];
  }

  interface Credentials {
    username: string;
    password: string;
    redirect?: boolean;
  }

  interface User {
    _id?: string & ILocalUser;
  }
}
