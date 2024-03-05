"use client";
import $ from "jquery";
import "jquery.easing";

import { useCallback, useEffect, useRef } from "react";
import { useVideoStore } from "./Store";

const Jquery = () => {
  const { stopVideo, toggleStopVideo } = useVideoStore();
  const { readyVideo, toggleReadyVideo } = useVideoStore();

  useEffect(() => {
    if (readyVideo) {
      if (!$("#preloader").hasClass("loaded")) {
        $("#preloader").addClass("loaded");
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
      }
    }
  }, [readyVideo]);
  useEffect(() => {
    // popup event
    $(".open-popup-link").on("click", function (e) {
      e.stopPropagation();
    });
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
  return <></>;
};
export default Jquery;
