import React from "react"
import css from "./css/PostItem.module.css";


function PostItemAPI({ savedPosts }) {
    return (
      <>
        {savedPosts.map((post) => (
          <div key={post.id}>
            <img src={post.webformatURL} alt={post.tags} />
            <p>Author: {post.user}</p>
          </div>
        ))}
      </>
    );
  }
  

export default PostItemAPI;