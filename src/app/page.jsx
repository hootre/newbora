"use server";

import NavCom from "./NavCom";
import { IoPlayOutline } from "react-icons/io5";
import "./ssr.css";
import { mainTitle } from "./fileArray";
import Mainvideo from "./Mainvideo";
import dynamic from "next/dynamic";
import Image from "next/image";

import { BiSolidArrowToTop } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { aboutText, works } from "./fileArray";
import "./style.css";
import ImgCom from "./ImgCom";
import Contact from "./Contact";

const VideoCom = dynamic(() => import("./VIdeoCom"), { ssr: false });
const Home = async () => {
  return (
    <main className="mainContainer">
      <NavCom />
      <div className="vertical-lines-wrapper">
        <div className="vertical-lines">
          <div className="vertical-lines-wrapper">
            <div className="vertical-effect"></div>
            <div className="vertical-effect"></div>
            <div className="vertical-effect"></div>
          </div>
        </div>
        <div className="vertical-effect"></div>
        <div className="vertical-effect"></div>
        <div className="vertical-effect"></div>
      </div>

      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>
      <section id="home" className="upper-page">
        <div className="hero-fullscreen overlay overlay-top-bottom-dark-15">
          <div className="hero-fullscreen-FIX overlay overlay-dark-70">
            <div className="main_video">
              <Mainvideo />
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
              <a
                className="page-scroll open-popup-link"
                data-item={16}
                href="#demos"
              >
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
      </section>
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
                        <a
                          key={idx}
                          type="button"
                          href={item.href}
                          target="_blank"
                          className="social-item p-2 d-flex align-items-center justify-content-center"
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col about-img">{aboutText.image}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="r-container">
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

      <section id="demos" className="WorksContainer">
        <div className="container-fluid sections">
          <div className="inner-divider"></div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading section-heading-small">
                <span>{works.title_point}</span> {works.title}
              </h2>

              <h2 className="section-subheading">
                <span>{works.subscription}</span>
              </h2>
            </div>
          </div>

          <div className="WorksInfoContainer">
            <div className="container sections">
              <div className="row">
                <div className="col-lg-12">
                  <div className="intro-years">
                    <div className="inner-divider-half"></div>
                    <h2>Ready</h2>

                    <div className="inner-divider-half"></div>

                    <h3 className="facts-counter-number">
                      {works.work_list.length}
                    </h3>

                    <div className="inner-divider-half"></div>

                    <h4>Demos</h4>
                  </div>

                  <div className="the-line"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="inner-divider-half"></div>

          <div className="row">
            <div className="move-up section-demos">
              {works.work_list.map((item) => (
                <div key={item.id} className="col-sm-12 col-md-12 col-lg-4">
                  {/* view vimeo video  list*/}
                  <div
                    id={`vimeo_${item.id}`}
                    className="vimeo-shadowbox vimeo-shadowbox--hidden"
                  >
                    <div
                      className="bg_back hide-popup"
                      data-item={item.id}
                    ></div>
                    <div className="bg_line"></div>
                    <div className="vimeo-shadowbox__video-wrapper">
                      <div>
                        <ImgCom item={item} />
                        <div className="vimeo-shadowbox__video">
                          <div className="carousel">
                            <input
                              type="radio"
                              name="slides"
                              defaultChecked="checked"
                              className="slide_1 slide_active"
                            />
                            <input
                              type="radio"
                              name="slides"
                              className="slide_2"
                            />
                            <input
                              type="radio"
                              name="slides"
                              className="slide_3"
                            />
                            <input
                              type="radio"
                              name="slides"
                              className="slide_4"
                            />
                            <input
                              type="radio"
                              name="slides"
                              className="slide_5"
                            />
                            <ul className="carousel__slides">
                              {item.href.map((video, idx) => (
                                <li className="carousel__slide" key={idx}>
                                  <figure>
                                    <div>
                                      <VideoCom
                                        id={`video_${idx + 1}`}
                                        key={idx}
                                        video={video}
                                      />
                                    </div>
                                  </figure>
                                </li>
                              ))}
                            </ul>

                            <ul className="carousel__thumbnails">
                              {item.href.map((videoId, idx) => (
                                <li key={idx}>
                                  <label
                                    data-video={`video_${idx + 1}`}
                                    data-slide={`slide_${idx + 1}`}
                                    className="label"
                                  >
                                    <Image
                                      width={500}
                                      height={300}
                                      style={{ width: "100%", height: "auto" }}
                                      src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                                      alt="image"
                                    />
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="vimeo-shadowbox__close-button hide-popup"
                        data-item={item.id}
                      >
                        <IoClose />
                      </div>
                    </div>
                  </div>
                  <div className="image-works">
                    <a className="open-popup-link " data-item={item.id}>
                      <div className="hover-effect"></div>
                      <div className="icon-works">
                        <div className="more-wraper-center more-wraper-center-demos">
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <IoPlayOutline className="play_icon" />
                          </div>
                        </div>
                      </div>
                    </a>
                    {item.new ? (
                      <span className="preview-corner">
                        <span className="preview-corner-txt">New</span>
                      </span>
                    ) : (
                      ""
                    )}
                    {item.image}
                    <div className="preview-img-info">
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <div className="page-scroll PageTopBtn" href="#home">
        <div className="to-top-arrow show">
          <BiSolidArrowToTop className="icon" />
        </div>
      </div>
    </main>
  );
};
export default Home;
