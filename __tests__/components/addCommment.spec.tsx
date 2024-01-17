import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AddCommentComponent from "@/components/addCommentComponent";

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

describe("Add comment component", () => {
  it("Renders the add comment component", () => {
    render(<AddCommentComponent postId={"1"} session={dummySession} />);

    const mainElement = screen.getByTestId("add-comment-component");

    expect(mainElement).toBeInTheDocument();
  });

  it("Make sur that title input is in the component", () => {
    render(<AddCommentComponent postId={"1"} session={dummySession} />);

    const ttitleInput = screen.getByTestId("title-input");

    expect(ttitleInput).toBeInTheDocument();
  });

  it("Make sur that comment body text area is in the component", () => {
    render(<AddCommentComponent postId={"1"} session={dummySession} />);

    const bodyInput = screen.getByTestId("body-input");

    expect(bodyInput).toBeInTheDocument();
  });


  it("Make sur that the comment submit button is in the component", () => {
    render(<AddCommentComponent postId={"1"} session={dummySession} />);

    const submitButton = screen.getByTestId("submit-comment-button");

    expect(submitButton).toBeInTheDocument();
  });
});
