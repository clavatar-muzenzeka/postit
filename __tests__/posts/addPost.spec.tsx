import AddPostPage from "@/app/posts/new/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Add Post page", () => {
  it("Renders the add post page", () => {
    render(<AddPostPage searchParams={{userId: "1"}} />);

    const mainElement = screen.getByTestId("add-post-component");

    expect(mainElement).toBeInTheDocument();
  });

  it("Make sur that the post title input is rendreded correcty", () => {
     render(<AddPostPage searchParams={{ userId: "1" }} />);

    const postTitle = screen.getByTestId("title-input");

    expect(postTitle).toBeInTheDocument();
  });

    it("Make sur that the post body input is rendreded correcty", () => {
        render(<AddPostPage searchParams={{ userId: "1" }} />);
    
        const postBody = screen.getByTestId("body-input");
    
        expect(postBody).toBeInTheDocument();
    });

    it("Make sur that the the submit post button is rendreded with the correct type in order to mask it", () => {
        render(<AddPostPage searchParams={{ userId: "1" }} />);
    
        const postBody = screen.getByTestId("submit-post-button");
    
        expect(postBody).toBeInTheDocument();
    });

});
