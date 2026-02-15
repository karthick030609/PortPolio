import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import contact from "../json _data/contact.json";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../animations";

const formFieldVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const contactDetailVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2d52c91a-53c1-48db-a2c8-7c64fc6ccc85");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <>
      <div id="Contact" className="about">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Contact <span style={{ color: "violet" }}>Me</span>
        </motion.h1>
      </div>

      <div className="contactSection">
        {/* Left info */}
        <motion.div
          className="contactLeft"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Talk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me work on. You can
            contact anytime.
          </motion.p>

          <motion.div
            className="contactDetails"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contactDetail" variants={contactDetailVariant}>
              <MdEmail />
              <p>{contact.Email}</p>
            </motion.div>
            <motion.div className="contactDetail" variants={contactDetailVariant}>
              <MdAddIcCall /> <p>+91 {contact.phoneNo}</p>
            </motion.div>
            <motion.div className="contactDetail" variants={contactDetailVariant}>
              <MdLocationPin />
              <p>{contact.place}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right form */}
        <motion.form
          onSubmit={onSubmit}
          className="contactRight"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.label htmlFor="" variants={formFieldVariant}>
            Your Name
          </motion.label>
          <motion.input
            type="text"
            placeholder="Enter your name"
            name="name"
            variants={formFieldVariant}
            whileFocus={{ borderColor: "violet", boxShadow: "0 0 8px rgba(198, 9, 215, 0.4)" }}
          />
          <motion.label htmlFor="" variants={formFieldVariant}>
            Your Email
          </motion.label>
          <motion.input
            type="email"
            name="email"
            placeholder="Enter your Email"
            variants={formFieldVariant}
            whileFocus={{ borderColor: "violet", boxShadow: "0 0 8px rgba(198, 9, 215, 0.4)" }}
          />
          <motion.label htmlFor="" variants={formFieldVariant}>
            Write your text here
          </motion.label>
          <motion.textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            variants={formFieldVariant}
            whileFocus={{ borderColor: "violet", boxShadow: "0 0 8px rgba(198, 9, 215, 0.4)" }}
          />
          <motion.button
            className="contactSubmit"
            type="submit"
            variants={formFieldVariant}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(223, 15, 219, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </>
  );
};

export default Contact;
