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
  const [technologyContent, setTechnologyContent] = React.useState("Commander");
  const [destinationData, setDestinationData] = React.useState({});
  const [crewData, setCrewData] = React.useState({})
  const [technologyData, setTechnologyData] = React.useState({})
  const [appBackground, setAppBackground] = React.useState("home");
  
  function changeBackground(page) {
    setAppBackground(page);
  }
  React.useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data.technology);
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
        ]);
        setTechnologyData(data.technology[
          technologyContent === "Spaceport"
              ? 1
              : technologyContent === "Space capsule"
              ? 2
              : 0
        ])
      });
  }, [destinationContent, crewContent, technologyContent]);
  return (
    <div className={`app ${appBackground}-bg`}>
      <a className="skip-to-content text-dark" href="#">
        Skip to content
      </a>

      <BrowserRouter>
        <Nav handleBackground={changeBackground} />
        <Routes>
          <Route path="/" exact element={<Home handleBackground={changeBackground} />} />
          <Route
            path="/destination"
            element={
              <Destination
                props={destinationData}
                destinationState={setDestinationContent}
              />
            }
          />
          <Route path="/crew" element={<Crew props={crewData} crewState={setCrewContent}/>} />
          <Route path="/technology" element={<Technology props={technologyData} technologyState={setTechnologyContent} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
