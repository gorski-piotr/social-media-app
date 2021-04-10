import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const MenuItemLi = styled.li`
  color: black;
  font-size: 24px;
  font-weight: 700;
  padding: 10px;
`;

const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 25px;
  border-radius: 30px;
  :hover {
    color: var(--twitter-color);
    background-color: #e8f5fe;
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
