import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/shared/logo.svg";
export default function Nav() {
  const openNav = _ => {
    document.getElementsByClassName("main-nav")[0].classList.toggle("open-nav");
    document
      .getElementsByClassName("mobile-nav-toggle")[0]
      .classList.toggle("btnBg");
  };
  const closeNav = _ => {
    document.getElementsByClassName("main-nav")[0].classList.remove("open-nav");
  };
  return (
    <nav
      className="primary-nav flex"
      style={{ justifyContent: "space-between" }}
    >
      <div className="nav-logo">
        <img src={navLogo} alt="nav logo" />
      </div>
      {/* <div className="nav-line"></div> */}
      <button
        className="mobile-nav-toggle"
        onClick={openNav}
        aria-controls="primary-navigation"
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>

      <ul className="main-nav underline flex uppercase">
        <Link onClick={closeNav} className="active" to="/">
          <li>
            <span>00</span> home
          </li>
        </Link>
        <Link onClick={closeNav} to="/destination">
          <li>
            <span>01</span> destination
          </li>
        </Link>
        <Link onClick={closeNav} to="/crew">
          <li>
            <span>02</span> crew
          </li>
        </Link>
        <Link onClick={closeNav} to="/technology">
          <li>
            <span>03</span> technology
          </li>
        </Link>
      </ul>
    </nav>
  );
}
