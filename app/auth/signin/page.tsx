"use client";
import { AUTH_REDIRECT_URL } from "@/config/global";
import { SignInOptions, SignInResponse, signIn } from "next-auth/react";
import React, { EventHandler, FormEvent, useState } from "react";

function page(): JSX.Element {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    const resp: SignInResponse|undefined = await signIn("credentials", {
      ...credentials,
      //redirect: false,
      callbackUrl: AUTH_REDIRECT_URL
    } as SignInOptions);
  };
  return (
    <div>
      <h1 className="text-4xl mb-4 border-b border-gray-100">Signin</h1>
      <form method="POST" onSubmit={onFormSubmit} className="w-1/4">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Username</label>
          <input
            className="border border-gray-300 p-2 rounded-lg mb-4"
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={({ target }) =>
              setCredentials({ ...credentials, username: target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Password</label>
          <input
            className="border border-gray-300 p-2 rounded-lg mb-4"
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={({ target }) =>
              setCredentials({ ...credentials, password: target.value })
            }
          />
        </div>

        <input
          className="rounded-full font-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-600"
          type="submit"
          value="Signin"
        />
      </form>
    </div>
  );
}

export default page;
