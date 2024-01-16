"use client";
import { AUTH_REDIRECT_URL } from "@/config/global";
import { ILocalUser } from "@/types/localUserInterface";
import { createUser } from "@/utils/usersProvider";
import { create } from "domain";
import { SignInOptions, SignInResponse, signIn } from "next-auth/react";
import React, { EventHandler, FormEvent, useState } from "react";

function AddUser(): JSX.Element {
  const [user, setUser] = useState<ILocalUser>({} as ILocalUser);

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    
    const resp: ILocalUser | undefined = await createUser(user)

    if(resp) window.location.href = "/auth/signin"
    
  };
  return (
    <div className="w-full">
      <h1 className="text-6xl w-full relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold">
        Register
      </h1>
      <div className="mt-8 w-full p-12 border border-black">
        <form className="w-full" method="POST" onSubmit={onFormSubmit}>
          <div className="flex mb-4 w-full items-center space-x-2">
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <p className=" text-xs font-light shrink-0 text-gray-400 uppercase">
              Connexion informations
            </p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>

          <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                for="name"
                className="mb-2 text-xl text-coorporate-orange after:content-['*']"
              >
                Name
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={({ target }) =>
                  setUser({ ...user, name: target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="username"
                className="mb-2 text-xl text-coorporate-orange after:content-['*']"
              >
                Username
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={({ target }) =>
                  setUser({ ...user, username: target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="password"
                className="mb-2 text-xl text-coorporate-orange after:content-['*']"
              >
                Password
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={({ target }) =>
                  setUser({ ...user, password: target.value })
                }
              />
            </div>
          </div>

          <div className="flex mb-4 mt-6 w-full items-center space-x-2">
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <p className=" text-xs font-light shrink-0 text-gray-400 uppercase">
              Adress
            </p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>

          <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                for="street"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Street
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="street"
                id="street"
                value={user.address?.street}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      street: target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="suite"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Suite
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="suite"
                id="suite"
                value={user.address?.suite}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      suite: target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-3/4 w-full">
              <label for="city" className="mb-2 text-xl text-coorporate-orange">
                City
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4   focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="city"
                id="city"
                value={user.address?.city}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      city: target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label
                for="zipcode"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Zip Code
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="zipcode"
                id="zipcode"
                value={user.address?.zipcode}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      zipcode: target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="flex mb-4 mt-6 w-full items-center space-x-2">
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <p className=" text-xs font-light shrink-0 text-gray-400 uppercase">
              Contacts
            </p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>

          <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                for="email"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Email
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="email"
                name="username"
                id="username"
                value={user.email}
                onChange={({ target }) =>
                  setUser({ ...user, email: target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="phone"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Phone
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="phone"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={({ target }) =>
                  setUser({ ...user, phone: target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="website"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Web Site
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="website"
                name="website"
                id="website"
                value={user.website}
                onChange={({ target }) =>
                  setUser({ ...user, website: target.value })
                }
              />
            </div>
          </div>

          <div className="flex mb-4 mt-6 w-full items-center space-x-2">
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <p className=" text-xs font-light shrink-0 text-gray-400 uppercase">
              Company
            </p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>

          <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                for="companyName"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Company Name
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="companyName"
                id="companyName"
                value={user.company?.name}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    company: {
                      ...user.company,
                      name: target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="companyBs"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Company Business Service
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="companyBs"
                id="companyBs"
                value={user.company?.bs}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    company: {
                      ...user.company,
                      bs: target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="flex space-x-4 w-full mb-4">
            <div className="flex flex-col w-full">
              <label
                for="companyCatchPhrase"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Company Catch Prase
              </label>
              <input
                className="bg-bg-yellow p-2 mb-4   focus:outline-none focus:border-coorporate-orange focus:border"
                type="text"
                name="companyCatchPhrase"
                id="companyCatchPhrase"
                value={user.company?.catchPhrase}
                onChange={({ target }) =>
                  setUser({
                    ...user,
                    company: {
                      ...user.company,
                      catchPhrase: target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <input
            className="rounded-full px-6 py-2 hover:bg-bg-yellow cursor-pointer bg-coorporate-orange border border-black h-auto float-end"
            type="submit"
            value="Register"
          />
          <div className="clear-end"></div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
