import React from "react";
import axios from "axios";

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    let newUser = {
      username: "piotr",
      email: "piotr@piotr.com",
      password: "password",
    };

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
        console.log(res);
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
        />
        <br />
        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        ></input>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
