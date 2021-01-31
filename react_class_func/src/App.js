import React from "react";
import "./App.css";

//func타입의 컴포넌트는  hoc을 사용해야 class와 동등한 기능을 구현해 낼 수 있다
function FuncComp(props) {
  //파라미터의 값은 아무거나 주어도 상관없다 변수명일 뿐이다
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Func Number : {props.initNumber}</p>
    </div>
  );
}

//class타입의 컴포넌트는 className을 주어야 오류없이 실행된다
class ClassComp extends React.Component {
  state = {
    b: this.props.initNumber,
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Class Number : {this.state.b}</p>
        <input
          type="button"
          value="RANDOM"
          onClick={function () {
            this.setState({ b: Math.random() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      Hello World
      <FuncComp initNumber={22}></FuncComp>
      <ClassComp initNumber={55}></ClassComp>
    </div>
  );
}

export default App;
