import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItemLi = styled.li`
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 30px;
  padding: 10px 15px;
  width: fit-content;
  display: flex;
  margin-bottom: 20px;
  :hover {
    color: var(--twitter-color);
    background-color: var(--twitter-light-hover);
  }
`;

function MenuItem({ page, text }) {
  return (
    <MenuItemLi>
      <MenuItemLink to={page}>{text}</MenuItemLink>
    </MenuItemLi>
  );
}

export default MenuItem;
