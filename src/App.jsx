import "./App.css";
import UseRef from "./Components/UseRef";
import LifeCycle from "./Components/LifeCycle";
import UseContex from "./Components/UseContex";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className="ref">
        <UseRef />
        <br />
      </div>
      <hr />

      <div className="contex">
        <h3>What is Context API</h3>
        <h5>
          React’s useContext hook makes it easy to pass data throughout your app
          without manually passing props down the tree. It makes up part of
          React’s Context API (the other parts being the Provider and Consumer
          components, which we’ll see examples of below). Context can make a
          nice simple alternative to Redux when your data is simple or your app
          is small. Most of the React Hooks give function components
          capabilities they didn’t have before. The useContext hook is a little
          different though: It just makes things nicer.
          <br />
          <code>Syntax: const authContext = useContext(initialValue); </code>
          <br />
          <br />
        </h5>
      </div>
      <hr />

      <div className="callback">
        <h3>Difference between callback and useCallback Hook ?</h3>
        <h4>CallBacks :</h4>
        <h5>
          Callback is like an argument passed to an function whereas another one
          is hook, in this you pass another function as an argument. The
          callback function is invoked when setState finished and the component
          gets rendered. Since setState() is asynchronous the callback function
          is used for any post action. Note: It is recommended to use lifecycle
          method rather than this callback function. The callback is used to
          memoize function instead of value.
        </h5>
        <br />

        <h4>UseCallBack :</h4>
        <h5>
          useMemo is very similar to Callback. It accepts a function and a list
          of dependencies, but the difference between useMemo and Callback is
          that useMemo returns the memo-ized value returned by the passed
          function. It only recalculates the value when one of the dependencies
          changes. It’s very useful if you want to avoid expensive calculations
          on every render when the returned value isn’t changing.
        </h5>
      </div>
      <hr />
      <div className="prop">
        <h3>What is Props Drilling Concept ?What is State Uplifting ?</h3>
        <h4>Prop Drilling :</h4>
        <h5>
          It is the process by which you pass data from one component of the
          React Component tree to another by going through other components that
          do not need the data but only help in passing it around.
        </h5>
        <h4>State Uplifting:</h4>
        <h5>
          When several components need to share the same changing data then it
          is recommended to lift the shared state up to their closest common
          ancestor. That means if two child components share the same data from
          its parent, then move the state to parent instead of maintaining local
          state in both of the child components.
        </h5>
      </div>
      <hr />

      <div className="diff">
        <h3>Difference between useEffect and useContext ?</h3>
        <h4>useEffect</h4>
        <h5>
          You’ve likely performed data fetching, subscriptions, or manually
          changing the DOM from React components before. We call these
          operations “side effects” (or “effects” for short) because they can
          affect other components and can’t be done during rendering.
        </h5>
        <h5>
          The Effect Hook, useEffect, adds the ability to perform side effects
          from a function component. It serves the same purpose as
          componentDidMount, componentDidUpdate, and componentWillUnmount in
          React classes, but unified into a single API. (We’ll show examples
          comparing useEffect to these methods in Using the Effect Hook.)
        </h5>

        <h4>useContext</h4>
        <h5>
          This hook allows us to work with React's Context API, which itself a
          mechanism to allow us to share data within it's component tree without
          passing through props. Accepts a context object (the value returned
          from React.createContext) and returns the current context value for
          that context. The current context value is determined by the value
          prop of the nearest MyContext.Provider above the calling component in
          the tree.
        </h5>
      </div>

      <hr />
      <div className="Lifecycle">
        {show ? <LifeCycle /> : null}
        <button onClick={() => setShow(false)}>Unmount</button> <br /> <br />
        <h5>
          Each component in React has a lifecycle which you can monitor and
          manipulate during its three main phases. The three phases are:
          Mounting, Updating, and Unmounting.
        </h5>
        <h4>Mounting</h4>
        <h5>Mounting means putting elements into the DOM.</h5>
        <ul>
          <li>constructor()</li>
          <li>getDerivedStateFromProps()</li>
          <li>render()</li>
          <li>componentDidMount()</li>
        </ul>
        <h5>
          The constructor() method is called before anything else, when the
          component is initiated, and it is the natural place to set up the
          initial state and other initial values.
        </h5>
        <h5>
          The render() method is required and will always be called, the others
          are optional and will be called if you define them.
        </h5>
        <h5>
          The componentDidMount() method is called after the component is
          rendered. This is where you run statements that requires that the
          component is already placed in the DOM.
        </h5>
        <h4>Updating</h4>
        <h5>
          The next phase in the lifecycle is when a component is updated. A
          component is updated whenever there is a change in the component's
          state or props. React has five built-in methods that gets called, in
          this order, when a component is updated:
        </h5>
        <ul>
          <li>getDerivedStateFromProps()</li>
          <li>shouldComponentUpdate()</li>
          <li>render()</li>
          <li>getSnapshotBeforeUpdate()</li>
          <li>componentDidUpdate()</li>
        </ul>
        <h5>
          The render() method is required and will always be called, the others
          are optional and will be called if you define them.
        </h5>
        <h5>
          In the shouldComponentUpdate() method you can return a Boolean value
          that specifies whether React should continue with the rendering or
          not.
        </h5>
        <h5>
          The componentDidUpdate method is called after the component is updated
          in the DOM.
        </h5>
        <h4>Unmounting</h4>
        <h5>
          The next phase in the lifecycle is when a component is removed from
          the DOM, or unmounting as React likes to call it. React has only one
          built-in method that gets called when a component is unmounted:
        </h5>
        <ul>
          <li>componentWillUnmount()</li>
        </ul>
        <h5>The componentWillUnmount method is called when the component is about to be removed from the DOM.</h5>
      </div>
    </div>
  );
}

export default App;
