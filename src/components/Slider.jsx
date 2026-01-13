
import React from "react";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa"; // Footer wale icons
import logo from "../assets/epochfolio-logo.png"; // Logo import
import "./slider.css"; 

const Slider = ({ isOpen, onClose }) => {
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: "0%", 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        mass: 1
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Background dhundla karne ke liye) */}
          <motion.div 
            className="slider-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Main Slider Panel */}
          <motion.div
            className="slider-panel"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header: Logo & Close Button */}
            <div className="slider-header">
              <img src={logo} alt="Epochfolio" className="slider-logo" />
              <div className="close-icon" onClick={onClose}>
                <FiX />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="slider-links">
              {["/", "/about", "/blog", "/contact"].map((path, i) => (
                <motion.div
                  key={path}
                  variants={itemVariants}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink 
                    to={path} 
                    onClick={onClose}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                  >
                    {["Home", "About us", "Blog", "Contact us"][i]}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Footer Style Bottom Area */}
            <div className="slider-footer">
                
                <div className="slider-socials">
                    <FaLinkedinIn />
                    <FaInstagram />
                    <FaEnvelope />
                </div>

            
                <div className="slider-watermark">
                    EPOCHFOLIO
                </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Slider;