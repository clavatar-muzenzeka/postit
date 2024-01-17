import React from "react";
import PostsPage from "./posts/page";

function MainPage(): JSX.Element {
  return (
    <div className="max-sm:h-fit">
      <PostsPage></PostsPage>
    </div>
  );
}

export default MainPage;
