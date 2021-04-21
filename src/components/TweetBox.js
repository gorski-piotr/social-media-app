import React from "react";
import Button from "../styles/Button";
import { StyledInput } from "../styles/FormStyles";

function TweetBox() {
  return (
    <div>
      <form>
        <StyledInput placeholder="What's happening?" type="text" />
        <Button type="submit">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
