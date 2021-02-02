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

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillMount() {
    //컴포넌트가 떠날 때 호출됌 ex)페이지 이동
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I`m rendering");
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
