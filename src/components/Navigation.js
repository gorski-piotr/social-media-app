import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h3>Navigation</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
