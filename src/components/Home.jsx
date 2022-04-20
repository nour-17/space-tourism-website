import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Destination from "./Destination";

export default function Home(props) {
  const nav = document.getElementsByClassName("main-nav");
  const navBtn = document.getElementsByClassName("nav-toggle");

  function toggleNav() {
    nav[0].classList.toggle("nav-open");
    navBtn[0].classList.toggle("nav-open");
  }
  return (
    <div className="home home-end">
      <div className="home-description">
        <h1 className="uppercase letter-spacing-2">
          So, you want to travel to
          <span className="fs-8 ff-secondary text-white large-home-text">
            Space
          </span>
        </h1>
        <p className="fs-3 ff-main">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="home-btn">
        {/* <Route
            path="/destination"
            element={
              <Destination />
            }
          />    */}
        <Link
          onClick={() => {
            toggleNav();
            props.handleBackground("destination");
          }}
          className="main-btn uppercase fw-regular text-dark bg-white ff-secondary"
          to="/destination"
        >
          explore
        </Link>
        {/* <a
          href="#"
          className="main-btn uppercase fw-regular text-dark bg-white ff-secondary"
        >
          
        </a> */}
      </div>
    </div>
  );
}
