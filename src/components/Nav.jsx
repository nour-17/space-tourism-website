import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/Group 2.svg";
export default function Nav() {
  return (
    <nav className="flex">
      <img src={navLogo} alt="nav logo" />
      <div className="nav-line"></div>
      <div className="nav-list main-nav underline flex">
        <a href="">
          <span>00</span> home
        </a>
        <a href="">
          <span>01</span> destination
        </a>
        <a href="">
          <span>02</span> crew
        </a>
        <a href="">
          <span>03</span> technology
        </a>
      </div>
    </nav>
  );
}
