import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className=" ui container comments">

        <ApprovalCard>
            <h4>Warning</h4>
            are you sure you want to do this?
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:12"
          commentText="nice pic"
          profilepic={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Elliot"
          timeAgo="Today at 3:12"
          commentText="Nice blog"
          profilepic={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Joseph"
          timeAgo="Today at 1:12"
          commentText="Thanks for sharing"
          profilepic={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
