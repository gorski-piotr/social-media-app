import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import styled from "styled-components";

const MainAppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftColumn = styled.div`
  flex-basis: 25%;
`;

const RightColumn = styled.div`
  flex-basis: 25%;
`;

const MainColumn = styled.div`
  text-align: center;
  flex-basis: 49%;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  height: 100vh;
`;

const SideColumnTitle = styled.h3`
  color: blue;
`;

function App() {
  return (
    <Router>
      <MainAppWrapper>
        <LeftColumn>
          <Navigation />
        </LeftColumn>
        <MainColumn>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
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
          <SideColumnTitle>Right column</SideColumnTitle>
        </RightColumn>
      </MainAppWrapper>
    </Router>
  );
}

export default App;
