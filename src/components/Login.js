import React from "react";
import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import {
  MainWrapper,
  PageTitle,
  StyledForm,
  StyledInput,
  LogInMessage,
} from "./FormStyles";

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
    <MainWrapper>
      <PageTitle>Log In</PageTitle>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <StyledInput
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password: </label>
        <StyledInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Log In</Button>
        <LogInMessage>{logInMessage}</LogInMessage>
      </StyledForm>
    </MainWrapper>
  );
}

export default LogIn;
