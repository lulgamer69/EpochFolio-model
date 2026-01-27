import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/epochfolio-footer-logo.png";
import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {/* TOP */}
      <div className="footer-top">

        {/* LEFT COLUMNS */}
        <motion.div
          className="footer-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >

          {[
  {
    title: "Legal",
    links: [
      { label: "About Us", route: "/about" },
      { label: "Blog", route: "/blog" },
      { label: "Career", route: "#" },
      { label: "Contact", route: "/contact" }
    ]
  },
  {
    title: "Work",
    links: [
    { label: "Features", route: "/features" }
    ]
  }
].map((col) => (
            <motion.div
              key={col.title}
              className="footer-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a 
                  key={link.label}
                  onClick={() => handleNavigation(link.route)}
                  style={{ cursor: "pointer" }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          ))}

        </motion.div>

        {/* RIGHT BRAND */}
        <div className="footer-brand">

          <motion.img
            src={logo}
            alt="Epochfolio"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Organically grow holistic world view of dispute
            innovation via empowerment.
          </motion.p>

          <motion.div
            className="footer-socials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            {[
              { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/epochfolio-pvt-ltd/?originalSubdomain=in" },
              { Icon: FaInstagram, url: "https://www.instagram.com/epoch_folio/" },
              { Icon: FaEnvelope, url: "mailto:contact@epochfolio.com" }
            ].map((social, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 25px rgba(245,145,24,0.45)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => handleExternalLink(social.url)}
                style={{ cursor: "pointer" }}
              >
                <social.Icon />
              </motion.span>
            ))}
          </motion.div>

        </div>

      </div>

      {/* DIVIDER */}
      <motion.div
        className="footer-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span>© 2025 Epochfolio. All rights reserved.</span>

        <div className="footer-policies">
          <a>Privacy Policy</a>
          <a>Terms of Services</a>
          <a>Cookie Policy</a>
        </div>
      </motion.div>

      {/* WATERMARK */}
      <motion.div
        className="footer-watermark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        EPOCHFOLIO
      </motion.div>

    </motion.footer>
  );
};

export default Footer;
