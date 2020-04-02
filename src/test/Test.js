import React from "react";

// state component (dynamic)
class Test2 extends React.Component {
  state = {
    name: "steve"
  };

  onTextChange = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <label for="name">Input: </label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onTextChange}
        />
        {/* Test below connects to state-less component */}
        <Test name={this.state.name} />
      </div>
    );
  }
}

//state-less component (static)
const Test = props => {
  console.log(props);
  return <div>Output: {props.name.toUpperCase()}</div>;
};

export default Test2;
