import SigninPage from "@/app/auth/signin/page";
import AddPostPage from "@/app/posts/new/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Sign in page", () => {
  it("Renders the add post page", () => {
    render(<SigninPage />);

    const mainElement = screen.getByTestId("signin-page");

    expect(mainElement).toBeInTheDocument();
  });

    it("Make sur that the username input is rendreded correcty", () => {
        render(<SigninPage />);
    
        const emailInput = screen.getByTestId("username-input");
    
        expect(emailInput).toBeInTheDocument();
    });

     it("Make sur that the password input is rendreded correcty", () => {
       render(<SigninPage />);

       const emailInput = screen.getByTestId("password-input");

       expect(emailInput).toBeInTheDocument();
     });

     it("Make sur that the password input is rendreded correcty", () => {
       render(<SigninPage />);

       const emailInput = screen.getByTestId("password-input");

       expect(emailInput).toHaveAttribute("type", "password");
     });
});
