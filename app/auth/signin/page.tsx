"use client";
import { AUTH_REDIRECT_URL } from "@/config/global";
import { SignInOptions, SignInResponse, signIn } from "next-auth/react";
import React, { EventHandler, FormEvent, useState } from "react";

function SigninPage(): JSX.Element {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const [errors, setErrors] = useState<{
    usernameError: string | null;
    passwordError: string | null;
  }>({ usernameError: null, passwordError: null });

  const validateForm = (formValue: { username: string; password: string }) => {
    let formValid = false;
    if (!formValue.username || formValue.username == "") {
      setErrors({ ...errors, usernameError: "Username is required" });
    } else if (!formValue.password || formValue.password == "") {
      setErrors({
        ...errors,
        passwordError: "Password is required",
        usernameError: null,
      });
    } else if (formValue.password.length < 4) {
      setErrors({
        ...errors,
        passwordError: "Password must be at least 4 characters",
        usernameError: null,
      });
    } else formValid = true;
    return formValid;
  };

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    if (validateForm(credentials)) {
      const resp: SignInResponse | undefined = await signIn("credentials", {
        ...credentials,
        //redirect: false,
        callbackUrl: AUTH_REDIRECT_URL,
      } as SignInOptions);
    }
  };
  return (
    <div className="max-sm:flex max-sm:flex-col" data-testid="signin-page">
      <h1 className="text-6xl max-sm:text-center w-full relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold">
        Signin
      </h1>
      <div className="mt-8 p-12 border border-black">
        <form method="POST" onSubmit={onFormSubmit}>
          <div className="flex mb-2 flex-col">
            <label
              htmlFor="username"
              className="mb-2 text-xl text-coorporate-orange after:content-['*']"
            >
              Username
            </label>
            <input
              data-testid="username-input"
              className="bg-bg-yellow p-2   focus:outline-none focus:border-coorporate-orange focus:border"
              type="text"
              name="username"
              id="username"
              value={credentials.username}
              onChange={({ target }) =>
                setCredentials({ ...credentials, username: target.value })
              }
            />

            {errors.usernameError && (
              <p className="text-red-600 text-sm">{errors.usernameError}</p>
            )}
          </div>
          <div className="flex mb-2 flex-col">
            <label
              htmlFor="password"
              className="mb-2 text-xl text-coorporate-orange after:content-['*']"
            >
              Password
            </label>
            <input
              data-testid="password-input"
              className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={({ target }) =>
                setCredentials({ ...credentials, password: target.value })
              }
            />
            {errors.passwordError && (
              <p className="text-red-600 text-sm">{errors.passwordError}</p>
            )}
          </div>

          <input
            className="rounded-full max-sm:w-full px-6 py-2 hover:bg-bg-yellow cursor-pointer bg-coorporate-cyan border border-black h-auto float-end"
            type="submit"
            value="Signin"
          />
          <div className="clear-end"></div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
