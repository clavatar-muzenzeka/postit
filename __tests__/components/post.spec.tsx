import PostComponent from "@/components/postComponent";
import { IPost } from "@/types/postInterface";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const dummyPost: IPost = {
  id: 1,
  title: "Exemple post",
  userId: 1,
  body: "This is dummy comment",
};

describe("Post component", () => {
  it("Renders the comment component", () => {
    render(<PostComponent post={dummyPost} />);

    const mainElement = screen.getByTestId("post-component");

    expect(mainElement).toBeInTheDocument();
  });

  it("Make sur that the post title is rendreded correcty", () => {
    render(<PostComponent post={dummyPost} />);

    const commentTitle = screen.getByTestId("post-title");

    expect(commentTitle).toBeInTheDocument();
  });

  it("Make sur that the post title is rendreded with the proper text", () => {
    render(<PostComponent post={dummyPost} />);

    const commentTitle = screen.getByTestId("post-title");

    expect(commentTitle).toHaveTextContent(dummyPost.title);
  });

  it("Make sur that the post body is rendreded correcty", () => {
    render(<PostComponent post={dummyPost} />);

    const commentBody = screen.getByTestId("post-body");

    expect(commentBody).toBeInTheDocument();
  });

  it("Make sur that the post body is rendreded with the proper text", () => {
    render(<PostComponent post={dummyPost} />);

    const commentBody = screen.getByTestId("post-body");

    expect(commentBody).toHaveTextContent(dummyPost.body);
  });
  
});
