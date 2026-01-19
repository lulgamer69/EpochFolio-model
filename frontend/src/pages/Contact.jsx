import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const faqs = [
    "What services do you offer?",
    "Do you work with startups or only established businesses?",
    "How long does a typical project take?",
    "Can you design and also build my website?"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s]{8,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (submitting) return;

  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   setSubmitting(true);

  //   setTimeout(() => {
  //     console.log("Secure Contact Data:", form);

  //     setSubmitting(false);
  //     setForm({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //       message: ""
  //     });
  //   }, 800);
  // };

 
  const handleSubmit = async (e) => { // Added 'async'
    e.preventDefault();
    if (submitting) return;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      // used to connect backend
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        // Clear form on success
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert("Server Error: " + data.error);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Could not connect to the server. Make sure your backend is running on port 5000.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-top">

        <motion.div
          className="contact-left"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <h1>Contact Us</h1>
          <p>
            Have questions or want to learn more about how EpochFolio can
            transform your institution’s career readiness programs?
            Reach out to our team—we’re here to help!
          </p>

          <motion.div className="contact-info" variants={fadeUp}>
            <div>
              <strong>General Inquiries</strong>
              <span>info@epochfolio.com</span>
              <span>+91 80165 31145</span>
            </div>
            <div>
              <strong>Support</strong>
              <span>support@epochfolio.com</span>
              <span>+91 80165 31145</span>
            </div>
            <div>
              <strong>Partnerships</strong>
              <span>partnerships@epochfolio.com</span>
              <span>+91 80165 31145</span>
            </div>
          </motion.div>
        </motion.div>

        {/* FORM */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <h2>GET IN TOUCH</h2>
          <p>You can reach us anytime</p>

          <div className="row">

  <div className="input-group">
    <input
      name="firstName"
      placeholder="First Name"
      value={form.firstName}
      onChange={handleChange}
      className={errors.firstName ? "error" : ""}
    />
    <AnimatePresence>
      {errors.firstName && (
        <motion.div
          className="field-error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {errors.firstName}
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  <div className="input-group">
    <input
      name="lastName"
      placeholder="Last Name"
      value={form.lastName}
      onChange={handleChange}
      className={errors.lastName ? "error" : ""}
    />
    <AnimatePresence>
      {errors.lastName && (
        <motion.div
          className="field-error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {errors.lastName}
        </motion.div>
      )}
    </AnimatePresence>
  </div>

</div>

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          <AnimatePresence>
            {errors.email && <motion.div className="field-error">{errors.email}</motion.div>}
          </AnimatePresence>

          <input
            name="phone"
            placeholder="+91 1234567890"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          <AnimatePresence>
            {errors.phone && <motion.div className="field-error">{errors.phone}</motion.div>}
          </AnimatePresence>

          {/* TEXTAREA + COUNTER */}
          <div className="textarea-wrapper">
            <textarea
              name="message"
              placeholder="How can we help?"
              maxLength="300"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            />
            <span className={`char-count ${form.message.length >= 300 ? "limit" : ""}`}>
              {form.message.length}/300
            </span>
          </div>

          <AnimatePresence>
            {errors.message && <motion.div className="field-error">{errors.message}</motion.div>}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.97 }}
          >
            {submitting ? "Submitting..." : "Submit"}
          </motion.button>

          <small>
            By contacting us, you agree to our <span>Terms</span> and <span>Privacy Policy</span>
          </small>
        </motion.form>
      </div>

      {/* BOTTOM */}
      <div className="contact-bottom">
        <motion.div className="contact-map" variants={fadeUp}>
          <iframe
            title="Mumbai"
            src="https://www.google.com/maps?q=Mumbai%20Central&output=embed"
            loading="lazy"
          />
        </motion.div>

        <motion.div className="contact-faq" variants={fadeUp}>
          <div className="faq-header">
            <span className="faq-dot"></span>
            <h3>FAQs (COMMON QUESTIONS)</h3>
          </div>

          {faqs.map((q, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="faq-item" onClick={() => setOpenFaq(isOpen ? null : i)}>
                <div className="faq-question">
                  <span>{q}</span>
                  <motion.span className="faq-plus" animate={{ rotate: isOpen ? 45 : 0 }}>
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div className="faq-answer">
                      <p>
                        Yes. We work with startups, enterprises, and institutions
                        and tailor solutions based on your needs.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
