import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "../styles/Button";

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const TwitterIconStyled = styled(TwitterIcon)`
  color: var(--twitter-color);
  font-size: 70px !important;
  cursor: pointer;
  padding: 10px;
  :hover {
    background-color: var(--twitter-light-hover);
    border-radius: 50%;
  }
`;

const LogOutLi = styled.li`
  text-decoration: none;
  color: black;
  border-radius: 30px;
  padding: 10px 15px;
  width: fit-content;
  display: flex;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  border: none;
  background-color: white;
  :hover {
    color: var(--twitter-color);
    background-color: var(--twitter-light-hover);
    cursor: pointer;
  }
`;

function Navigation(props) {
  if (props.token) {
    return (
      <nav>
        <TwitterIconStyled />
        <MenuList>
          <MenuItem page="/" text="Home" />
          <LogOutLi onClick={props.handleLogOut}>Log out</LogOutLi>
        </MenuList>
        <Button>Tweet</Button>
      </nav>
    );
  } else
    return (
      <nav>
        <TwitterIconStyled />
        <MenuList>
          <MenuItem page="/" text="Home" />
          <MenuItem page="/login" text="Log in" />
          <MenuItem page="/signup" text="Sign Up" />
        </MenuList>
        <Button>Tweet</Button>
      </nav>
    );
}

export default Navigation;
