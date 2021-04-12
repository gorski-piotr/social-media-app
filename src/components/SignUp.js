import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "../styles/Button";
import {
  MainWrapper,
  PageTitle,
  StyledForm,
  StyledInput,
  SignUpMessage,
} from "../styles/FormStyles";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("");

  const formReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In button pressed");
    setSignUpMessage("");

    let errors = [];

    if (username.trim().length < 4) {
      errors.push("Username must contain at least 4 characters.");
    }
    if (username.includes(" ")) {
      errors.push("Username must not contain any blank spaces.");
    }
    if (!email.trim().includes("@") && email.includes(" ")) {
      errors.push("Write a correct email address.");
    }
    if (password.includes(" ")) {
      errors.push("Password must not contain any blank spaces.");
    }
    if (password.trim().length < 6) {
      errors.push("Password must contain at least 6 characters.");
    }
    if (
      !password.trim().includes("!") &&
      !password.trim().includes("#") &&
      !password.trim().includes("@") &&
      !password.trim().includes("$") &&
      !password.trim().includes("%")
    ) {
      errors.push(
        "Password must include at least one of special characters: ! # @ $ %"
      );
    }
    if (
      !password.trim().includes("0") &&
      !password.trim().includes("1") &&
      !password.trim().includes("2") &&
      !password.trim().includes("3") &&
      !password.trim().includes("4") &&
      !password.trim().includes("5") &&
      !password.trim().includes("6") &&
      !password.trim().includes("7") &&
      !password.trim().includes("8") &&
      !password.trim().includes("9")
    ) {
      errors.push("Password must include at least one number");
    }
    if (password !== passwordConfirm) {
      errors.push("Passwords are not matching!");
    }

    if (errors.length > 0) {
      const errorItems = errors.map((element, index) => (
        <li key={index}>{element}</li>
      ));
      setSignUpMessage(errorItems);
      return;
    }

    let newUser = {
      username,
      email,
      password,
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
        console.log("Answer from API: ", res.data);
        if (res.data.signedup) {
          setSignUpMessage(<li>You have been signed up!</li>);
          formReset();
        }
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  return (
    <MainWrapper>
      <PageTitle>Sign Up</PageTitle>
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
        <label htmlFor="email">E-mail: </label>
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <label htmlFor="password-confirm">Confirm password: </label>
        <StyledInput
          type="password"
          id="password-confirm"
          name="password-confirm"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <Button type="submit">Sign Up</Button>
        <SignUpMessage>{signUpMessage}</SignUpMessage>
      </StyledForm>
    </MainWrapper>
  );
}

export default SignUp;
