import React, { useState, useEffect } from "react";
import postData from '../posts.json';
import PostItem from './PostItem';
import Loader from "./Loader";
import css from "./css/Content.module.css";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    const savedPosts = postData.savedPosts;
    setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filtered = postData.savedPosts.filter((post) =>
      post.name.toLowerCase().includes(name)
    );
    setFetchedPosts(filtered);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor='searchinput'>Search</label>
          <input
            type='search'
            id='searchinput'
            placeholder='By Author'
            onChange={handleChange}
          />
          <h4>posts found {fetchedPosts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {isLoaded ? (
          <PostItem savedPosts={fetchedPosts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default ContentHooks;
