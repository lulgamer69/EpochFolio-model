import { useState } from "react";
import "./Contact.css";
import logo from "../assets/epochfolio-logo.png";
import heroImg from "../assets/hero-illustration.png";
import missionImg from "../assets/mission-success.png";
import OurmissionImg from "../assets/Ourmission.png";
import architecturalImg from "../assets/architectural.png";
import naitikImg from "../assets/NaitikJoshi.png";  // ✅ Fixed - no space
import niteshImg from "../assets/NiteshSharma.png";
import footerlogoImg from "../assets/epochfolio-footer-logo.png";


export default function Contact() {

  /* ================= FORM STATE ================= */
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (e.target.firstName.value.length < 3) {
      newErrors.firstName = "Minimum 3 characters required";
    }

    if (!e.target.email.value) {
      newErrors.email = "Email is required";
    }

    if (e.target.message.value.length < 10) {
      newErrors.message = "Message is too short";
    }

    setErrors(newErrors);
  };

  /* ================= FAQ ITEM ================= */
  const FAQItem = ({ question }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className={`faq-item ${open ? "open" : ""}`}>
        <div className="faq-question" onClick={() => setOpen(!open)}>
          <p>{question}</p>
          <span>{open ? "−" : "+"}</span>
        </div>

        <div className="faq-answer">
          <p>ABCD</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="contact-page">

        {/* ================= SECTION 1 ================= */}
        <section className="contact-hero">
          <h1>Contact Us</h1>

          <p className="hero-subtitle">
            Have questions or want to learn more about how EpochFolio can
            transform your institution’s career readiness programs?
            Reach out to our team—we’re here to help!
          </p>

          <div className="contact-info-grid">
            <div>
              <h4>General Inquiries</h4>
              <p>info@epochfolio.com</p>
              <p>+91 90165 31145</p>
            </div>

            <div>
              <h4>Support</h4>
              <p>support@epochfolio.com</p>
              <p>+91 90165 31145</p>
            </div>

            <div>
              <h4>Partnerships</h4>
              <p>partnerships@epochfolio.com</p>
              <p>+91 90165 31145</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="contact-main">
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p className="card-subtitle">You can reach us anytime</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && (
                <span className="error-text">{errors.firstName}</span>
              )}

              <input
                type="text"
                placeholder="Last Name"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}

              <div className="phone-row">
                <span>+91</span>
                <input type="text" placeholder="123456789" />
              </div>

              <textarea
                name="message"
                placeholder="How can we help ?"
                maxLength="300"
                className={errors.message ? "error" : ""}
              />
              <span className="char-count">0/300</span>

              {errors.message && (
                <span className="error-text">{errors.message}</span>
              )}

              <button type="submit">Submit</button>

              <p className="terms">
                By contacting us, you agree to our{" "}
                <strong>Terms of service</strong> and{" "}
                <strong>Privacy Policy</strong>
              </p>
            </form>
          </div>

          <div className="contact-map">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </section>
      </div>

      {/* ================= SECTION 3 : FAQ ================= */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>FAQs (COMMON QUESTIONS)</h2>

          <FAQItem question="Do you work with startups or only established businesses?" />
          <FAQItem question="Do you work with startups or only established businesses?" />
          <FAQItem question="Do you work with startups or only established businesses?" />
          <FAQItem question="Do you work with startups or only established businesses?" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-container">

          {/* Top - 3 Columns */}
          <div className="footer-top">
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Work</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">About us</a></li>
              </ul>
            </div>
          </div>

          {/* Center - Logo Image & Text */}
          <div className="footer-center">
            <div className="footer-logo-wrapper">
              {/* 👇 Logo image yaha lagao */}
              <img src={footerlogoImg} alt="Epochfolio Logo" />
            </div>
            <p>Organically grow holistic world view of dispute innovaion via empowerment.</p>
          </div>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#" className="social-icon">@</a>
          </div>


          <div className="footer-brand">EPOCHFOLIO</div>
        </div>
        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Epochfolio. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Services</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>

    </>
  );
}
