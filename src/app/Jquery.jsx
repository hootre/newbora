"use client";
import $ from "jquery";
import "jquery.easing";

import { useEffect } from "react";
import { useVideoStore } from "./Store";
import { usePathname, useRouter } from "next/navigation";

const Jquery = () => {
  const { readyVideo, readyDetailVide, toggleReadyVideo } = useVideoStore();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (readyVideo || readyDetailVide) {
      $("#preloader").addClass("loaded");
      $("#preloader").fadeOut(600);
      $(".preloader-bg").delay(400).fadeOut(600);
    }
  }, [readyVideo, readyDetailVide, pathname]);
  useEffect(() => {
    // 3.1. page scroll
    $(".page-scroll").on("click", function (e) {
      var $anchor = $(this);
      if (pathname !== "/") {
        router.push("/");
      } else {
        if ($anchor.data("href") === "#home") {
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
                scrollTop: $($anchor.data("href")).offset().top,
              },
              1500,
              "easeInOutExpo"
            );
        }
      }

      e.preventDefault();
    });
  }, [pathname, router]);
  useEffect(() => {
    $(".navbar-bg-switch").addClass("main-navigation-bg");
    $(".to-top-arrow").removeClass("show");

    $(window).on("scroll", function () {
      // 3.5. collapse navigation
      if ($(".navbar").offset().top < 900) {
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
