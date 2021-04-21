import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import styled from "styled-components";
import LogIn from "./components/LogIn";
import { useState } from "react";
import axios from "axios";
import Recomendations from "./components/Recomendations";

const MainAppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftColumn = styled.div`
  flex-basis: 20%;
  padding: 20px;
`;

const RightColumn = styled.div`
  flex-basis: 20%;
  padding: 20px;
`;

const MainColumn = styled.div`
  flex-basis: 60%;
  border-left: 1px solid var(--twitter-background);
  border-right: 1px solid var(--twitter-background);
  height: 100vh;
  padding: 20px;
`;

const SideColumnTitle = styled.h3`
  color: var(--twitter-color);
`;

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  // console.log("TOKEN: ", token);

  const handleToken = (userToken) => {
    // console.log("User Token: ", userToken);
    setToken(userToken);
    localStorage.setItem("userToken", userToken);
    // console.log("local storage: ", localStorage);
  };

  const handleLogOut = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };

    let data = {};

    axios
      .post("https://akademia108.pl/api/social-app/user/logout", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("LOGOUT Answer from API: ", res);
        if (res.data.message === "Successfully logged out") {
          alert(res.data.message);
          localStorage.removeItem("userToken");
          setToken(localStorage.getItem("userToken"));
        }
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  return (
    <Router>
      <MainAppWrapper>
        <LeftColumn>
          <Navigation handleLogOut={handleLogOut} token={token} />
        </LeftColumn>
        <MainColumn>
          <Switch>
            <Route exact path="/">
              <Home token={token} />
            </Route>
            <Route path="/login">
              <LogIn tokenMethod={handleToken} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            {/* <Route path="/404">
              <SignUp />
            </Route> */}
          </Switch>
        </MainColumn>
        <RightColumn>
          <SideColumnTitle>
            Follow recomendations
            <br />
          </SideColumnTitle>
          {token && <Recomendations token={token} />}
          {!token && <div>Log in to check recomendations!</div>}
        </RightColumn>
      </MainAppWrapper>
    </Router>
  );
}

export default App;
