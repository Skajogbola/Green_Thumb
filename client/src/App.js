import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./pages/PageOne";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Browse from "./pages/Browse";
// import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div style={{ position: "relative" }}>

        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/Browse" component={Browse} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
