"use client";
import { AUTH_REDIRECT_URL } from "@/config/global";
import { Session } from "next-auth";
import { SignInOptions, SignInResponse, signIn } from "next-auth/react";
import React, { EventHandler, FormEvent, useState } from "react";

async function AddCommentComponent({
  session,
}: {
  session: Session;
}): Promise<JSX.Element> {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    const resp: SignInResponse | undefined = await signIn("credentials", {
      ...credentials,
      //redirect: false,
      callbackUrl: AUTH_REDIRECT_URL,
    } as SignInOptions);
  };
  return (
    <div>
      <form method="POST" onSubmit={onFormSubmit}>
        <div className="flex flex-col">
          <textarea
            className="border border-gray-300 p-2 rounded-lg mb-4"
            name="username"
            id="username"
            rows={4}
            value={credentials.username}
            onChange={({ target }) =>
              setCredentials({ ...credentials, username: target.value })
            }
          />
        </div>

        <input
          className="rounded-full font-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-600"
          type="submit"
          value={`Add comment as ${session?.user?.username}`}
        />
      </form>
    </div>
  );
}

export default AddCommentComponent;
