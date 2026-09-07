import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import "./About.css";
import defaultAbout from "../json _data/about.json";
import { fadeInUp, fadeInLeft, fadeInRight } from "../animations";

const LS_KEY = "admin_about";

function loadAbout() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : defaultAbout;
  } catch {
    return defaultAbout;
  }
}

const About = () => {
  const [about, setAbout] = useState(loadAbout);

  useEffect(() => {
    function onStorage(e) {
      if (e.key === LS_KEY) setAbout(loadAbout());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <>
      <div id="About">
        <div className="about">
          <Motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            About <span style={{ color: "#67e8f9" }}>Me</span>
          </Motion.h1>
        </div>

        <div className="about-main">
          {/* Image from left */}
          <Motion.div
            className="Box2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Motion.img
              src="profile.jpg"
              alt="profile"
              whileHover={{
                y: -6,
                boxShadow: "0 15px 30px rgb(87, 12, 91)",
              }}
              transition={{ duration: 0.3 }}
            />
          </Motion.div>

          {/* Text from right */}
          <Motion.div
            className="Box1"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am Karthick
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {about.para}
            </Motion.p>

            <Motion.div
              className="detail"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <span>Email : </span>
              <a href={`mailto:${about.email}`}>{about.email}</a>
              <br />
            </Motion.div>

            <Motion.div
              className="place"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <span className="placee">Place : </span>
              <span>{about.place}</span>
            </Motion.div>

            <Motion.div
              className="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <a href={about.resumeLink}>
                <Motion.button
                  whileHover={{
                    y: -3,
                    boxShadow: "0 8px 25px rgba(34, 211, 238, 0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </Motion.button>
              </a>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
