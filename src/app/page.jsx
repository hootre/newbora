"use client";
import $ from "jquery";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  MainContainer,
  NavContainer,
  VerticalContainer,
  MainVideoContainer,
  PageTopBtn,
} from "./style";
import logo from "/public/images/logo.png";
export default function Home() {
  const [isNav, setIsNav] = useState(false);
  const toggleNavbar = () => {
    setIsNav((pre) => !pre);
  };
  useEffect(() => {
    $(window).on("load", function () {
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
    });

    // 3. navigation
    // 3.1. page scroll
    $(".page-scroll").on("click", function (e) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 55,
          },
          1500,
          "easeInOutExpo"
        );
      e.preventDefault();
    });
    // 3.2. highlight navigation
    // $("body").scrollspy({
    //   target: ".navbar",
    //   offset: 65,
    // });
    $(window).on("scroll", function () {
      // 3.5. collapse navigation
      console.log($(".navbar").offset().top);
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
  });
  return (
    <MainContainer>
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>
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
                <li className="active">
                  <a className="page-scroll active" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#demos">
                    Demos
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
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
      <MainVideoContainer className="upper-page" id="home">
        <div className="hero-fullscreen overlay overlay-top-bottom-dark-15">
          <div className="hero-fullscreen-FIX overlay overlay-dark-70">
            <div className="hero-bg bg-img-SINGLE"></div>
          </div>
        </div>

        <div className="center-container">
          <div className="center-block">
            <h2 className="home-page-title fadeIn-element">by BORA</h2>

            <div className="inner-divider-half"></div>

            <h1 className="home-page-title fadeIn-element">
              2024
              <br />
              SHOWREEL
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
      <section id="demos">
        <div className="container-fluid sections">
          <div className="inner-divider"></div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading section-heading-small">
                <span>Home</span> Pages
              </h2>

              <div className="inner-divider-ultra-half"></div>

              <h2 className="section-subheading">
                <span>By all means, choose your style</span>
              </h2>
            </div>
          </div>

          <div className="inner-divider-half"></div>

          <div className="row">
            <div className="move-up section-demos">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/parallax-slider/1.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>Parallax Slider · Film Grain Effect</h2>
                  </div>
                </div>
              </div>

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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/parallax-slider/2.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/single-image/1.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/single-image/2.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/HTML5-video/1.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/HTML5-video/2.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/parallax-slider/3.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/parallax-slider/4.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/hero-slideshow/1.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/hero-slideshow/2.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span className="preview-corner">
                    <span className="preview-corner-txt">New</span>
                  </span>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/filmstrip-carousel-slider/1.jpg"
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
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span className="preview-corner">
                    <span className="preview-corner-txt">New</span>
                  </span>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/filmstrip-carousel-slider/2.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>Filmstrip Carousel Slider</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inner-divider"></div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading section-heading-small">
                <span>Inner</span> Pages
              </h2>

              <div className="inner-divider-ultra-half"></div>

              <h2 className="section-subheading">
                <span>Go unique</span>
              </h2>
            </div>
          </div>

          <div className="inner-divider-half"></div>

          <div className="row">
            <div className="move-up section-demos">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/?page_id=45"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/pages/1.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>About Page</h2>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/?page_id=47"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/pages/2.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>Works Page</h2>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/?project=aesthetic-is-a-decision"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/pages/3.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>Works Project Page</h2>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/?page_id=49"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/pages/4.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>Contact Page</h2>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/?page_id=31"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/pages/5.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>News Page</h2>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="image-works">
                  <div className="hover-effect"></div>
                  <div className="icon-works">
                    <div className="more-wraper-center more-wraper-center-demos">
                      <a
                        href="https://shtheme.com/demosd/stylex/?p=7"
                        target="_top"
                      >
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <span>Live Preview</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    alt="Image Preview"
                    src="intro-images/intro/pages/6.jpg"
                  />
                  <div className="preview-img-info">
                    <h2>News Details Page</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inner-divider-works"></div>
        </div>
      </section>
      <PageTopBtn className="page-scroll" href="#home">
        <div className="to-top-arrow show">
          <span className="ion-ios-arrow-up"></span>
        </div>
      </PageTopBtn>
    </MainContainer>
  );
}
