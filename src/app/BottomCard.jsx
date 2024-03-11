"use client";
import { motion } from "framer-motion";
import card_img_1 from "/public/images/card/card_img_1.png";
import card_img_2 from "/public/images/card/card_img_2.png";
import card_img_3 from "/public/images/card/card_img_3.png";
import card_img_4 from "/public/images/card/card_img_4.png";
import card_img_5 from "/public/images/card/card_img_5.png";
import Image from "next/image";
import Link from "next/link";
const BottomCard = () => {
  const visible = {
    opacity: 1,
    y: 0,
  };
  const hidden = { opacity: 0, y: 25 };
  return (
    <section id="bottomCard">
      <div className="card_box_1">
        <div className="single_img">
          <motion.div
            className="card_img_box"
            initial={hidden}
            whileInView={visible}
            transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
          >
            <div className="card_title">
              <h1>Professional Team Members</h1>
              <h3>
                We are comprised of teams with over a decade of experience in
                various fields including directing, filming, lighting, special
                effects, drone operation, and more.
              </h3>
            </div>
            <Image src={card_img_1} alt="image" />
          </motion.div>
        </div>
        <div className="muliti_img">
          <motion.div
            className="card_img_box"
            initial={hidden}
            whileInView={visible}
            transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
          >
            <div className="card_title">
              <h1>
                24-hour <br />
                production
              </h1>
              <h3 className="img2_text short_2">
                We can work quickly with short production timelines,
                accommodating urgent schedules for our clients.
              </h3>
            </div>
            <Image src={card_img_2} alt="image" />
          </motion.div>
          <motion.div
            className="card_img_box"
            initial={hidden}
            whileInView={visible}
            transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
          >
            <div className="card_title short_1_title">
              <h1>Global operations</h1>
              <h3 className="img3_text short_1">
                Our team operates globally, with a focus on South Korea
              </h3>
            </div>
            <Image src={card_img_3} alt="image" />
          </motion.div>
        </div>
      </div>
      <div className="card_box_1">
        <div className="single_img">
          <motion.div
            className="card_img_box"
            initial={hidden}
            whileInView={visible}
            transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
          >
            <div className="card_title">
              <h1>Stable data management</h1>
              <h3>
                Bora Media securely stores client data for up to 1 year using
                private servers and Google Cloud infrastructure. With dual
                backups, we ensure the safety of our clients valuable data.
              </h3>
            </div>
            <Image src={card_img_4} alt="image" />
          </motion.div>
        </div>
        <div className="single_img">
          <motion.div
            className="card_img_box"
            initial={hidden}
            whileInView={visible}
            transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
          >
            <div className="card_title">
              <h1>Updated technology</h1>
              <h3>
                We always stay abreast of the latest technological advancements
                and continually research to remain at the forefront of the
                industry
              </h3>
            </div>
            <Image src={card_img_5} alt="image" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="end_title"
        initial={hidden}
        whileInView={visible}
        transition={{ ease: [0.1, 0.25, 0.3, 2], duration: 2 }}
      >
        <h1>Great relationships, start with the right questions</h1>
        <motion.div
          className="end_button"
          whileHover={{
            scale: 1.1,
          }}
          transition={{ duration: 0.5, yoyo: Infinity }}
        >
          <Link href={"/contact"}>Get Started</Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default BottomCard;
