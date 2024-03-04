"use client";
import $ from "jquery";
import "jquery.easing";

import { useCallback, useEffect, useRef } from "react";
import { useVideoStore } from "./Store";

const Jquery = () => {
  const { stopVideo, toggleStopVideo } = useVideoStore();
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
      toggleStopVideo(false);
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
      toggleStopVideo(false);
      hidePopup(id);
    });
  }, []);
  useEffect(() => {
    // 1. preloader
    $("#preloader").fadeOut(600);
    $(".preloader-bg").delay(400).fadeOut(600);

    // more btn
    $("#more_btn").on("click", function () {
      if ($("#more_btn").hasClass("open_more")) {
        $("#more_btn").removeClass("open_more");
        $(".container-fluid").removeClass("more");
        $("#more_btn").text("view more");
        $(".section-demos > div").slice(12, 20).css("display", "none");
      } else {
        $("#more_btn").addClass("open_more");
        $(".container-fluid").addClass("more");
        $("#more_btn").text("view less");

        $(".section-demos > div").slice(0, 20).css("display", "block");
      }
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
        $("#navbar-collapse").removeClass("active");
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
  return <></>;
};
export default Jquery;
