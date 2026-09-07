import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import "./Header.css";
import { navSlideDown, staggerContainer, navItem } from "../animations";

const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Services", href: "#Services" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#Project" },
  { label: "Contact", href: "#Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const current = navLinks.reduce((active, link) => {
        const section = document.querySelector(link.href);
        return section && section.offsetTop <= scrollPosition ? link.label : active;
      }, "Home");
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const closeMenu = (label) => {
    setActiveSection(label);
    setIsOpen(false);
  };

  return (
    <motion.header
      className="header"
      variants={navSlideDown}
      initial="hidden"
      animate="visible"
    >
      <a className="brand" href="#Home" aria-label="Karthick home" onClick={() => closeMenu("Home")}>
        <span className="brand-mark">KM</span>
        <span className="brand-copy">
          <strong>KARTHICK</strong>
          <small>CREATIVE DEVELOPER</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <motion.ul
        className={`headElement${isOpen ? " is-open" : ""}`}
        variants={staggerContainer(0.07)}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => (
          <motion.li key={link.label} variants={navItem}>
            <a
              href={link.href}
              className={activeSection === link.label ? "is-active" : ""}
              onClick={() => closeMenu(link.label)}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <a className="header-cta" href="#Contact" onClick={() => closeMenu("Contact")}>
        Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
      </a>
    </motion.header>
  );
};

export default Header;