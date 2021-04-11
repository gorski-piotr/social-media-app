import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import styled from "styled-components";
import LogIn from "./components/LogIn";

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
              <LogIn />
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
