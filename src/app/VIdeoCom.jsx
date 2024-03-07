"use client";
import ReactPlayer from "react-player";
import { useVideoStore } from "./Store";
import { works } from "./fileArray";
const VideoCom = ({ video, videoId }) => {
  const { stopVideo } = useVideoStore();
  const { readyDetailVide, toggleReadyDetailVide } = useVideoStore();
  // let item = works.work_list[videoId].thumbnails[0];
  return (
    <ReactPlayer
      className="detail_video"
      url={`https://www.youtube.com/embed/${video}`}
      playing={stopVideo}
      width="100%"
      height="100%"
      style={{ padding: "0 0 30px 0" }}
      onReady={() => toggleReadyDetailVide(true)}
      controls={true}
    />
  );
};
export default VideoCom;
