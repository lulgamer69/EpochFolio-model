import React from "react";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaInfoCircle, FaPen, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/epochfolio-logo.png";
import "./slider.css";

const Slider = ({ isOpen, onClose }) => {
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
              <p>Privacy Policy</p>
              <p>Terms of Services</p>
              <p>Cookie Policy</p>
            </div>

            <p className="copyright-text">
              © 2025 Epochfolio . All rights reserved.
            </p>


            <div className="slider-watermark">
              EPOCHFOLIO
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slider;