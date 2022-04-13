import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components

import Design from "./components/Design";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
  const [destinationContent, setDestinationContent] = React.useState("moon");
  const [destinationData, setDestinationData] = React.useState({});
  const [appBackground, setAppBackground] = React.useState("home");
  function destination(place) {
    setDestinationContent(place);
  }
  function changeBackground(page) {
    setAppBackground(page);
  }
  React.useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        console.log(data.destinations[0]);
        setDestinationData(
          data.destinations[
            destinationContent === "mars"
              ? 1
              : destinationContent === "europa"
              ? 2
              : destinationContent === "titan"
              ? 3
              : 0
          ]
        );
      });
  }, [destinationContent]);
  return (
    <div className={`app ${appBackground}-bg`}>
      <a className="skip-to-content text-dark" href="#">
        Skip to content
      </a>

      <BrowserRouter>
        <Nav handleBackground={changeBackground} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/destination"
            element={
              <Destination
                props={destinationData}
                destinationState={destination}
              />
            }
          />
          <Route path="/crew" element={<Design />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
