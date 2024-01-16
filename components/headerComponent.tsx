import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between">
      <div className="w-[30%] flex items-center justify-center">
        <Image
          src="/images/logo-post-it.png"
          alt="Logo"
          width={200}
          height={100}
        ></Image>
      </div>
      <div className="w-[70%] flex justify-end h-full items-center mr-12 space-x-6">
        <Link
          href="/auth/signin"
          className="rounded-full hover:bg-bg-yellow px-6 py-2 bg-coorporate-orange border border-black h-auto"
        >
          Sign in
        </Link>
        <Link
          href="/users/new"
          className="rounded-full hover:bg-bg-yellow px-6 py-2 text-coorporate-orange border-coorporate-orange border border-black h-auto"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
