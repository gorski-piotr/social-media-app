import React from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  const handlePosts = () => {
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
  };
  console.log("posts state: ", posts);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handlePosts}>Handle posts</button>
      <div>
        {posts.map((post) => {
          return <div key={post.id}>{post.content}</div>;
        })}
      </div>
    </div>
  );
}

export default Home;
