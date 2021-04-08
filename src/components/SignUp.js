import React from "react";

const myFunction = () => {
  console.log("elo");
};

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={myFunction}>Test button</button>
    </div>
  );
}

export default SignUp;
