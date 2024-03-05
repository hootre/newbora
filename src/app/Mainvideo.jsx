"use client";
import ReactPlayer from "react-player";
import { useVideoStore } from "./Store";
import { IoPlayOutline } from "react-icons/io5";
import Link from "next/link";
import { mainTitle } from "./fileArray";
import VideoModal from "./VideoModal";
import { useState } from "react";
import { motion } from "framer-motion";
const Mainvideo = () => {
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
              url={`https://www.youtube.com/embed/nMK6b4CNFl8`}
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
          <h2 className="home-page-title ">{mainTitle.subTitle}</h2>

          <div className="inner-divider-half"></div>

          <h1 className="home-page-title ">
            {mainTitle.title_1}
            <br />
            {mainTitle.title_2}
          </h1>

          <div className="inner-divider-half"></div>

          <div className="more-wraper-center more-wraper-center-home">
            <a className="page-scroll " onClick={handleChange}>
              <div className="more-button-bg-center more-button-circle"></div>
              <div className="more-button-txt-center ">
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
    </motion.section>
  );
};
export default Mainvideo;
