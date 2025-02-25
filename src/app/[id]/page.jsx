"use client";
import Image from "next/image";
import ImgCom from "../ImgCom";
import VideoCom from "../VIdeoCom";
import { works } from "../fileArray";
import WorkList from "../WorkList";
import LayoutCom from "../LayoutCom";
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useSpring } from "framer-motion";

function CustomCarousel(props) {
  const slider = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", one);
      sliderRef.addEventListener("mousedown", two);
      sliderRef.addEventListener("mouseleave", three);
      sliderRef.addEventListener("mouseup", four);
      sliderRef.addEventListener("mousemove", five);

      return () => {
        sliderRef.removeEventListener("mousedown", one);
        sliderRef.removeEventListener("mousedown", two);
        sliderRef.removeEventListener("mouseleave", three);
        sliderRef.removeEventListener("mouseup", four);
        sliderRef.removeEventListener("mousemove", five);
      };
    }
  }, []);

  function one(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function two(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function three() {
    isDown.current = false;
  }

  function four() {
    isDown.current = false;
  }

  function five(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <ul className="items carousel__thumbnails" ref={slider}>
      {props.children}
    </ul>
  );
}

export default function Page({ params }) {
  let item = works.work_list[params.id];
  const [videoState, setVideoState] = useState(1);
  const handleVideoState = (id) => {
    setVideoState(id);
  };
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  return (
    <LayoutCom>
      <motion.div
        className={hidden ? "bar hidden" : "bar"}
        style={{ scaleX }}
      />
      <div className="move-up section-demos">
        <div key={item.id} className="col-sm-12 col-md-12 col-lg-4">
          {/* view vimeo video  list*/}
          <div
            id={`vimeo_${item.id}`}
            className="vimeo-shadowbox vimeo-shadowbox--hidden"
          >
            <div className={`vimeo-shadowbox__video-wrapper ${item.videoType}`}>
              <div>
                <div className={`vimeo-shadowbox__video `}>
                  <div className="carousel">
                    <input
                      type="radio"
                      name="slides"
                      defaultChecked="checked"
                      className={videoState === 1 ? "slide_active" : ""}
                    />
                    <input
                      type="radio"
                      name="slides"
                      className={videoState === 2 ? "slide_active" : ""}
                    />
                    <input
                      type="radio"
                      name="slides"
                      className={videoState === 3 ? "slide_active" : ""}
                    />
                    <input
                      type="radio"
                      name="slides"
                      className={videoState === 4 ? "slide_active" : ""}
                    />
                    <input
                      type="radio"
                      name="slides"
                      className={videoState === 5 ? "slide_active" : ""}
                    />
                    <ul
                      className={`carousel__slides ${item.videoType} ${item.href.length === 1 ? "only" : ""}`}
                    >
                      {item.href.map((video, idx) => (
                        <li className="carousel__slide" key={idx}>
                          <figure>
                            <div>
                              <VideoCom
                                id={`video_${idx + 1}`}
                                className={
                                  idx + 1 === videoState ? "slide_active" : ""
                                }
                                key={idx}
                                video={video}
                                videoId={item.id}
                              />
                            </div>
                          </figure>
                        </li>
                      ))}
                      <CustomCarousel>
                        {item.href.map((videoId, idx) => {
                          if (item.href.length > 1) {
                            return (
                              <li key={idx} className="thumbnails_list">
                                <label
                                  onClick={() => handleVideoState(idx + 1)}
                                  className="label"
                                >
                                  <Image
                                    width={1920}
                                    height={1080}
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                    }}
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                    alt="image"
                                  />
                                </label>
                              </li>
                            );
                          }
                        })}
                      </CustomCarousel>
                    </ul>
                  </div>
                </div>

                <ImgCom item={item} />
              </div>
            </div>
          </div>
        </div>

        <WorkList title={false} />
      </div>
    </LayoutCom>
  );
}
