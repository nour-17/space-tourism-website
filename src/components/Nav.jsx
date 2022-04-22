import React from "react";
import { Link } from "react-router-dom";
export default function Nav(props) {
  const nav = document.getElementsByClassName("main-nav");
  const navBtn = document.getElementsByClassName("nav-toggle");
  const links = document.getElementsByClassName("nav__link");
  function handletabs(p) {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      links[i].setAttribute("aria-selected", "false");
    }
    let num = p === "home" ? 0 : p === "destination" ? 1 : p === "crew" ? 2 : 3;
    links[num].classList.add("active");
  }

  React.useEffect(() => {
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute("aria-selected", false);
    }
    const selectedTab = window.localStorage.getItem("background");
    let parsed = JSON.parse(selectedTab);
    let num =
      parsed === "home"
        ? 0
        : parsed === "destination"
        ? 1
        : parsed === "crew"
        ? 2
        : 3;
    console.log(num, selectedTab);
    links[num].setAttribute("aria-selected", true);
  }, []);

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
        <img src={"images/shared/logo.svg"} alt="nav logo" />
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
          aria-selected="true"
          onClick={() => {
            handletabs("home");
            toggleNav();
            props.handleBackground("home");
          }}
          className="nav__link"
          to="/"
        >
          <li>
            <span>00</span> home
          </li>
        </Link>
        <Link
          aria-selected="false"
          onClick={() => {
            handletabs("destination");
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
          aria-selected="false"
          onClick={() => {
            handletabs("crew");
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
          aria-selected="false"
          onClick={() => {
            handletabs("technology");
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
