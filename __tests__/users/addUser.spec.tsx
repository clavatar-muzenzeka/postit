import AddUserPage from "@/app/users/new/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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

describe("User details component", () => {
  it("Renders the user component", () => {
    render(<AddUserPage />);

    const mainElement = screen.getByTestId("add-user-page");

    expect(mainElement).toBeInTheDocument();
  });

  it("Make sur that the name input is rendreded correcty", () => {
    render(<AddUserPage />);

    const userName = screen.getByTestId("name-input");

    expect(userName).toBeInTheDocument();
  });

    it("Make sur that the username input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("username-input");

      expect(userName).toBeInTheDocument();
    });


    it("Make sur that the password input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("password-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the password input is rendreded with the correct type in order to mask it", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("password-input");

      expect(userName).toHaveAttribute("type", "password");
    });




    it("Make sur that the email input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("email-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the street input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("street-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the suite input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("suite-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the city input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("city-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the zipcode input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("zipcode-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the phone input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("phone-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the website input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("website-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the company name input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("company-name-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the company catch phrase input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("company-catch-phrase-input");

      expect(userName).toBeInTheDocument();
    });


    it("Make sur that the company bs input is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("company-bs-input");

      expect(userName).toBeInTheDocument();
    });

    it("Make sur that the submit button is rendreded correcty", () => {
      render(<AddUserPage />);

      const userName = screen.getByTestId("submit-user-button");

      expect(userName).toBeInTheDocument();
    });
});
