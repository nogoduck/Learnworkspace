import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sub1></Sub1> */}
        <Route path="/" exact component={LandingPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
