import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
// import Popular from "../pages/Popular";
import Discover from "../pages/Discover";
import Detail from "../pages/Detail";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route path="/discover" exact render={() => <Discover />} />
          <Route path="/discover/:id" exact render={() => <Discover />} />
          <Route path="/detail/:id" exact render={() => <Detail />} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
