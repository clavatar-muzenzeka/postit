import { ILocalUser } from "@/types/localUserInterface";
import { IUser } from "@/types/userInterface";
import React, { ReactNode } from "react";

const UserDetailsComponent: (props: {
  user: IUser | ILocalUser;
}) => React.JSX.Element = (props: { user: IUser | ILocalUser }) => {
  return (
    <div className="w-96 max-h-[50vh] flex flex-col rounded overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex shrink-0 flex-col bg-coorporate-blue p-4 items-center">
        <div className="rounded-full mb-4 text-coorporate-orange bg-white h-16 w-16 flex items-center justify-center">
          {props.user.name[0].toUpperCase() +
            props.user.name[props.user.name.length - 1].toUpperCase()}
        </div>
        <h2 className="text-2xl font-light capitalize text-white">
          {props.user.name}
        </h2>
        <small className="text-sm text-bg-yellow">
          {(props.user.phone ?? "N/A") + " - " + (props.user.email ?? "N/A")}
          {}
        </small>
        <p className="my-2 text-lg text-coorporate-cyan">
          {"@"+props.user.username}
        </p>
      </div>
      <div className="px-8 h-full overflow-auto py-4">
        <div className="flex flex-col space-y-2">
          <div className="flex mb-1 mt-3 w-full items-center space-x-2">
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <p className=" text-2xs font-light shrink-0 text-gray-400 uppercase">
              Address
            </p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>
          <div className=" text-gray-600 flex space-x-2">
            <div className="w-full text-right">Street:</div>
            <div className="w-full text-gray-800 font-bold">
              {props.user?.address?.street ?? "N/A"}
            </div>
          </div>
          <div className=" text-gray-600 flex space-x-2">
            <div className="w-full text-right">Suite:</div>
            <div className="w-full text-gray-800 font-bold">
              {props.user?.address?.suite ?? "N/A"}
            </div>
          </div>
          <div className=" text-gray-600 flex space-x-2">
            <div className="w-full text-right">City:</div>
            <div className="w-full text-gray-800 font-bold">
              {props.user?.address?.city ?? "N/A"}
            </div>
          </div>
          <div className=" text-gray-600 flex space-x-2">
            <div className="w-full text-right">Zip Code:</div>
            <div className="w-full text-gray-800 font-bold">
              {props.user?.address?.zipcode ?? "N/A"}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex mb-1 mt-3 w-full items-center space-x-2">
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <p className=" text-2xs font-light shrink-0 text-gray-400 uppercase">
              Company
            </p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>
          <div className=" text-gray-600 flex space-x-2">
            <div className="w-full text-right">Name:</div>
            <div className="w-full text-gray-800 font-bold">
              {props.user?.company?.name ?? "N/A"}
            </div>
          </div>
          <div className=" relative -top-2 text-gray-600 space-x-2 flex">
            <div className="w-full text-right"></div>
            <div className="w-full text-2xs text-gray-800">
              {props.user?.company?.catchPhrase ?? ""}
            </div>
          </div>
          <div className=" text-gray-600 flex space-x-2">
            <div className="w-full text-right">Business Service:</div>
            <div className="w-full text-gray-800 font-bold">
              {props.user?.company?.bs ?? "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
