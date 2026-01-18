import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaInfoCircle, FaPen, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/epochfolio-logo.png";
import "./slider.css";

const Slider = ({ isOpen, onClose }) => {
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    privacy: {
      title: "Privacy Policy",
      text: "At Epochfolio, we value your privacy. We do not share your personal data with third parties without consent. All your information is encrypted and secure."
    },
    terms: {
      title: "Terms of Services",
      text: "By using our website, you agree to follow our guidelines. Content ownership remains with the creators, and misuse of the platform is strictly prohibited."
    },
    cookies: {
      title: "Cookie Policy",
      text: "We use cookies to enhance your browsing experience. These cookies help us analyze site traffic and personalize content for you."
    }
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/about", name: "About Us", icon: <FaInfoCircle /> },
    { path: "/blog", name: "Blog", icon: <FaPen /> },
    { path: "/contact", name: "Contact Us", icon: <FaPhoneAlt /> }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="slider-panel"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="slider-header">
            <img src={logo} alt="Epochfolio" className="slider-logo" />
            <div className="close-icon" onClick={onClose}>
              <FiX />
            </div>
          </div>

          <div className="slider-links">
            {navLinks.map((item, i) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="slider-footer">
            <div className="policy-links">
              <p onClick={() => setActivePopup("privacy")}>Privacy Policy</p>
              <p onClick={() => setActivePopup("terms")}>Terms of Services</p>
              <p onClick={() => setActivePopup("cookies")}>Cookie Policy</p>
            </div>

            <p className="copyright-text">
              © 2025 Epochfolio . All rights reserved.
            </p>

            <div className="slider-watermark">
              EPOCHFOLIO
            </div>
          </div>

          {activePopup && (
            <div className="popup-overlay" onClick={() => setActivePopup(null)}>
              <motion.div
                className="popup-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{popupData[activePopup].title}</h3>
                <p>{popupData[activePopup].text}</p>
                <button onClick={() => setActivePopup(null)}>OK</button>
              </motion.div>
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slider;