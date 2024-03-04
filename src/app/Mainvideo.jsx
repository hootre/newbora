"use client";
import ReactPlayer from "react-player";
import { useState } from "react";
const Mainvideo = () => {
  const [ready, setReady] = useState(false);
  return (
    <ReactPlayer
      className={ready ? "ready" : "react-player"}
      url="mainvideo.mp4"
      playing
      loop
      muted
      onReady={() => setReady(true)}
      width="100%"
      height="100%"
    />
  );
};
export default Mainvideo;
