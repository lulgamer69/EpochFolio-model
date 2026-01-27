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
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive suite of talent transformation services including industry-aligned training programs, skill assessments, campus-to-corporate initiatives, student upskilling, and recruitment solutions. Our services bridge the gap between education and employability, helping colleges prepare job-ready graduates and enabling companies to hire pre-qualified, deployment-ready candidates."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with institutions of all sizes—from startups to large enterprises. Our solutions are scalable and tailored to meet the specific needs of colleges, students, and companies at every stage of their growth journey. We're committed to building long-term talent infrastructure rather than operating transactionally."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and requirements. Our campus-to-corporate programs typically span a semester, while individual training modules can be customized to fit academic calendars. We work closely with our partners to create implementation schedules that align with their goals and constraints."
    },
    {
      question: "How does EpochFolio differ from traditional HR firms?",
      answer: "Unlike traditional HR firms that operate transactionally, EpochFolio builds long-term talent infrastructure. We work at the intersection of colleges, students, and companies to create a structured, skill-first talent ecosystem. Our focus is on sustainable outcomes through partnerships, upskilling, and system-based approaches that scale across India."
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

// 🔥 BACKEND CALL (IMMEDIATE)
fetch("http://localhost:5000/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    message: form.message,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Mail API response:", data);
  })
  .catch((err) => {
    console.error("Mail API error:", err);
  });
    setTimeout(() => {
      console.log("Secure Contact Data:", form);
      
      setSubmitting(false);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 800);
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
              <strong>Contact</strong>
              <span>contact@epochfolio.com</span>
              <span>+91 73832 20044</span>
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

          <motion.div
            className="faq-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  className="faq-item"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <motion.span
                      className="faq-plus"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
