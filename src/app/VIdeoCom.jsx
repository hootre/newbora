"use client";
import ReactPlayer from "react-player";
import { useVideoStore } from "./Store";
const VideoCom = ({ video }) => {
  const { stopVideo, toggleStopVideo } = useVideoStore();
  return (
    <ReactPlayer
      light={`https://img.youtube.com/vi/${video}/maxresdefault.jpg`}
      className="detail_video"
      url={`https://www.youtube.com/embed/${video}`}
      playing={stopVideo}
      width="80%"
      height="100%"
      style={{ padding: "0 0 30px 0" }}
      controls={true}
    />
  );
};
export default VideoCom;
