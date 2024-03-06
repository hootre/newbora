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
                      <div className="more-wraper-center more-wraper-center-demos">
                        <div className="more-button-bg-center more-button-circle"></div>
                        <div className="more-button-txt-center">
                          <IoPlayOutline className="play_icon" />
                        </div>
                      </div>
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
