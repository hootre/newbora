"use client";
import "./ssr.css";
import Mainvideo from "./Mainvideo";
import dynamic from "next/dynamic";

import { BiSolidArrowToTop } from "react-icons/bi";
import WorkList from "./WorkList";
import AboutCom from "./AboutCom";
import BottomCard from "./BottomCard";

const VideoCom = dynamic(() => import("./VIdeoCom"), { ssr: false });
const Home = () => {
  return (
    <>
      <Mainvideo />
      <AboutCom />
      <WorkList title={true} />
      <BottomCard />
      <div className="page-scroll PageTopBtn" data-href="#home">
        <div className="to-top-arrow show">
          <BiSolidArrowToTop className="icon" />
        </div>
      </div>
    </>
  );
};
export default Home;
