import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Discover from "../pages/Discover";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route path="/discover" exact render={() => <Discover />} />
          <Route path="/top-rated" exact render={() => <TopRated />} />
          <Route path="/popular" exact render={() => <Popular />} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
