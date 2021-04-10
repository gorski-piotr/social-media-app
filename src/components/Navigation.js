import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";

const MenuList = styled.ul`
  list-style-type: none;
`;

function Navigation() {
  return (
    <nav>
      <TwitterIcon />
      <MenuList>
        <MenuItem page="/" text="Home" />
        <MenuItem page="/login" text="Login" />
        <MenuItem page="/signup" text="Sign Up" />
      </MenuList>
    </nav>
  );
}

export default Navigation;
