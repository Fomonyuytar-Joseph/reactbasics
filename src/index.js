import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetail";

const App =()=>{
    return (
        <div className=" ui container comments">
           
            <CommentDetail author="Sam"/>
            <CommentDetail author="Elliot"/>
            <CommentDetail author="Joseph"/>

        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector("#root"));