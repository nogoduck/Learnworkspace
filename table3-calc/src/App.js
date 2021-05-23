import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./index.css";
import Main from "./views/Main";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    </>
  );
}

export default App;
