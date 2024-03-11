"use client";
import { motion } from "framer-motion";
import { aboutText } from "./fileArray";
import about_img from "/public/images/about_img.png";
import about_img_m from "/public/images/about_img_m.png";
import Image from "next/image";
const AboutCom = () => {
  const visible = {
    opacity: 1,
    y: 0,
  };
  const hidden = { opacity: 0, y: 25 };
  return (
    <section
      id="aboutSection"
      className="section position-relative pb-0 AboutContainer"
    >
      <div className="r-container">
        <motion.h1
          className="about_title"
          initial={hidden}
          whileInView={visible}
          transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
        >
          Our team builds around creativity and professionalism. <br />
          But the most important thing is that we have{" "}
          <motion.span
            className="line"
            initial={{ backgroundSize: "0 20%" }}
            whileInView={{ backgroundSize: "100% 20%" }}
            transition={{ ease: [0.1, 0.25, 0.3, 2], delay: 1 }}
          >
            Repeat Customers.
          </motion.span>
        </motion.h1>
        <motion.div
          className="about_img_box"
          initial={hidden}
          whileInView={visible}
          transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
        >
          <Image src={about_img} alt="image" className="web_img" />
          <Image src={about_img_m} alt="image" className="mobile_img" />
        </motion.div>
        <motion.div
          className="row row-cols-1 row-cols-lg-4 py-3 position-relative w-100 z_box2"
          initial={hidden}
          whileInView={visible}
          transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
        >
          {aboutText.aboutFooter.map((item, idx) => (
            <div className="col mb-3" key={idx}>
              <div className="d-flex flex-column justify-content-center text-center align-items-center gap-3">
                <div className="about_iconss font-2 fw-bold">
                  <h3 className="text-white"> {item.count}</h3>
                  <h6 className="text-white"> {item.text}</h6>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.h1
          className="about_bottom_title"
          initial={hidden}
          whileInView={visible}
          transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
        >
          <motion.span
            className="bottom_top_title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: [0.1, 0.25, 0.3, 4], duration: 2 }}
          >
            Our professionally crafted productions
          </motion.span>{" "}
          <br />
          Our team adheres to our promise with customers,
          <br />
          based on high-quality and meticulously crafted content
        </motion.h1>
      </div>
    </section>
  );
};
AboutCom.displayName = "AboutCom";
export default AboutCom;
