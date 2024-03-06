"use client";
import "./ssr.css";
import Mainvideo from "./Mainvideo";
import dynamic from "next/dynamic";

import { BiSolidArrowToTop } from "react-icons/bi";
import WorkList from "./WorkList";
import Link from "next/link";
import NavCom from "./NavCom";
import AboutCom from "./AboutCom";
import { useRef } from "react";

const VideoCom = dynamic(() => import("./VIdeoCom"), { ssr: false });
const Home = () => {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  return (
    <>
      <Mainvideo />
      <AboutCom />
      <WorkList title={true} />

      <Link className="page-scroll PageTopBtn" href="/#home">
        <div className="to-top-arrow show">
          <BiSolidArrowToTop className="icon" />
        </div>
      </Link>
    </>
  );
};
export default Home;
