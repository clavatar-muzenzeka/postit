"use client";
import { ILocalUser } from "@/types/localUserInterface";
import { createUser } from "@/utils/usersProvider";
import React, { EventHandler, FormEvent, useState } from "react";

const AddUserPage: (props: {
}) => React.JSX.Element = () => {
  const [user, setUser] = useState<ILocalUser>({} as ILocalUser);

  const onFormSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault();

    const resp: ILocalUser | undefined = await createUser(user);

    if (resp) window.location.href = "/auth/signin";
  };
  return (
    <div
      data-testid="add-user-page"
      className="w-full max-sm:flex max-sm:flex-col"
    >
      <h1 className="text-6xl max-sm:text-center w-full relative text-coorporate-blue font-serif ${abril.className} mb-4 pb-4 font-extrabold">
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

          <div className="flex max-sm:flex-col max-sm:space-x-0 space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="mb-2 text-xl text-coorporate-orange after:content-['*']"
              >
                Name
              </label>
              <input
                data-testid="name-input"
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
                htmlFor="username"
                className="mb-2 text-xl text-coorporate-orange after:content-['*']"
              >
                Username
              </label>
              <input
                data-testid="username-input"
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

          <div className="flex max-sm:flex-col max-sm:space-x-0 space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="street"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Street
              </label>
              <input
                data-testid="street-input"
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
                htmlFor="suite"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Suite
              </label>
              <input
                data-testid="suite-input"
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

          <div className="flex max-sm:flex-col max-sm:space-x-0 space-x-4 w-full">
            <div className="flex flex-col w-3/4 w-full">
              <label
                htmlFor="city"
                className="mb-2 text-xl text-coorporate-orange"
              >
                City
              </label>
              <input
                data-testid="city-input"
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
            <div className="flex flex-col max-sm:w-full w-1/4">
              <label
                htmlFor="zipcode"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Zip Code
              </label>
              <input
                data-testid="zipcode-input"
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

          <div className="flex max-sm:flex-col max-sm:space-x-0 space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Email
              </label>
              <input
                data-testid="email-input"
                className="bg-bg-yellow p-2 mb-4  focus:outline-none focus:border-coorporate-orange focus:border"
                type="email"
                name="email"
                id="username"
                value={user.email}
                onChange={({ target }) =>
                  setUser({ ...user, email: target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Phone
              </label>
              <input
                data-testid="phone-input"
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
                htmlFor="website"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Web Site
              </label>
              <input
                data-testid="website-input"
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

          <div className="flex max-sm:flex-col max-sm:space-x-0 space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="companyName"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Company Name
              </label>
              <input
                data-testid="company-name-input"
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
                htmlFor="companyBs"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Company Business Service
              </label>
              <input
                data-testid="company-bs-input"
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
                htmlFor="companyCatchPhrase"
                className="mb-2 text-xl text-coorporate-orange"
              >
                Company Catch Prase
              </label>
              <input
                data-testid="company-catch-phrase-input"
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
            data-testid="submit-user-button"
            className="max-sm:w-full rounded-full px-6 py-2 hover:bg-bg-yellow cursor-pointer bg-coorporate-cyan border border-black h-auto float-end"
            type="submit"
            value="Register"
          />
          <div className="clear-end"></div>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
