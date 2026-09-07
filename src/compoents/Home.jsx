import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import home from "../json _data/home.json";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../animations";
import Scene3D from "./Scene3D";

const iconVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Home = () => {
  const homeiconLink = {
    linkFB: "https://www.facebook.com/share/1Bbk6yLJWu/",
    linkInsta:
      "https://www.instagram.com/karxx._k?igsh=MTdud3RlODVrNGp1bg==",
    linklinkedin:
      "https://www.linkedin.com/in/karthick-m-5b03a1300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    linkGitup: "https://github.com/karthick030609",
  };

  return (
    <>
      <section id="Home" className="hero">
        <Scene3D />
        <div className="hero-content">
        <motion.div
          className="hero-copy"
          variants={staggerContainer(0.18)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={fadeInLeft}>Hello, I am {home.name}</motion.p>

          <motion.div className="hero-title" variants={fadeInLeft}>
            <h1>{home.role1}</h1>
            <h1>{home.role2}</h1>
          </motion.div>

          <motion.p className="hero-description" variants={fadeInUp}>{home.para}</motion.p>

          <motion.div className="hero-tech-stack" variants={fadeInUp}>
            <span>React</span>
            <span>Three.js</span>
            <span>UI / UX</span>
          </motion.div>

          {/* Social icons stagger */}
          <motion.div
            className="hero-socials"
            variants={staggerContainer(0.12)}
          >
            <motion.a
              href={homeiconLink.linkFB}
              className="hero-social-link"
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ y: -3, color: "#67e8f9" }}
            >
              <FaFacebook size={22} aria-hidden="true" />
            </motion.a>
            <motion.a
              href={homeiconLink.linkInsta}
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ y: -3, color: "#67e8f9" }}
            >
              <FaInstagram size={22} aria-hidden="true" />
            </motion.a>
            <motion.a
              href={homeiconLink.linklinkedin}
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ y: -3, color: "#67e8f9" }}
            >
              <FaLinkedin size={22} aria-hidden="true" />
            </motion.a>
            <motion.a
              href={homeiconLink.linkGitup}
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ y: -3, color: "#67e8f9" }}
            >
              <FaGithub size={22} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div className="hero-actions" variants={fadeInUp}>
            <a href="#About">
              <motion.button
                className="hero-cta"
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 25px rgba(34, 211, 238, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                More About Me
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-art-label"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <span className="hero-status"><i /> SYSTEM ONLINE</span>
          <strong>CREATIVE DEVELOPER</strong>
          <small>BUILD • DESIGN • SHIP</small>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
