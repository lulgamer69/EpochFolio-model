import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/epochfolio-logo.png";
import "../styles/navbar.css";
import Slider from "./Slider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/">
            <img src={logo} alt="Epochfolio" />
          </Link>
        </div>

        {/* CENTER */}
        <nav className="nav-center">
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

          {/* SEARCH BOX */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="navbar-search-input"
            />
            <motion.div
              className="search-icon-wrapper"
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiSearch />
            </motion.div>
          </div>

          {/* HAMBURGER */}
          <motion.div
            className="icon hamburger"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.div>
        </div>

        <Slider isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      </div>
    </motion.header>
  );
};

export default Navbar;
