import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Home(props) {
  const [posts, setPosts] = useState([]);

  //useEffect with empty array as a second parameter will run the code only once (onMount)
  useEffect(() => {
    // axios beggining
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let data = {};
    axios
      .post("https://akademia108.pl/api/social-app/post/latest", data, {
        headers: headers,
      })
      .then((res) => {
        console.table("POSTS Answer from API: ", res.data);
        setPosts(
          res.data.map((post) => {
            return post;
          })
        );
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
    // axios end
  }, []);

  console.log("posts state: ", posts);

  if (props.token) {
    return (
      <div>
        <h2>Home</h2>
        <br />
        <hr />
        <br />
        <TweetBox />
        <br />
        <hr />
        <br />
        {posts.map((post) => {
          return <Post key={post.id} content={post.content} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcome to my Social App!</h2>
        <p>Log in to see the posts!</p>
      </div>
    );
  }
}

export default Home;
