"use client";
import ReactPlayer from "react-player";
const Mainvideo = () => {
  return (
    <ReactPlayer
      className="react-player"
      url="mainvideo.mp4"
      playing
      muted
      width="100%"
      height="100%"
    />
  );
};
export default Mainvideo;
