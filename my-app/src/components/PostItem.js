import React from "react"
import css from "./css/PostItem.module.css";


const PostItem = (props) => {
    const savedPosts = props.savedPosts;
  return (
   
savedPosts.map(({title, name, image, description}) => {
            return(
                <div key={title} className={css.SearchItem}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} alt={title}></img>
                <p>{description}</p>
                </div>
            )
   
        }
    )
)
}

export default PostItem;