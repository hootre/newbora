"use client";
import { IoPlayOutline } from "react-icons/io5";
import { works } from "./fileArray";
import Link from "next/link";
import { motion } from "framer-motion";
const WorkList = ({ title }) => {
  return (
    <section id="works" className="WorksContainer">
      <div className="container-fluid sections">
        {title ? (
          <>
            <div className="inner-divider"></div>
            {/* <div className="rowContainer">
              <div className="col-lg-12">
                <h2 className="section-heading section-heading-small">
                  <span>{works.title_point}</span> {works.title}
                </h2>

                <h2 className="section-subheading">
                  <span>{works.subscription}</span>
                </h2>
              </div>
            </div> */}
            <div className="WorksInfoContainer">
              <div className="container sections">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="intro-years">
                      <div className="inner-divider-half"></div>
                      <h2>Ready</h2>

                      <div className="inner-divider-half"></div>

                      <h3 className="facts-counter-number">
                        {works.work_list.length}
                      </h3>

                      <div className="inner-divider-half"></div>

                      <h4>Works</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="rowContainer">
          <div className="move-up section-demos">
            {works.work_list.map((item, idx) => (
              <motion.div
                key={item.id}
                className="col-sm-12 col-md-12 col-lg-4"
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
      <div id="more_btn">view more</div>
    </section>
  );
};
export default WorkList;
