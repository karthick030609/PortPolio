import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import home from "../json _data/home.json";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../animations";

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
      <div className="main">
        {/* Left text block */}
        <motion.div
          className="box1"
          variants={staggerContainer(0.18)}
          initial="hidden"
          animate="visible"
        >
          <motion.h4 variants={fadeInLeft}>I am {home.name}</motion.h4>

          <motion.div className="web" variants={fadeInLeft}>
            <h1>{home.role1}</h1>
            <h1>{home.role2}</h1>
          </motion.div>

          <motion.p variants={fadeInUp}>{home.para}</motion.p>

          {/* Social icons stagger */}
          <motion.div
            className="icons"
            variants={staggerContainer(0.12)}
          >
            <motion.a
              href={homeiconLink.linkFB}
              className="a"
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ scale: 1.3, color: "#8a2be2" }}
            >
              <FaFacebook className="a" size={30} color="aliceblue" />
            </motion.a>
            <motion.a
              href={homeiconLink.linkInsta}
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ scale: 1.3, color: "#8a2be2" }}
            >
              <FaInstagram className="a" size={30} color="aliceblue" />
            </motion.a>
            <motion.a
              href={homeiconLink.linklinkedin}
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ scale: 1.3, color: "#8a2be2" }}
            >
              <FaLinkedin className="a" size={30} color="aliceblue" />
            </motion.a>
            <motion.a
              href={homeiconLink.linkGitup}
              target="_blank"
              rel="noreferrer"
              variants={iconVariant}
              whileHover={{ scale: 1.3, color: "#8a2be2" }}
            >
              <FaGithub className="a" size={30} color="aliceblue" />
            </motion.a>
          </motion.div>

          <motion.div className="button" variants={fadeInUp}>
            <a href="#About">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 25px rgba(223, 15, 219, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                More About Me
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="box2"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={home.image}
            alt="profile"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
