import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";
import { ILocalAuthUser, LocalUser } from "@/models/user";
import { connectToDB } from "@/utils/db";
import { HydratedDocument } from "mongoose";
import { AuthOptions } from "next-auth";
import { SECRET } from "./global";
// @ts-ignore
import * as bcrypt from "bcryptjs";
import GlobalError from "@/app/global-error";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!(credentials && credentials.username))
          throw new Error("No username provided");
        await connectToDB();
        const dbUser: HydratedDocument<ILocalAuthUser> | null =
          await LocalUser.findOne({
            username: credentials.username,
          });

        if (!dbUser) throw new Error("No user found");
        if (!bcrypt.compareSync(credentials.password, dbUser.hashedPassword))
          throw new Error("Incorrect password");
        let { _id, ...newDBUser } = dbUser;
        let user: User = {
          ...newDBUser,
          id: _id.toString(),
        };
        return user;
      },
      credentials: {
        username: { label: "username", type: "text ", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      let user = await LocalUser.findById(token.id);
      if (token) {
        session.id = <string>token.id;
        session.user = JSON.parse(JSON.stringify(user));
      }

      return session;
    },
  },
  secret: SECRET,
  jwt: {
    secret: SECRET,
  },
  pages: {
    signIn: "/auth/sigin",
    error: "/auth-error",
  },
};
