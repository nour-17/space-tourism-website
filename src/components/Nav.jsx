import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/shared/logo.svg";
export default function Nav(props) {
  const nav = document.getElementsByClassName("main-nav");
  const navBtn = document.getElementsByClassName("nav-toggle");

  function toggleNav() {
    nav[0].classList.toggle("nav-open");
    navBtn[0].classList.toggle("nav-open");
  }
  return (
    <nav
      className="primary-nav flex"
      style={{ justifyContent: "space-between" }}
    >
      <div className="nav-logo">
        <img src={navLogo} alt="nav logo" />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>

      <ul className="main-nav underline flex uppercase">
        <Link
          onClick={() => {
            toggleNav();
            props.handleBackground("home");
          }}
          className="active nav__link"
          to="/"
        >
          <li>
            <span>00</span> home
          </li>
        </Link>
        <Link
          onClick={() => {
            toggleNav();
            props.handleBackground("destination");
          }}
          className="nav__link"
          to="/destination"
        >
          <li>
            <span>01</span> destination
          </li>
        </Link>
        <Link
          onClick={() => {
            toggleNav();
            props.handleBackground("crew");
          }}
          className="nav__link"
          to="/crew"
        >
          <li>
            <span>02</span> crew
          </li>
        </Link>
        <Link
          onClick={() => {
            toggleNav();
            props.handleBackground("technology");
          }}
          className="nav__link"
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
