import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Discover from "../pages/Discover";

function App() {
  return (
    <HashRouter basename="/">
      <div className="background center">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route path="/Discover" exact render={() => <Discover />} />
          <Route path="/TopRated" exact render={() => <TopRated />} />
          <Route path="/Popular" exact render={() => <Popular />} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
