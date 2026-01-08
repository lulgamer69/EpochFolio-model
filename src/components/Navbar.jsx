import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/epochfolio-logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isMobile = window.innerWidth <= 768;

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-inner">

        {/* LEFT */}
        <div className="nav-left">
          <img src={logo} alt="Epochfolio" />
        </div>

        {/* CENTER */}
        <nav className={`nav-center ${menuOpen ? "open" : ""}`}>
          {["/", "/about", "/blog", "/contact"].map((path, i) => (
            <motion.div
              key={path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink to={path}>
                {["Home", "About us", "Blog", "Contact us"][i]}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="nav-right">

          {/* SEARCH ICON */}
          <motion.div
            className="icon"
            whileHover={{ rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => !isMobile && setSearchOpen(true)}
            onMouseLeave={() => !isMobile && setSearchOpen(false)}
            onClick={() => isMobile && setSearchOpen(!searchOpen)}
          >
            <FiSearch />
          </motion.div>

          {/* HAMBURGER */}
          <motion.div
            className="icon hamburger"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.div>
        </div>

        {/* SEARCH BOX */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className={`search-box ${isMobile ? "mobile" : ""}`}
              initial={
                isMobile
                  ? { y: "-100%" }
                  : { opacity: 0, y: -10 }
              }
              animate={
                isMobile
                  ? { y: 0 }
                  : { opacity: 1, y: 0 }
              }
              exit={
                isMobile
                  ? { y: "-100%" }
                  : { opacity: 0, y: -10 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <input
                type="text"
                placeholder="Search..."
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
};

export default Navbar;
