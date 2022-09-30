import { useState, createContext } from "react";
import Component2 from "./Component2";


const UserContext = createContext();

function UseContext() {
  const [user, setUser] = useState("Ravi Patil");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1><br />
      <Component2 />
    </UserContext.Provider>
  );
}
export default UseContext
export {UserContext}

  