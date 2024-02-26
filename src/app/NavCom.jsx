"use client";
import "./style.css";
import Image from "next/image";

import logo from "/public/images/logo.png";
import { navs } from "./fileArray";
import { useState } from "react";
const NavCom = () => {
  const [isNav, setIsNav] = useState(false);
  const toggleNavbar = () => {
    setIsNav((pre) => !pre);
  };
  return (
    <section className="navbar navbar-fixed-top navbar-bg-switch NavContainer">
      <div className="container">
        <div className="navbar-header ">
          <div className="logo">
            <a className="navbar-brand logo" href="#">
              <Image src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="main-navigation ">
          <div className="navbar-header">
            <button
              aria-expanded={isNav}
              className="navbar-toggle collapsed"
              data-target="#navbar-collapse"
              data-toggle="collapse"
              type="button"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div
            className={
              isNav
                ? "navbar-collapse collapse in active"
                : "navbar-collapse collapse"
            }
            id="navbar-collapse"
            aria-expanded={isNav}
          >
            <ul className="nav navbar-nav navbar-right">
              {navs.map((item, idx) => (
                <li key={idx}>
                  <a
                    className={
                      item.acitve ? "page-scroll active" : "page-scroll"
                    }
                    href={`#${item.title}`}
                    data-to-scrollspy-id={item.title}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NavCom;
