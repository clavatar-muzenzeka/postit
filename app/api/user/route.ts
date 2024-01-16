import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";
import { LocalUser } from "@/models/user";
import { ILocalUser } from "@/types/localUserInterface";

export const POST = async (request: NextRequest) => {
  const receivedUser: ILocalUser = await request.json();
  try {
    await connectToDB();
    const newUser = new LocalUser(receivedUser);

    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new Response(
      `Failed to create a new user, details: ${error.message}`,
      { status: 500 }
    );
  }
};
