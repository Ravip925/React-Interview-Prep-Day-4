import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("I'm in constructor");
  }

  componentDidMount() {
    console.log("I'm in componentDidMount");
  }

  componentDidUpdate() {
    console.log("I'm in componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("I'm in componentWillUnmount");
  }

  render() {
    console.log("I'm in render");
    return (
      <div>
        <h1>React LifeCycles</h1>
        <h3>The Count is {this.state.count}</h3> <br />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
        <p><small>See console for more info.</small></p>
      </div>
    );
  }
}

export default LifeCycle;
