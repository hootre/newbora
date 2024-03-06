"use client";
import "./style.css";
import Image from "next/image";

import logo from "/public/images/logo.png";
import { navs } from "./fileArray";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const NavCom = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  return (
    <>
      <motion.section
        className={"navbar navbar-fixed-top navbar-bg-switch NavContainer"}
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <div className="container navCom">
          <div className="navbar-header ">
            <div className="logo">
              <Link className="navbar-brand logo" href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="main-navigation ">
            <div className={"navbar-collapse collapse "} id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                {navs.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      className={
                        item.acitve ? "page-scroll active" : "page-scroll"
                      }
                      href={`${item.href}`}
                      data-to-scrollspy-id={item.title}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            className="contact_btn"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"/contact"}>Contact</Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
export default NavCom;
