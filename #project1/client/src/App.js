import React from "react";

class App extends React.Component {
  state = {
    cnt: 0,
  };
  add = () => {
    this.setState((current) => ({ cnt: current.cnt + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ cnt: current.cnt - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.cnt}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
