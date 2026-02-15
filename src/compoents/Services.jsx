import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import * as Icons from "react-icons/fa";
import services from "../json _data/services.json";
import { fadeInUp, staggerContainer } from "../animations";

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <>
      <div id="Services">
        <div className="skillsHead">
          <motion.h1
            style={{ color: "white" }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span style={{ color: "violet" }}>My </span> Services
          </motion.h1>
        </div>

        <motion.div
          className="skillsBg"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, index) => {
            const IconComponent = Icons[service.iconName];
            return (
              <motion.div
                className="card"
                key={index}
                variants={cardVariant}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 5px 35px rgba(225, 30, 236, 0.4)",
                }}
              >
                {IconComponent && (
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="icon" />
                  </motion.div>
                )}
                <h2>{service.role}</h2>
                <p>{service.para}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Services;
