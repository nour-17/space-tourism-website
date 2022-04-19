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
  const [crewContent, setCrewContent] = React.useState("Commander");
  const [destinationData, setDestinationData] = React.useState({});
  const [crewData, setCrewData] = React.useState({})
  const [appBackground, setAppBackground] = React.useState("home");
  function destination(place) {
    setDestinationContent(place);
  }
  function crew(tap) {
    setCrewData(tap)
  }
  function changeBackground(page) {
    setAppBackground(page);
  }
  React.useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data.destinations[0]);
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
        setCrewData(data.crew[
          crewContent === "Mission Specialist"
              ? 1
              : crewContent === "Pilot"
              ? 2
              : crewContent === "Flight Engineer"
              ? 3
              : 0
        ])
      });
  }, [destinationContent, crewData]);
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
          <Route path="/crew" element={<Crew props={crewData} crewState={setCrewContent}/>} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
