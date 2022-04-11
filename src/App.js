import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// components
import Design from "./components/Design";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
  const changeBackground = name => {};
  fetch("./data.json")
    .then(res => res.json())
    .then(data => console.log(data));
  return (
    <div className="app home-bg">
      <a className="skip-to-content text-dark" href="#">
        Skip to content
      </a>

      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Design} />
          <Route path="/technology" component={Technology} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
