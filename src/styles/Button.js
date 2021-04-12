import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--twitter-color);
  color: white;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  max-width: 200px;
  padding: 10px 20px;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    background-color: var(--twitter-btn-hover);
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
