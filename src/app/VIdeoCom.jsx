"use client";
import ReactPlayer from "react-player";
import { useVideoStore } from "./Store";
const VideoCom = ({ video }) => {
  const { stopVideo, toggleStopVideo } = useVideoStore();
  console.log(stopVideo);
  return (
    <ReactPlayer
      light={`https://img.youtube.com/vi/${video}/maxresdefault.jpg`}
      className="detail_video"
      url={`https://www.youtube.com/embed/${video}`}
      playing={stopVideo}
      width="100%"
      height="100%"
      config={{
        youtube: {
          playerVars: { showinfo: 1 },
        },
      }}
    />
  );
};
export default VideoCom;
