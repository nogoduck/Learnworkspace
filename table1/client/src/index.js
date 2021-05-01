import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import PromiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware,
  ReduxThunk
)(createStore);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
