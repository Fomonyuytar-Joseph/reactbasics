import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetail";

const App =()=>{
    return (
        <div className=" ui container comments">
           
            <CommentDetail author="Sam" timeAgo="Today at 4:12" commentText="nice pic" profilepic={faker.image.avatar()}/>
            <CommentDetail author="Elliot" timeAgo="Today at 3:12" commentText="Nice blog" profilepic={faker.image.avatar()}/>
            <CommentDetail author="Joseph" timeAgo="Today at 1:12" commentText="Thanks for sharing" profilepic={faker.image.avatar()}/>

        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector("#root"));