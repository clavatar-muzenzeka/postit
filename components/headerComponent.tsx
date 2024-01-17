"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const HeaderComponent = ({ session }: { session: Session }): JSX.Element => {
  return (
    <div
      data-testid="header-component"
      className="h-20 w-full max-sm:h-32 max-sm:py-2 max-sm:flex-col bg-bg-yellow border-b border-black flex items-center justify-between"
    >
      <div className="w-[30%] flex  items-center justify-center">
        <Link
        className="cursor-pointer"
         href="/">
          <Image
            src="/images/logo-post-it.png"
            alt="Logo"
            width={200}
            height={100}
          ></Image>
        </Link>
      </div>
      <div className="w-[70%] flex justify-end h-full items-center mr-12 max-sm:mr-0 max-sm:justify-center space-x-6">
        {session ? (
          <>
            <div className="rounded-full h-12 w-12 bg-coorporate-blue flex items-center justify-center">
              <span data-testid="avatar" className="text-white">
                {session.user.name[0].toUpperCase() +
                  session.user.name[session.user.name.length - 1].toUpperCase()}
              </span>
            </div>
            <Link
              data-testid="signout-button"
              onClick={() => signOut()}
              href="#"
              className="rounded-full hover:bg-bg-yellow px-6 py-2 text-coorporate-orange border-coorporate-orange border border-black h-auto"
            >
              Signout
            </Link>
          </>
        ) : (
          <>
            <Link
              data-testid="signin-button"
              href="/auth/signin"
              className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-cyan border border-black h-auto"
            >
              Sign in
            </Link>
            <Link
              data-testid="register-button"
              href="/users/new"
              className="rounded-full hover:bg-bg-yellow px-6 py-2 text-coorporate-orange border-coorporate-orange border border-black h-auto"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
