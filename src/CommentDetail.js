import React from 'react'


function CommentDetail({author ,timeAgo ,commentText ,profilepic}) {
  return (
    <div className="comment ">
    <a href="/" className="avatar">
        <img alt="avatar" src={profilepic}/>
    </a>
    <div className="content">
        <a  href="/" className="author">
           {author}
        </a>
        <div className="metadata">

            <span className="date">{timeAgo}</span>
        </div>
        <div className="text"> {commentText}</div>
    </div>

</div>
  )
}

export default CommentDetail