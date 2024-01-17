"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const HeaderComponent = ({ session }: { session: Session }): JSX.Element => {
  return (
    <div className="h-20 w-full bg-bg-yellow border-b border-black flex items-center justify-between">
      <div className="w-[30%] flex items-center justify-center">
        <Link href="/">
          <Image
            src="/images/logo-post-it.png"
            alt="Logo"
            width={200}
            height={100}
          ></Image>
        </Link>
      </div>
      <div className="w-[70%] flex justify-end h-full items-center mr-12 space-x-6">
        {session ? (
          <>
            <div className="rounded-full h-12 w-12 bg-coorporate-blue flex items-center justify-center">
              <span className="text-white">
                {session.user.name[0].toUpperCase() +
                  session.user.name[session.user.name.length - 1].toUpperCase()}
              </span>
            </div>
            <Link
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
              href="/auth/signin"
              className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-cyan border border-black h-auto"
            >
              Sign in
            </Link>
            <Link
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
