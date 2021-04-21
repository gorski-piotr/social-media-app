import React from "react";

function Post(props) {
  return (
    <div>
      {props.content}
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Post;
