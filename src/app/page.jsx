import "./ssr.css";
import Mainvideo from "./Mainvideo";
import dynamic from "next/dynamic";

import { BiSolidArrowToTop } from "react-icons/bi";
import { aboutText } from "./fileArray";
import "./style.css";
import Contact from "./Contact";
import WorkList from "./WorkList";
import Link from "next/link";

const VideoCom = dynamic(() => import("./VIdeoCom"), { ssr: false });
const Home = async () => {
  return (
    <>
      <Mainvideo />

      <section
        id="about"
        className="section position-relative pb-0 AboutContainer"
      >
        <div className="r-container">
          <div className="image-overlay-3"></div>
          <div className="position-relative z_box">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mb-3">
                <div className="about_box d-flex flex-row justify-content-center gap-3 h-100">
                  <div className="about_info">
                    <div className="about_title">
                      <div className="divider ">
                        <span className="accent-color fs-5 me-3">
                          {aboutText.top_title}
                        </span>
                      </div>
                      <h4 className="text-title text-white fw-bold font-1 lh-1">
                        {aboutText.title}
                      </h4>
                    </div>
                    {aboutText.subscription}
                    <div className="d-flex flex-row gap-3 about_icon">
                      {aboutText.iconList.map((item, idx) => (
                        <Link
                          key={idx}
                          type="button"
                          href={item.href}
                          target="_blank"
                          className="social-item p-2 d-flex align-items-center justify-content-center"
                        >
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="col about-img">{aboutText.image}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="r-container icons_box">
          <div className="row row-cols-1 row-cols-lg-4 py-3 position-relative w-100 z_box2">
            {aboutText.aboutFooter.map((item, idx) => (
              <div className="col mb-3" key={idx}>
                <div className="d-flex flex-column justify-content-center text-center align-items-center gap-3">
                  {item.icon}
                  <div className="about_iconss font-2 fw-bold">
                    <h3 className="text-white"> {item.count}</h3>
                    <h6 className="text-white"> {item.text}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
