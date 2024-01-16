import { authOptions } from "@/config/authOptions";
import NextAuth, { Credentials, Session, User } from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
