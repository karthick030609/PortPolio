import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import * as Icons from "react-icons/fa";
import defaultServices from "../json _data/services.json";
import { fadeInUp, staggerContainer } from "../animations";

const LS_KEY = "admin_services";

function loadServices() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : defaultServices;
  } catch {
    return defaultServices;
  }
}

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
  const [services, setServices] = useState(loadServices);

  useEffect(() => {
    function onStorage(e) {
      if (e.key === LS_KEY) setServices(loadServices());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

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
            <span style={{ color: "#67e8f9" }}>My </span> Services
          </motion.h1>
        </div>

        <motion.div
          className="services-grid"
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
                  y: -6,
                  boxShadow: "0 5px 35px rgba(34, 211, 238, 0.18)",
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
