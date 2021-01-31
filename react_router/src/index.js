import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

var tmpls = [
  { id: 1, title: "BMC", desc: "BMC is..." },
  { id: 2, title: "Cannondail", desc: "Cannondail vs Yeti..." },
  { id: 3, title: "Kona", desc: "...Kona" },
  { id: 4, title: "Trek", desc: "Fast on offroad!" },
];

function TEST() {
  var val = useParams();
  var selectID = val.t_id;
  var selectTopic = {
    title: "SORRY",
    desc: "not found data",
  };
  for (var i = 0; i < tmpls.length; i++) {
    if (tmpls[i].id === Number(selectID)) {
      selectTopic = tmpls[i];
      break;
    }
  }
  console.log("VALUE : ", val, val.t_id);
  return (
    <div>
      <h3>{selectTopic.title}</h3>
      {selectTopic.desc}
    </div>
  );
}

function Topics() {
  var ls = [];
  for (var i = 0; i < tmpls.length; i++) {
    ls.push(
      // 키를 주어야 에러가 발생하지 않는다
      <li key={tmpls[i].id}>
        <NavLink to={"/top/" + tmpls[i].id}>{tmpls[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{ls}</ul>
      <Route path="/top/:t_id">
        <TEST />
      </Route>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>React Router DOM example</h2>
      <ul>
        <li>
          <NavLink exact to="/">
            A
          </NavLink>
        </li>
        <li>
          <NavLink to="/top">B</NavLink>
        </li>
        <li>
          <NavLink to="/con">C</NavLink>
        </li>
      </ul>
      {/* exact 정확히 일치할때만 동작함 */}
      {/* Switch를 사용하면 제일먼저 출력되는 path만 인식하고 나머진 버린다 + 기본페이지를 아래로 배치*/}
      {/* 사용자가 존재하지 않는 페이지를 이동할려고 할 때 사용가능 */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/top">
          <Topics />
        </Route>
        <Route path="/con">
          <Contact />
        </Route>
        <Route path="/">NOT FOUND PAGE</Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
