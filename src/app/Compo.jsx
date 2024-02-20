"use client";
import $ from "jquery";
import "jquery.easing";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  MainContainer,
  NavContainer,
  VerticalContainer,
  MainVideoContainer,
  PageTopBtn,
  WorksInfoContainer,
  WorksContainer,
  AboutContainer,
  ContactContainer,
} from "./style";
import logo from "/public/images/logo.png";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidArrowToTop } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { aboutText, mainTitle, navs, works } from "./fileArray";
import Vimeo from "@u-wave/react-vimeo";
import ScrollSpy from "react-ui-scrollspy";

const Compo = () => {
  function showPopup(e) {
    e.preventDefault();
    $("html").css({ overflow: "hidden" });
    $(".vimeo-shadowbox").removeClass("vimeo-shadowbox--hidden");
  }
  function hidePopup() {
    $("html").css({ overflow: "auto" });
    $(".vimeo-shadowbox").addClass("vimeo-shadowbox--hidden");
  }

  const [isNav, setIsNav] = useState(false);
  const toggleNavbar = () => {
    setIsNav((pre) => !pre);
  };
  useEffect(() => {
    // 1. preloader
    $("#preloader").fadeOut(600);
    $(".preloader-bg").delay(400).fadeOut(600);
    // 2. fadeIn.element
    setTimeout(function () {
      $(".fadeIn-element")
        .delay(600)
        .css({
          display: "none",
        })
        .fadeIn(800);
    }, 0);

    // 3. navigation
    // 3.1. page scroll
    $(".page-scroll").on("click", function (e) {
      var $anchor = $(this);
      if ($anchor.attr("href") === "#home") {
        $("html, body").stop().animate(
          {
            scrollTop: 0,
          },
          1500,
          "easeInOutExpo"
        );
      } else {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - 55,
            },
            1500,
            "easeInOutExpo"
          );
      }

      e.preventDefault();
    });
    // 3.2. highlight navigation
    // $("body").scrollspy({
    //   target: ".navbar",
    //   offset: 65,
    // });
    $(window).on("scroll", function () {
      // 3.5. collapse navigation
      if ($(".navbar").offset().top > 50) {
        $(".navbar-bg-switch").addClass("main-navigation-bg");
      } else {
        $(".navbar-bg-switch").removeClass("main-navigation-bg");
      }

      // 4. to top arrow animation
      if ($(this).scrollTop() > 400) {
        $(".to-top-arrow").addClass("show");
      } else {
        $(".to-top-arrow").removeClass("show");
      }

      // 5. home fadeOut animation
      $(
        "h1.home-page-title, h2.home-page-title, .the-button, .the-button-light, .scroll-line, .more-wraper-center.more-wraper-center-home"
      ).css("opacity", 1 - $(window).scrollTop() / 500);
    });

    return () => {
      $(".page-scroll").off("click");
      $(window).off("scroll");
      $(window).off("load");
    };
  });
  return (
    <MainContainer>
      <NavContainer className="navbar navbar-fixed-top navbar-bg-switch">
        <div className="container">
          <div className="navbar-header fadeIn-element">
            <div className="logo">
              <a className="navbar-brand logo" href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="main-navigation fadeIn-element">
            <div className="navbar-header">
              <button
                aria-expanded={isNav}
                className="navbar-toggle collapsed"
                data-target="#navbar-collapse"
                data-toggle="collapse"
                type="button"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div
              className={
                isNav
                  ? "navbar-collapse collapse in active"
                  : "navbar-collapse collapse"
              }
              id="navbar-collapse"
              aria-expanded={isNav}
            >
              <ul className="nav navbar-nav navbar-right">
                {navs.map((item, idx) => (
                  <li key={idx}>
                    <a
                      className={
                        item.acitve ? "page-scroll active" : "page-scroll"
                      }
                      href={`#${item.title}`}
                      data-to-scrollspy-id={item.title}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </NavContainer>
      <VerticalContainer className="vertical-lines-wrapper">
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
      </VerticalContainer>

      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>
      <ScrollSpy>
        <MainVideoContainer id="home" className="upper-page">
          <div className="hero-fullscreen overlay overlay-top-bottom-dark-15">
            <div className="hero-fullscreen-FIX overlay overlay-dark-70">
              <div className="hero-bg bg-img-SINGLE"></div>
            </div>
          </div>

          <div className="center-container">
            <div className="center-block">
              <h2 className="home-page-title fadeIn-element">
                {mainTitle.subTitle}
              </h2>

              <div className="inner-divider-half"></div>

              <h1 className="home-page-title fadeIn-element">
                {mainTitle.title_1}
                <br />
                {mainTitle.title_2}
              </h1>

              <div className="inner-divider-half"></div>

              <div className="more-wraper-center more-wraper-center-home fadeIn-element">
                <a className="page-scroll" href="#demos">
                  <div className="more-button-bg-center more-button-circle"></div>
                  <div className="more-button-txt-center">
                    <span>View</span>
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
        </MainVideoContainer>

        <AboutContainer id="about" className="section position-relative pb-0">
          <div className="r-container">
            <div className="image-overlay-3"></div>
            <div className="position-relative z_box">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mb-3">
                  <div className="d-flex flex-column justify-content-center gap-3 h-100">
                    <div className="divider mb-3">
                      <span className="accent-color fs-5 me-3">
                        {aboutText.top_title}
                      </span>
                    </div>
                    <h4 className="text-title text-white fw-bold font-1 lh-1">
                      {aboutText.title}
                    </h4>
                    <p className="text-white f-18 text-font my-4">
                      {aboutText.subscription}
                    </p>
                    <div className="my-4">
                      <Image
                        src={aboutText.image}
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="d-flex flex-row gap-3 ">
                      {aboutText.iconList.map((item, idx) => (
                        <a
                          key={idx}
                          type="button"
                          href=""
                          className="social-item p-2 d-flex align-items-center justify-content-center"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col about-img">
                  <Image
                    src={aboutText.top_image}
                    alt="logo"
                    className="img-fluid"
                  />
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
                    <div className="font-2 fw-bold">
                      <h3 className="text-white"> {item.count}</h3>
                      <h6 className="text-white"> {item.text}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AboutContainer>

        <WorksContainer id="demos">
          <WorksInfoContainer>
            <div className="container sections">
              <div className="inner-divider"></div>

              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Stylex</h2>

                  <div className="inner-divider-ultra-half"></div>

                  <h2 className="section-subheading">
                    <span>A fully responsive WordPress</span>
                  </h2>
                </div>
              </div>

              <div className="inner-divider-half"></div>

              <div className="row section-intro">
                <div className="col-lg-12">
                  <div className="intro-txt">
                    <p>
                      Stylex is a fully responsive theme with a modern design
                      suitable for all creative fields. The theme is featuring a
                      powerful fullscreen background video and imagery making it
                      a perfect choice for photographers, artists and designers
                      who want to showcase their work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="intro-years">
                    <div className="inner-divider"></div>

                    <div className="the-line"></div>

                    <div className="inner-divider-half"></div>

                    <h2>Ready</h2>

                    <div className="inner-divider-half"></div>

                    <h3 className="facts-counter-number">12</h3>

                    <div className="inner-divider-half"></div>

                    <h4>Demos</h4>
                  </div>

                  <div className="inner-divider-half"></div>

                  <div className="the-line"></div>
                </div>
              </div>
            </div>
          </WorksInfoContainer>
          <div className="container-fluid sections">
            <div className="inner-divider"></div>

            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading section-heading-small">
                  <span>{works.title_point}</span> {works.title}
                </h2>

                <div className="inner-divider-ultra-half"></div>

                <h2 className="section-subheading">
                  <span>{works.subscription}</span>
                </h2>
              </div>
            </div>

            <div className="inner-divider-half"></div>

            <div className="row">
              <div className="move-up section-demos">
                {works.work_list.map((item) => (
                  <div key={item.id} className="col-sm-12 col-md-12 col-lg-4">
                    {/* view vimeo video  list*/}
                    <div
                      className="vimeo-shadowbox vimeo-shadowbox--hidden"
                      onClick={hidePopup}
                    >
                      <div className="bg_line"></div>
                      <div className="vimeo-shadowbox__video-wrapper">
                        <div className="contentBox_1">
                          {item.image}
                          <div className="contents">
                            <h2>이것은 이러한 영상입니다 참고하세요</h2>
                            <div>
                              이것을 이러한 영상으로 이렇게 만들었습니다
                              제작자는 누구이고 누구고 누고고고고고ㅗ입니다
                              이렇게 만들기 아이고 힘들다
                            </div>
                          </div>
                        </div>

                        <div className="contentBox_2">
                          {item.image}
                          <div className="contents">
                            <h2>이것은 이러한 영상입니다 참고하세요</h2>
                            <div>
                              이것을 이러한 영상으로 이렇게 만들었습니다
                              제작자는 누구이고 누구고 누고고고고고ㅗ입니다
                              이렇게 만들기 아이고 힘들다
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="vimeo-shadowbox__video">
                            <Vimeo video={item.href} />
                          </div>
                          <div
                            className="vimeo-shadowbox__close-button"
                            onClick={hidePopup}
                          >
                            <IoClose />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-works">
                      <div className="hover-effect"></div>
                      <div className="icon-works">
                        <div className="more-wraper-center more-wraper-center-demos">
                          <a className="open-popup-link" onClick={showPopup}>
                            <div className="more-button-bg-center more-button-circle"></div>
                            <div className="more-button-txt-center">
                              <span>View</span>
                            </div>
                          </a>
                        </div>
                      </div>
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

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=63"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Parallax Slider</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=35"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Single Image · Film Grain Effect</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=65"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Single Image</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=37"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Video · Film Grain Effect</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=67"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Video</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=39"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Parallax Slider · Vertical · Film Grain Effect</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=69"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Parallax Slider · Vertical</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=41"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Hero Slideshow · Film Grain Effect</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=71"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Hero Slideshow</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=43"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="preview-corner">
                      <span className="preview-corner-txt">New</span>
                    </span>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Filmstrip Carousel Slider · Film Grain Effect</h2>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="image-works">
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <div className="more-wraper-center more-wraper-center-demos">
                        <a
                          href="https://shtheme.com/demosd/stylex/?page_id=73"
                          target="_top"
                        >
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <span>View</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="preview-corner">
                      <span className="preview-corner-txt">New</span>
                    </span>
                    <img
                      alt="Image Preview"
                      src="https://shtheme.com/preview/stylex/intro-images/intro/parallax-slider/2.jpg"
                    />
                    <div className="preview-img-info">
                      <h2>Filmstrip Carousel Slider</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WorksContainer>
        <ContactContainer className="section" id="contact">
          <div className="r-container">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mb-3">
                <div className="divider mb-4">
                  <span className="accent-color fs-5 me-3">GET IN TOUCH</span>
                </div>
                <h4 className="text-title text-white fw-bold font-1 lh-1 mb-5">
                  Contact Us.
                </h4>
                <p className="text-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <div className="row row-cols-1 row-cols-lg-2 mt-5">
                  <div className="col mb-3">
                    <div className="d-flex flex-row align-items-center gap-3">
                      <BsPeopleFill className="icon" />
                      <div className="d-flex flex-column">
                        <h6 className="text-white font-1">Phone</h6>
                        <span className="text-gray">345 563 23</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="d-flex flex-row align-items-center gap-3">
                      <BsPeopleFill className="icon" />
                      <div className="d-flex flex-column">
                        <h6 className="text-white font-1">Site</h6>
                        <span className="text-gray">www.awesomesite.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="d-flex flex-row align-items-center gap-3">
                      <BsPeopleFill className="icon" />
                      <div className="d-flex flex-column">
                        <h6 className="text-white font-1">Email</h6>
                        <span className="text-gray">hello@awesomesite.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="d-flex flex-row align-items-center gap-3">
                      <BsPeopleFill className="icon" />
                      <div className="d-flex flex-column">
                        <h6 className="text-white font-1">Address</h6>
                        <span className="text-gray">
                          99 Roving St., Big City, PKU 23456
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="h-100 d-flex flex-column">
                  <div
                    className="success_msg toast align-items-center w-100 shadow-none mb-3 bg-transparent border border-success rounded-0 my-4"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="d-flex p-2">
                      <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                        <i className="fa-solid fa-check f-36 text-success"></i>
                        Your Message Successfully Send.
                      </div>
                      <button
                        type="button"
                        className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 bg-transparent my-4 border rounded-0"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="d-flex p-2">
                      <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                        <i className="fa-solid fa-triangle-exclamation f-36 text-danger"></i>
                        Something Wrong ! Send Form Failed.
                      </div>
                      <button
                        type="button"
                        className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                  <form
                    action=""
                    className="d-flex flex-column w-100 needs-validation mb-3 form"
                    noValidate=""
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control p-3"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required=""
                      />
                      <div className="invalid-feedback">
                        The field is required.
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control p-3"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required=""
                      />
                      <div className="invalid-feedback">
                        The field is required.
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn submit_form font-1 py-3"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <iframe
              loading="lazy"
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.0694715065006!2d127.19015707645416!3d37.576981772035865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb1855ce835e3%3A0x244a55c410a119d2!2z66-47IKs6rCV67OAIOyKpOy5tOydtO2PtOumrOyKpA!5e0!3m2!1sko!2skr!4v1708070377252!5m2!1sko!2skr"
              title="하남 미사 스카이폴리스"
              aria-label="London Eye, London, United Kingdom"
            ></iframe>
          </div>
          <div className="r-container footer">
            <div className="flex-box">
              <h4 className="text-white font-1 fw-bold fs-1">
                Take your moment with Codagraph
              </h4>
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="" type="button" className="btn rounded-0">
                GET STARTED
              </a>
            </div>
          </div>
        </ContactContainer>
      </ScrollSpy>
      <PageTopBtn className="page-scroll" href="#home">
        <div className="to-top-arrow show">
          <BiSolidArrowToTop className="icon" />
        </div>
      </PageTopBtn>
    </MainContainer>
  );
};
export default Compo;
