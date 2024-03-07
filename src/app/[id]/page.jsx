"use client";
import Image from "next/image";
import ImgCom from "../ImgCom";
import VideoCom from "../VIdeoCom";
import { works } from "../fileArray";
import WorkList from "../WorkList";
import LayoutCom from "../LayoutCom";
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useSpring } from "framer-motion";
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
                <ImgCom item={item} />
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
                    <ul className="carousel__slides">
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
                    </ul>
                    <ul className="carousel__thumbnails">
                      {item.href.map((videoId, idx) => {
                        if (item.href.length > 1) {
                          return (
                            <li key={idx}>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WorkList title={false} />
      </div>
    </LayoutCom>
  );
}
