import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import ChatPage from "./components/ChatPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ChatPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
