import React from "react";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button pressed");

    let newUser = {
      username,
      email,
      password,
    };
    console.log("New user: ", newUser);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/user/signup",
        JSON.stringify(newUser),
        { headers: headers }
      )
      .then((res) => {
        console.log("Answer from API: ", res);
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        ></input>
        <br />
        <label htmlFor="password-confirm">Confirm password: </label>
        <input
          type="password"
          id="password-confirm"
          name="password-confirm"
          placeholder="Confirm password"
        ></input>
        <br />
        <button type="submit">Sign up</button>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </form>
    </div>
  );
}

export default SignUp;
