import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import projects from "../json _data/projects.json";
import { fadeInUp, staggerContainer } from "../animations";

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <>
      <div id="Project" className="about">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span style={{ color: "violet" }}>My </span>Projects
        </motion.h1>
      </div>

      <motion.div
        className="skillsBg"
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              className="card1"
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 5px 35px rgba(225, 30, 236, 0.4)",
              }}
            >
              <h2>{project.name}</h2>
              <p>{project.para}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Projects;
