import React from "react";
import { useState } from "react";
import Button from "./Button";
import axios from "axios";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInMessage, setLogInMessage] = useState("");

  const formReset = () => {
    setUsername("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log In button pressed");

    let loginDetails = {
      username,
      password,
      ttl: 3600,
    };

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/user/login",
        JSON.stringify(loginDetails),
        { headers: headers }
      )
      .then((res) => {
        console.log("Answer from API: ", res.data);
        if (res.data.jwt_token) {
          setLogInMessage("You have been logged in!");
        } else {
          setLogInMessage("Check your username or password!");
        }
        formReset();
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Button type="submit">Log In</Button>
      </form>
      <p>{logInMessage}</p>
    </div>
  );
}

export default LogIn;
