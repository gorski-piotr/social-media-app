import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="left-column">
          <Navigation />
        </div>
        <div className="main-column">
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
        </div>
      </div>
    </Router>
  );
}

export default App;
