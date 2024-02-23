"use client";

import NavCom from "./NavCom";
import { IoPlayOutline } from "react-icons/io5";
import "./ssr.css";
import { mainTitle } from "./fileArray";
import Mainvideo from "./Mainvideo";
import dynamic from "next/dynamic";

const Compo = dynamic(() => import("./Compo"), { ssr: false });
const Home = () => {
  return (
    <main className="mainContainer">
      <NavCom />
      <div className="vertical-lines-wrapper">
        <div className="vertical-lines">
          <div className="vertical-lines-wrapper">
            <div className="vertical-effect"></div>
            <div className="vertical-effect"></div>
            <div className="vertical-effect"></div>
          </div>
        </div>
        <div className="vertical-effect"></div>
        <div className="vertical-effect"></div>
        <div className="vertical-effect"></div>
      </div>

      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>
      <section id="home" className="upper-page">
        <div className="hero-fullscreen overlay overlay-top-bottom-dark-15">
          <div className="hero-fullscreen-FIX overlay overlay-dark-70">
            <div className="main_video">
              <Mainvideo />
            </div>
          </div>
        </div>

        <div className="center-container">
          <div className="center-block">
            <h2 className="home-page-title ">{mainTitle.subTitle}</h2>

            <div className="inner-divider-half"></div>

            <h1 className="home-page-title ">
              {mainTitle.title_1}
              <br />
              {mainTitle.title_2}
            </h1>

            <div className="inner-divider-half"></div>

            <div className="more-wraper-center more-wraper-center-home ">
              <a className="page-scroll" href="#demos">
                <div className="more-button-bg-center more-button-circle"></div>
                <div className="more-button-txt-center">
                  <IoPlayOutline className="play_icon" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-wrapper">
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>
      <Compo />
    </main>
  );
};
export default Home;
