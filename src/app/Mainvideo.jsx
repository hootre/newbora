"use client";
import ReactPlayer from "react-player";
import { useVideoStore } from "./Store";
import { mainTitle } from "./fileArray";
import VideoModal from "./VideoModal";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
const Mainvideo = forwardRef((props, ref) => {
  const { readyVideo, toggleReadyVideo } = useVideoStore();
  const [isOpen, setOpen] = useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  return (
    <motion.section
      id="home"
      className="upper-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <VideoModal isOpen={isOpen} close={handleChange} />
      <div className="hero-fullscreen overlay overlay-top-bottom-dark-15">
        <div className="hero-fullscreen-FIX overlay overlay-dark-70">
          <div className="main_video">
            <ReactPlayer
              className={readyVideo ? "ready" : "react-player"}
              url={`https://youtu.be/shyZyQY6lNo`}
              playing
              loop
              muted
              onReady={() => toggleReadyVideo(true)}
            />
          </div>
        </div>
      </div>

      <div className="center-container">
        <div className="center-block">
          <h1 className="home-page-title ">
            {mainTitle.title_1}
            <br />
            {mainTitle.title_2}
          </h1>
          {mainTitle.subTitle}
          <div className="more-wraper-center more-wraper-center-home">
            <a className="page-scroll enter_btn" onClick={handleChange}>
              <span className="screen-reader-text">Play Video</span>
              <span className="play">
                <span className="inner-wrap inner">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="600px"
                    height="800px"
                    x="0px"
                    y="0px"
                    viewBox="0 0 600 800"
                    enableBackground="new 0 0 600 800"
                    xmlSpace="preserve"
                  >
                    <path fill="#fff" d="M0-1.79v800L600,395L0-1.79z"></path>{" "}
                  </svg>
                </span>
              </span>
              <span className="link-text">
                <p>Enter 2023 showreel</p>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-wrapper">
          <div className="scroll-line"></div>
        </div>
      </div>
    </motion.section>
  );
});
Mainvideo.displayName = "Mainvideo";
export default Mainvideo;
