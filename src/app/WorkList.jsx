"use client";
import { IoPlayOutline } from "react-icons/io5";
import { works } from "./fileArray";
import Link from "next/link";
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
const WorkList = forwardRef(({ title }) => {
  const [moreBtn, setMoreBtn] = useState(false);
  const handleSetMoreBtn = () => {
    setMoreBtn((prev) => !prev);
  };
  return (
    <section id="works" className="WorksContainer">
      <div
        className={
          moreBtn ? "container-fluid sections" : "container-fluid sections more"
        }
      >
        <div className="rowContainer">
          <div className="move-up section-demos">
            {works.work_list.map((item, idx) => (
              <motion.div
                key={item.id}
                className={
                  moreBtn
                    ? "col-sm-12 col-md-12 col-lg-4 open_more"
                    : "col-sm-12 col-md-12 col-lg-4"
                }
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div className="image-works">
                  <Link
                    className="open-popup-link "
                    data-item={item.id}
                    href={`/${idx}`}
                  >
                    <div className="hover-effect"></div>
                    <div className="icon-works">
                      <svg
                        version="1.1"
                        id="play"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                        xmlSpace="preserve"
                      >
                        <path
                          className="stroke-solid"
                          fill="none"
                          stroke="white"
                          d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
                        />
                        <path
                          className="stroke-dotted"
                          fill="none"
                          stroke="white"
                          d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
                        />
                        <path
                          className="icon"
                          fill="white"
                          d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                        />
                      </svg>
                    </div>
                  </Link>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="more_btn"
        className={moreBtn ? "open_more" : ""}
        onClick={handleSetMoreBtn}
      >
        {moreBtn ? "view less" : `view more`}
      </div>
    </section>
  );
});
WorkList.displayName = "WorkList";
export default WorkList;
