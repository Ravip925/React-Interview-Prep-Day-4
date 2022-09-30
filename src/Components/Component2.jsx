import React from "react";
import { UserContext } from "./UseContex";
import { useContext } from "react";

const Component2 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <>
        <h1>Component 2</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    </div>
  );
};

export default Component2;
