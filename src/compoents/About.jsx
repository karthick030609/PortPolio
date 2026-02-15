import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import about from "../json _data/about.json";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "../animations";

const About = () => {
  return (
    <>
      <div id="About">
        <div className="about">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            About <span style={{ color: "violet" }}>Me</span>
          </motion.h1>
        </div>

        <div className="main">
          {/* Image from left */}
          <motion.div
            className="Box2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src="profile.jpg"
              alt="profile"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 15px 30px rgb(87, 12, 91)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Text from right */}
          <motion.div
            className="Box1"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am Karthick
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {about.para}
            </motion.p>

            <motion.div
              className="detail"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <span>Email : </span>
              <a href="">{about.Email}</a>
              <br />
            </motion.div>

            <motion.div
              className="place"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <span className="placee">Place : </span>
              <span>{about.place}</span>
            </motion.div>

            <motion.div
              className="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <a href={about.resumeLink}>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 25px rgba(223, 15, 219, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
