"use client";
import ReactPlayer from "react-player";
import { useVideoStore } from "./Store";
const VideoCom = ({ video, videoId }) => {
  const { readyDetailVide, toggleReadyDetailVide } = useVideoStore();
  // let item = works.work_list[videoId].thumbnails[0];
  return (
    <ReactPlayer
      className="detail_video"
      url={`https://www.youtube.com/embed/${video}`}
      width="100%"
      height="100%"
      onReady={() => toggleReadyDetailVide(true)}
      controls={true}
    />
  );
};
export default VideoCom;
