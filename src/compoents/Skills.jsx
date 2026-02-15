import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "./Skills.css";
import skills from "../json _data/skills.json";
import { fadeInUp, staggerContainer } from "../animations";

// Icons for each skill
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// Map skill names to icons
const skillIconMap = {
  "C Language": SiC,
  "Core Java": FaJava,
  "Python": FaPython,
  "HTML & CSS": FaHtml5,
  "JavaScript": FaJsSquare,
  "React JS": FaReact,
  "UI & UX": MdDesignServices,
  "GitHub": FaGithub,
};

// Counter component for achievement numbers
const Counter = ({ target, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target);
    if (isNaN(num)) return;

    let current = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(num / (duration / 30)));
    const timer = setInterval(() => {
      current += step;
      if (current >= num) {
        current = num;
        clearInterval(timer);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const skillCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <>
      <div id="Skills">
        <div className="about">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span style={{ color: "violet" }}>My </span>Skills
          </motion.h1>
        </div>

        <motion.div
          className="skillContent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>I Work Hard to Improve My</h2>
          <h2 className="h2">Skills Regularly</h2>
        </motion.div>

        {/* Skill icon cards grid */}
        <div className="skillsSection">
          <motion.div
            className="skillsGrid"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {skills.map((skill, index) => {
              const IconComp = skillIconMap[skill.skillName];
              return (
                <motion.div
                  className="skillCard"
                  key={index}
                  variants={skillCardVariant}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 12px 40px rgba(198, 9, 215, 0.45)",
                  }}
                >
                  <div className="skillIconWrap">
                    {IconComp && <IconComp className="skillIcon" />}
                  </div>
                  <p className="skillLabel">{skill.skillName}</p>
                  <span className="skillPercent">{skill.skillPercentage}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="achievements"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="achieve" variants={fadeInUp}>
            <h1>
              <Counter target="1" />
            </h1>
            <p>YEARS OF EXPERIENCE</p>
          </motion.div>
          <hr />
          <motion.div className="achieve" variants={fadeInUp}>
            <h1>
              <Counter target="2" />
            </h1>
            <p>PROJECTS COMPLETED</p>
          </motion.div>
          <hr />
          <motion.div className="achieve" variants={fadeInUp}>
            <h1>
              <Counter target="0" suffix="+" />
            </h1>
            <p>HAPPY CLIENTS</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
