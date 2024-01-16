import { ILocalUser } from "@/types/localUserInterface";
import { IUser } from "@/types/userInterface";
import React, { ReactNode } from "react";

const UserDetailsComponent: (props: { user: IUser|ILocalUser }) => React.JSX.Element = (props: {
  user: IUser|ILocalUser;
}) => {
  return (
    <div className="rounded-lg w-80 m-h-60 flex flex-col items-center">
      <div className="rounded-full mb-8 text-white bg-gray-800 h-20 w-20 flex items-center justify-center">
    {props.user.name[0].toUpperCase()+props.user.name[props.user.name.length-1].toUpperCase()}
      </div>
      <h2 className="text-2xl font-light capitalize text-gray-600">
        {props.user.name}
      </h2>
      <small className="text-sm text-gray-400">
        {props.user.email}
      </small>
      <p className="my-2 text-lg">{props.user.username}</p>
    </div>
  );
};

export default UserDetailsComponent;
