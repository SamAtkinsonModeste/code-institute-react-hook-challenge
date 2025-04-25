import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../secret";
import PostItemAPI from './PostItemAPI';
import Loader from "./Loader";
import css from "./css/Content.module.css";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]); // posts shown in the UI
  const [allPosts, setAllPosts] = useState([]); // full data from the API

  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
      .then((response) => {
        console.log(response.data); // Helps you see the structure
        const data = Array.isArray(response.data.hits) ? response.data.hits : [];
        setAllPosts(data); // store the full data
        setSavedPosts(data); // show everything initially
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoaded(false);
      });
  }, []);

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filtered = allPosts.filter((post) =>
      post.user.toLowerCase().includes(name) // 'user' is the Pixabay field for author name
    );
    setSavedPosts(filtered); // update what is shown
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchinput">Search</label>
          <input
            type="search"
            id="searchinput"
            placeholder="By Author"
            onChange={handleChange}
          />
          <h4>posts found {savedPosts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {isLoaded ? <PostItemAPI savedPosts={savedPosts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
