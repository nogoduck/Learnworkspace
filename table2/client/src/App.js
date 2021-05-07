import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";
import VideoCardPage from "./components/views/VideoCardPage/VideoCardPage";
import Auth from "./hoc/auth";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/video/upload"
              component={Auth(VideoUploadPage, true)}
            />
            <Route
              exact
              path="/video/explore"
              component={Auth(VideoCardPage, true)}
            />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
