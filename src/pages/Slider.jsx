import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import logo from '../assets/epochfolio-logo.png'; 

const IconHome = () => (<svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const IconUser = () => (<svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const IconBlog = () => (<svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>);
const IconPhone = () => (<svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
const IconSearch = () => (<svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const IconClose = () => (<svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);

export default function Slider() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  return (
    <div className="slider-container">
      
      <div className="top-bar">
        <img src={logo} alt="EPOCHFOLIO" className="brand-logo-img" />

        <div className="nav-group-right">
            
            {/* Search Wrapper */}
            <div className="search-wrapper" ref={searchRef}>
                {searchOpen ? (
                    <div className="search-input-box active">
                        <input type="text" placeholder="Search..." autoFocus />
                        <button className="icon-btn close-search" onClick={toggleSearch}>
                            <IconClose />
                        </button>
                    </div>
                ) : (
                    <button className="icon-btn search-trigger" onClick={toggleSearch}>
                        <IconSearch />
                    </button>
                )}
            </div>

            <div className={`desktop-nav ${searchOpen ? 'hide-on-search' : ''}`}>
                <Link to="/"> <IconHome /> Home</Link>
                <Link to="/about"> <IconUser /> About Us</Link>
                <Link to="/blog"> <IconBlog /> Blog</Link>
                <Link to="/contact"> <IconPhone /> Contact Us</Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="menu-content-wrapper">
          <div className="menu-header">
            <img src={logo} alt="EPOCHFOLIO" className="brand-logo-img" />
            <button className="close-btn" onClick={toggleMenu}>X</button>
          </div>
          <nav className="mobile-nav-links">
            <Link to="/" onClick={toggleMenu}> <IconHome /> Home</Link>
            <Link to="/about" onClick={toggleMenu}> <IconUser /> About Us</Link>
            <Link to="/blog" onClick={toggleMenu}> <IconBlog /> Blog</Link>
            <Link to="/contact" onClick={toggleMenu}> <IconPhone /> Contact Us</Link>
          </nav>
          <div className="menu-footer">
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Services</Link>
              <Link to="/cookie">Cookie Policy</Link>
            </div>
            <p className="copyright">© 2025 Epochfolio. All rights reserved.</p>
            <div className="watermark">EPOCHFOLIO</div>
          </div>
        </div>
      </div>
    </div>
  );
}