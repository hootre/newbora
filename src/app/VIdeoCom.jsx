"use client";
import $ from "jquery";
import "jquery.easing";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const VideoCom = ({ video }) => {
  const [stopVideo, setStopVideo] = useState(true);
  function showPopup(id) {
    $("html").css({ overflow: "hidden", marginRight: " 17px" });
    $(".navbar, .vimeo-shadowbox, .vertical-lines-wrapper").css({
      paddingRight: " 17px",
    });

    $(`#vimeo_${id}`).removeClass("vimeo-shadowbox--hidden");
  }
  function hidePopup(id) {
    $("html").css({ overflow: "auto", marginRight: " 0px" });
    $(".navbar, .vimeo-shadowbox, .vertical-lines-wrapper ").css({
      paddingRight: " 0px",
    });
    $(`#vimeo_${id}`).addClass("vimeo-shadowbox--hidden");
    $(".slide_active").delay(1000).removeClass("slide_active");
    $(".vimeo-shadowbox").scrollTop(0);
  }

  useEffect(() => {
    // label input
    $(".label").on("click", function (e) {
      e.stopPropagation();
      let id = $(this).data("slide");

      $(".slide_active").removeClass("slide_active");
      setStopVideo(() => {
        return false;
      });
      $(`.${id}`).addClass("slide_active");
    });
    // popup event
    $(".open-popup-link").on("click", function (e) {
      e.stopPropagation();
      let id = $(this).data("item");
      showPopup(id);
    });
    $(".hide-popup").on("click", function (e) {
      e.stopPropagation();
      let id = $(this).data("item");
      setStopVideo(() => {
        return false;
      });
      hidePopup(id);
    });
    console.log(stopVideo);
  }, [stopVideo]);
  useEffect(() => {
    // 1. preloader
    $("#preloader").fadeOut(600);
    $(".preloader-bg").delay(400).fadeOut(600);

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
  }, []);
  return (
    <ReactPlayer
      light={`https://img.youtube.com/vi/${video}/0.jpg`}
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
