"use client";
import { ILocalPost } from "@/types/localPostInterface";
import { Session } from "next-auth";
import React, { EventHandler, FormEvent, useState } from "react";

async function AddPostComponent({
}: {
}): Promise<JSX.Element> {
  const [post, setPost] = useState<ILocalPost>({ } as ILocalPost);

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    console.log(post)
    /*
    const resp: SignInResponse | undefined = await signIn("credentials", {
      ...credentials,
      //redirect: false,
      callbackUrl: AUTH_REDIRECT_URL,
    } as SignInOptions); 
     */
  };
 
  return (
    <div>
      
    </div>
  );
}

export default AddPostComponent;
