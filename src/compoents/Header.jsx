import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { navSlideDown, staggerContainer, navItem } from "../animations";

const Header = () => {
  const header = {
    name: "karlogo.png",
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#About" },
    { label: "Service", href: "#Services" },
    { label: "Skills", href: "#Skills" },
    { label: "Project", href: "#Project" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <motion.header
      className="header"
      variants={navSlideDown}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src={header.name} alt="logo" />
      </motion.h1>

      <motion.ul
        className="headElement"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link, i) => (
          <motion.li key={i} variants={navItem}>
            <a href={link.href}>{link.label}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  );
};

export default Header;
