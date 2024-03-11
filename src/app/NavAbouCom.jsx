"use client";
import { aboutText } from "./fileArray";
import Link from "next/link";
const NavAbouCom = () => {
  return (
    <section
      id="about"
      className="section position-relative pb-0 NavAbout AboutContainer"
    >
      <div className="r-container">
        <div className="position-relative z_box">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3">
              <div className="about_box d-flex flex-row justify-content-center gap-3 h-100">
                <div className="about_info">
                  <div className="about_title">
                    <div className="divider ">
                      <span className="accent-color fs-5 me-3">
                        {aboutText.top_title}
                      </span>
                    </div>
                    <h4 className="text-title text-black fw-bold font-1 lh-1">
                      {aboutText.title}
                    </h4>
                  </div>
                  {aboutText.subscription}
                  <div className="d-flex flex-row gap-3 about_icon">
                    {aboutText.iconList.map((item, idx) => (
                      <Link
                        key={idx}
                        type="button"
                        href={item.href}
                        target="_blank"
                        className="social-item p-2 d-flex align-items-center justify-content-center"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* <div className="col about-img">{aboutText.image}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NavAbouCom;
