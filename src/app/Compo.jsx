import Image from "next/image";

import { BsPeopleFill } from "react-icons/bs";
import { BiSolidArrowToTop } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { aboutText, works } from "./fileArray";
import { IoPlayOutline } from "react-icons/io5";
import ScrollSpy from "react-ui-scrollspy";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
const Compo = () => {
  // 비디오 캐러셀
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/0.jpg`;

  const customRenderThumb = (children) => {
    children.map((item, idx) => {
      return <img key={idx} src={getVideoThumb(item)} />;
    });
  };

  return (
    <ScrollSpy>
      <section
        id="about"
        className="section position-relative pb-0 AboutContainer"
      >
        <div className="r-container">
          <div className="image-overlay-3"></div>
          <div className="position-relative z_box">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mb-3">
                <div className="d-flex flex-column justify-content-center gap-3 h-100">
                  <div className="divider mb-3">
                    <span className="accent-color fs-5 me-3">
                      {aboutText.top_title}
                    </span>
                  </div>
                  <h4 className="text-title text-white fw-bold font-1 lh-1">
                    {aboutText.title}
                  </h4>
                  {aboutText.subscription}
                  <div className="d-flex flex-row gap-3 ">
                    {aboutText.iconList.map((item, idx) => (
                      <a
                        key={idx}
                        type="button"
                        href=""
                        className="social-item p-2 d-flex align-items-center justify-content-center"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col about-img">
                <Image
                  src={aboutText.top_image}
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="r-container">
          <div className="row row-cols-1 row-cols-lg-4 py-3 position-relative w-100 z_box2">
            {aboutText.aboutFooter.map((item, idx) => (
              <div className="col mb-3" key={idx}>
                <div className="d-flex flex-column justify-content-center text-center align-items-center gap-3">
                  {item.icon}
                  <div className="font-2 fw-bold">
                    <h3 className="text-white"> {item.count}</h3>
                    <h6 className="text-white"> {item.text}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demos" className="WorksContainer">
        <div className="WorksInfoContainer">
          <div className="container sections">
            <div className="inner-divider"></div>

            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Stylex</h2>

                <div className="inner-divider-ultra-half"></div>

                <h2 className="section-subheading">
                  <span>A fully responsive WordPress</span>
                </h2>
              </div>
            </div>

            <div className="row section-intro">
              <div className="col-lg-12">
                <div className="intro-txt">
                  <p>
                    Stylex is a fully responsive theme with a modern design
                    suitable for all creative fields. The theme is featuring a
                    powerful fullscreen background video and imagery making it a
                    perfect choice for photographers, artists and designers who
                    want to showcase their work.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="intro-years">
                  <div className="inner-divider"></div>

                  <div className="the-line"></div>

                  <h2>Ready</h2>

                  <div className="inner-divider-half"></div>

                  <h3 className="facts-counter-number">
                    {works.work_list.length}
                  </h3>

                  <div className="inner-divider-half"></div>

                  <h4>Demos</h4>
                </div>

                <div className="the-line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid sections">
          <div className="inner-divider"></div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading section-heading-small">
                <span>{works.title_point}</span> {works.title}
              </h2>

              <div className="inner-divider-ultra-half"></div>

              <h2 className="section-subheading">
                <span>{works.subscription}</span>
              </h2>
            </div>
          </div>

          <div className="inner-divider-half"></div>

          <div className="row">
            <div className="move-up section-demos">
              {works.work_list.map((item) => (
                <div key={item.id} className="col-sm-12 col-md-12 col-lg-4">
                  {/* view vimeo video  list*/}
                  <div
                    id={`vimeo_${item.id}`}
                    className="vimeo-shadowbox vimeo-shadowbox--hidden"
                  >
                    <div className="bg_back hide-popup" data-id={item.id}></div>
                    <div className="bg_line"></div>
                    <div className="vimeo-shadowbox__video-wrapper">
                      <div className="contentBox_1">
                        {item.content_img_1}
                        <div className="contents">
                          <h2>{item.content_title_1}</h2>
                          <div>{item.content_subscription_1}</div>
                        </div>
                      </div>
                      <div className="contentBox_2">
                        {item.content_img_2}
                        <div className="contents">
                          <h2>{item.content_title_2}</h2>
                          <div>{item.content_subscription_2}</div>
                        </div>
                      </div>
                      {item.content_img_3 ? (
                        <div className="contentBox_1">
                          {item.content_img_3}
                          <div className="contents">
                            <h2>{item.content_title_3}</h2>
                            <div>{item.content_subscription_3}</div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div>
                        <div className="vimeo-shadowbox__video">
                          <Carousel
                            showArrows={false}
                            showStatus={false}
                            thumbWidth={150}
                            showIndicators={false}
                            renderItem={customRenderItem}
                            renderThumbs={() => customRenderThumb(item.href)}
                          >
                            {item.href.map((video, idx) => (
                              <iframe
                                key={idx}
                                src={`https://www.youtube.com/embed/${video}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay=1; rel=0; amp; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            ))}
                          </Carousel>
                        </div>
                      </div>
                      <div
                        className="vimeo-shadowbox__close-button"
                        data-id={item.id}
                      >
                        <IoClose />
                      </div>
                    </div>
                  </div>
                  <div className="image-works">
                    <a className="open-popup-link hide-popup" data-id={item.id}>
                      <div className="hover-effect"></div>

                      <div className="icon-works">
                        <div className="more-wraper-center more-wraper-center-demos">
                          <div className="more-button-bg-center more-button-circle"></div>
                          <div className="more-button-txt-center">
                            <IoPlayOutline className="play_icon" />
                          </div>
                        </div>
                      </div>
                    </a>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section ContactContainer" id="contact">
        <div className="r-container">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3">
              <div className="divider mb-4">
                <span className="accent-color fs-5 me-3">GET IN TOUCH</span>
              </div>
              <h4 className="text-title text-white fw-bold font-1 lh-1 mb-5">
                Contact Us.
              </h4>
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="row row-cols-1 row-cols-lg-2 mt-5">
                <div className="col mb-3">
                  <div className="d-flex flex-row align-items-center gap-3">
                    <BsPeopleFill className="icon" />
                    <div className="d-flex flex-column">
                      <h6 className="text-white font-1">Phone</h6>
                      <span className="text-gray">345 563 23</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-row align-items-center gap-3">
                    <BsPeopleFill className="icon" />
                    <div className="d-flex flex-column">
                      <h6 className="text-white font-1">Site</h6>
                      <span className="text-gray">www.awesomesite.com</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-row align-items-center gap-3">
                    <BsPeopleFill className="icon" />
                    <div className="d-flex flex-column">
                      <h6 className="text-white font-1">Email</h6>
                      <span className="text-gray">hello@awesomesite.com</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-row align-items-center gap-3">
                    <BsPeopleFill className="icon" />
                    <div className="d-flex flex-column">
                      <h6 className="text-white font-1">Address</h6>
                      <span className="text-gray">
                        99 Roving St., Big City, PKU 23456
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="h-100 d-flex flex-column">
                <div
                  className="success_msg toast align-items-center w-100 shadow-none mb-3 bg-transparent border border-success rounded-0 my-4"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="d-flex p-2">
                    <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                      <i className="fa-solid fa-check f-36 text-success"></i>
                      Your Message Successfully Send.
                    </div>
                    <button
                      type="button"
                      className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                <div
                  className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 bg-transparent my-4 border rounded-0"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="d-flex p-2">
                    <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                      <i className="fa-solid fa-triangle-exclamation f-36 text-danger"></i>
                      Something Wrong ! Send Form Failed.
                    </div>
                    <button
                      type="button"
                      className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                <form
                  action=""
                  className="d-flex flex-column w-100 needs-validation mb-3 form"
                  noValidate=""
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control p-3"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required=""
                    />
                    <div className="invalid-feedback">
                      The field is required.
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control p-3"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                    <div className="invalid-feedback">
                      The field is required.
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn submit_form font-1 py-3"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <iframe
            loading="lazy"
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.0694715065006!2d127.19015707645416!3d37.576981772035865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb1855ce835e3%3A0x244a55c410a119d2!2z66-47IKs6rCV67OAIOyKpOy5tOydtO2PtOumrOyKpA!5e0!3m2!1sko!2skr!4v1708070377252!5m2!1sko!2skr"
            title="하남 미사 스카이폴리스"
            aria-label="London Eye, London, United Kingdom"
          ></iframe>
        </div>
        <div className="r-container footer">
          <div className="flex-box">
            <h4 className="text-white font-1 fw-bold fs-1">
              Take your moment with Codagraph
            </h4>
            <p className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="" type="button" className="btn rounded-0">
              GET STARTED
            </a>
          </div>
        </div>
      </section>
      <div className="page-scroll PageTopBtn" href="#home">
        <div className="to-top-arrow show">
          <BiSolidArrowToTop className="icon" />
        </div>
      </div>
    </ScrollSpy>
  );
};
export default Compo;
