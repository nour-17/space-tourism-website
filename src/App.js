import React from "react";
import Design from "./components/Design";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  fetch("./data.json")
    .then(res => res.json())
    .then(data => console.log(data));
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/design" component={Design} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
