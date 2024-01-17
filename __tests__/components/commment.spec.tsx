import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IComment } from "@/types/commentInterface";
import CommentComponent from "@/components/commentComponent";

const dummyComment: IComment = {
  id: 1,
  postId: 1,
  name: "Exemple comment",
  email: "dummy@domain.com",
  body: "This is dummy comment",
};

describe("Comment component", () => {
  it("Renders the comment component", () => {
    render(<CommentComponent comment={dummyComment} />);

    const mainElement = screen.getByTestId("comment-component");

    expect(mainElement).toBeInTheDocument();
  });

  it("Make sur that the comment title is rendreded correcty", () => {
    render(<CommentComponent comment={dummyComment} />);

    const commentTitle = screen.getByTestId("comment-title");

    expect(commentTitle).toBeInTheDocument();
  });

  it("Make sur that the comment title is rendreded with the proper text", () => {
    render(<CommentComponent comment={dummyComment} />);

    const commentTitle = screen.getByTestId("comment-title");

    expect(commentTitle).toHaveTextContent(dummyComment.name);
  });

  it("Make sur that the comment email is rendreded correcty", () => {
    render(<CommentComponent comment={dummyComment} />);

    const commentEmail = screen.getByTestId("comment-email");

    expect(commentEmail).toBeInTheDocument();
  });

  it("Make sur that the comment email is rendreded with the proper text", () => {
    render(<CommentComponent comment={dummyComment} />);

    const commentEmail = screen.getByTestId("comment-email");

    expect(commentEmail).toHaveTextContent(dummyComment.email);
  });


  it("Make sur that the comment body is rendreded correcty", () => {
    render(<CommentComponent comment={dummyComment} />);

    const commentBody = screen.getByTestId("comment-body");

    expect(commentBody).toBeInTheDocument();
  });

  it("Make sur that the comment body is rendreded with the proper text", () => {
    render(<CommentComponent comment={dummyComment} />);

    const commentBody = screen.getByTestId("comment-body");

    expect(commentBody).toHaveTextContent(dummyComment.body);
  });
  
  
});
