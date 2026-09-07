import React from "react";
import { motion as Motion } from "framer-motion";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import contact from "../json _data/contact.json";
import { fadeInUp, fadeInLeft, staggerContainer } from "../animations";

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
        <Motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Contact <span style={{ color: "#67e8f9" }}>Me</span>
        </Motion.h1>
      </div>

      <div className="contactSection">
        {/* Left info */}
        <Motion.div
          className="contactLeft"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Talk
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me work on. You can
            contact anytime.
          </Motion.p>

          <Motion.div
            className="contactDetails"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Motion.div className="contactDetail" variants={contactDetailVariant}>
              <MdEmail />
              <p>{contact.Email}</p>
            </Motion.div>
            <Motion.div className="contactDetail" variants={contactDetailVariant}>
              <MdAddIcCall /> <p>+91 {contact.phoneNo}</p>
            </Motion.div>
            <Motion.div className="contactDetail" variants={contactDetailVariant}>
              <MdLocationPin />
              <p>{contact.place}</p>
            </Motion.div>
          </Motion.div>
        </Motion.div>

        {/* Right form */}
        <Motion.form
          onSubmit={onSubmit}
          className="contactRight"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.label htmlFor="" variants={formFieldVariant}>
            Your Name
          </Motion.label>
          <Motion.input
            type="text"
            placeholder="Enter your name"
            name="name"
            variants={formFieldVariant}
            whileFocus={{ borderColor: "#67e8f9", boxShadow: "0 0 8px rgba(198, 9, 215, 0.4)" }}
          />
          <Motion.label htmlFor="" variants={formFieldVariant}>
            Your Email
          </Motion.label>
          <Motion.input
            type="email"
            name="email"
            placeholder="Enter your Email"
            variants={formFieldVariant}
            whileFocus={{ borderColor: "#67e8f9", boxShadow: "0 0 8px rgba(198, 9, 215, 0.4)" }}
          />
          <Motion.label htmlFor="" variants={formFieldVariant}>
            Write your text here
          </Motion.label>
          <Motion.textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            variants={formFieldVariant}
            whileFocus={{ borderColor: "#67e8f9", boxShadow: "0 0 8px rgba(198, 9, 215, 0.4)" }}
          />
          <Motion.button
            className="contactSubmit"
            type="submit"
            variants={formFieldVariant}
            whileHover={{
              y: -5,
              boxShadow: "0 8px 30px rgba(34, 211, 238, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </Motion.button>
        </Motion.form>
      </div>
    </>
  );
};

export default Contact;
