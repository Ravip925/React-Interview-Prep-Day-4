import React from "react";
import '../App.css'
import { useRef, useState } from "react";

const UseRef = () => {
  const myName = useRef("");
  const [show, setShow] = useState(false);

  const submitForm = () => {
    const enteredName = myName.current.value;
    enteredName === "" ? alert("Enter Name!") : setShow(true);
  };

  return (
    <div>
      <h1>useRef</h1>
      <h5>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
      </h5>
      <input placeholder="Enter Name" type="text" name="name" ref={myName} />
      <button onClick={submitForm}>Submit</button>
      <h2>{show ? `Your Name is ${myName.current.value}` : " "}</h2>
    </div>
  );
};

export default UseRef;
