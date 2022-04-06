import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/shared/logo.svg";
export default function Nav(props) {
  return (
    <nav className="flex" style={{ justifyContent: "space-between" }}>
      <div className="nav-logo">
        <img src={navLogo} alt="nav logo" />
      </div>
      <div className="nav-line"></div>
      <ul className="main-nav underline flex uppercase">
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
          <li>
            <span>00</span> home
          </li>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/destination"
        >
          <li>
            <span>01</span> destination
          </li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/crew">
          <li>
            <span>02</span> crew
          </li>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/technology"
        >
          <li>
            <span>03</span> technology
          </li>
        </Link>
      </ul>
    </nav>
  );
}
