// src/components/Footer.jsx
import footerlogoImg from "../assets/epochfolio-footer-logo.png";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* Top - 3 Columns */}
                <div className="footer-top">
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="#career">Career</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#privacy">Privacy</a></li>
                            <li><a href="#terms">Terms</a></li>
                            <li><a href="#security">Security</a></li>
                            <li><a href="#cookies">Cookies</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Work</h4>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="/about">About us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Center - Logo Image & Text */}
                <div className="footer-center">
                    <div className="footer-logo-wrapper">
                        <img
                            src={footerlogoImg}
                            alt="Epochfolio Logo"
                            className="footer-logo"
                        />
                    </div>
                    <p>Organically grow holistic world view of dispute innovation via empowerment.</p>
                </div>

                {/* Social Icons */}
                <div className="footer-social">
                    <a href="#linkedin" className="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#instagram" className="social-icon" aria-label="Instagram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </a>
                    <a href="#email" className="social-icon" aria-label="Email">@</a>
                </div>

                <div className="footer-brand">EPOCHFOLIO</div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© 2025 Epochfolio. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Services</a>
                    <a href="#cookies">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}
