import React from "react";
import styled from "styled-components";

const MyStyledInput = styled.input`
  border: 2px solid green;
`;

function MyInput() {
  return <MyStyledInput />;
}

export default MyInput;
