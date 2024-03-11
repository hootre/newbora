"use client";
import "./style.css";
import Image from "next/image";

import logo from "/public/images/logo.png";
import { navs } from "./fileArray";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import NavAbouCom from "./NavAbouCom";
const NavCom = () => {
  const router = useRouter();
  const { scrollYProgress, scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [cardState, setCardState] = useState(false);

  const toggleCardState = () => {
    if (cardState === false) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
    setCardState((prev) => !prev);
  };
  const closeNavModal = () => {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
    setCardState(false);
  };
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
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
        transition={{ ease: [0.1, 0.25, 0.3, 2] }}
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
            {pathname === "/" ? (
              <div className={"navbar-collapse collapse "} id="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {navs.map((item, idx) => (
                    <li key={idx}>
                      <a
                        className={
                          item.acitve ? "page-scroll active" : "page-scroll"
                        }
                        data-href={`${item.href}`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="right_nav">
            <motion.div
              className="contact_btn"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              {pathname !== "/contact" ? (
                <Link href={"/contact"}>Contact</Link>
              ) : (
                <a onClick={() => router.back()}>Back</a>
              )}
            </motion.div>
            <nav
              className={cardState ? "menu-navigation open" : "menu-navigation"}
            >
              <a className="menu-icon-toggle" onClick={toggleCardState}>
                <span></span>
              </a>
              <i className="menu-background top"></i>
              <i className="menu-background middle"></i>
              <i className="menu-background bottom"></i>
              <div className="menu">
                <ul>
                  <li>
                    <Link href="/" onClick={closeNavModal} className="linkA">
                      For Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={closeNavModal}
                      className="linkA"
                    >
                      For Contact
                    </Link>
                  </li>
                </ul>
                <NavAbouCom />
              </div>
            </nav>
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default NavCom;
