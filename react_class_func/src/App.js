// ### SKIPPING EFFECT 부터 이해 못함
// 참고 영상 : https://www.youtube.com/watch?v=d-UtrSSj5gA&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=9&ab_channel=%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9
import React, { useState, useEffect } from "react";
import "./App.css";

//func타입의 컴포넌트는  hoc을 사용해야 class와 동등한 기능을 구현해 낼 수 있다
var funcStyle = "color:powderblue";
var funcId = 0;
function FuncComp(props) {
  //파라미터의 값은 아무거나 주어도 상관없다 변수명일 뿐이다
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];
  const [date, setDate] = useState(new Date().toString());
  // console.log(numberState);

  //render()함수가 실행된 이후에 실행되는 것으로 보아 class에서의 componentDidMount와 등가라는 것을 알 수 있다
  //side effect(부작용)이 생략된 뜻이다
  //render()가 리엑트의 메인 effect인데 그 외의 작업이기 때문에 side가 쓰인다
  //여러번 사용가능
  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect_number (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
      document.title = number + " : " + date;
      return function () {
        console.log(
          "%cfunc => useEffect_number return (componentDidMount & componentDidUpdate)" +
            ++funcId,
          funcStyle
        );
      };
    },
    [number]
  );

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect_date (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
      document.title = date + " : " + date;
      return function () {
        console.log(
          "%cfunc => useEffect_date return (componentDidMount & componentDidUpdate)" +
            ++funcId,
          funcStyle
        );
      };
    },
    [date]
  );

  console.log("%cfunc => render" + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Func Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="RANDOM"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="DATE"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

var classStyle = "color:orange";
//class타입의 컴포넌트는 className을 주어야 오류없이 실행된다
class ClassComp extends React.Component {
  state = {
    b: this.props.initNumber,
    date: new Date().toString(),
  };

  // ########################################################
  //search-keyword : react life cycle
  // willmount > render > didmount
  componentWillMount() {
    //render보다도 먼저 실행되는 메서드 이다 render보다 먼저 구현할 정보가 있으면 넣어주면 된다
    console.log("%cclass => componentWillMount", classStyle);
  }
  componentDidMount() {
    //render가 실행된 다음에 실행됌
    console.log("%cclass => componentDidMount", classStyle);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true; //클릭이 있을시 랜더를 호출할 필요가 있는지를 판단
  }
  componentWillUpdate(nextProps, nextState) {
    //shold => true
    console.log("%cclass => componentWillUpdate", classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }
  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", classStyle);
  }
  // ########################################################

  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Class Number : {this.state.b}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="RANDOM"
          onClick={function () {
            this.setState({ b: Math.random() });
          }.bind(this)}
        ></input>

        <input
          type="button"
          value="DATE"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

function App() {
  const [FuncShow, setFuncShow] = useState(true);
  const [ClassShow, setClassShow] = useState(true);
  return (
    <div className="App">
      <h1>React Func and Class</h1>
      <input
        type="button"
        value="Func"
        onClick={function () {
          if (FuncShow === true) {
            setFuncShow(false);
          } else {
            setFuncShow(true);
          }
        }}
      />
      <input
        type="button"
        value="Class"
        onClick={function () {
          if (ClassShow === true) {
            setClassShow(false);
          } else {
            setClassShow(true);
          }
        }}
      />
      {FuncShow ? <FuncComp initNumber={22} /> : null}
      {ClassShow ? <ClassComp initNumber={55} /> : null}
    </div>
  );
}

export default App;
