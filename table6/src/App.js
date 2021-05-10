import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from "./views/Main";
import Sub1 from "./views/Sub1";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sub1></Sub1> */}
        <Route path="/" exact component={Main} />
      </BrowserRouter>
    </>
  );
}

export default App;
