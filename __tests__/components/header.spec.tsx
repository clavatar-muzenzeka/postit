import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeaderComponent from "@/components/headerComponent";

const dummyUser = {
  id: "1",
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const dummySession = {
  user: dummyUser,
  id: "1",
  expires: "2024-01-01T00:00:00.000Z",
};

describe("Header component", () => {
  it("Renders the header component", () => {
    render(<HeaderComponent session={dummySession} />);

    const mainElement = screen.getByTestId("header-component");

    expect(mainElement).toBeInTheDocument();
  });

  it("Renders avatar with proper acronym in header component if session valid", () => {
    render(<HeaderComponent session={dummySession} />);

    const avatar = screen.getByTestId("avatar");

    expect(avatar).toHaveTextContent(
      dummySession.user.name[0].toUpperCase() +
        dummySession.user.name[dummySession.user.name.length - 1].toUpperCase()
    );
  });

  it("Renders signout button in header component if session valid", () => {
    render(<HeaderComponent session={dummySession} />);

    const signoutButton = screen.getByTestId("signout-button");

    expect(signoutButton).toBeInTheDocument();
  });

  it("Renders signin button in header component if session not valid", () => {
    //@ts-ignore
    render(<HeaderComponent session={undefined} />);

    const siginButton = screen.getByTestId("signin-button");

    expect(siginButton).toBeInTheDocument();
  });

  it("Renders register button in header component if session not valid", () => {
    //@ts-ignore
    render(<HeaderComponent session={undefined} />);

    const registerButton = screen.getByTestId("register-button");

    expect(registerButton).toBeInTheDocument();
  });
});
