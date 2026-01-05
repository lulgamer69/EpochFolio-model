import { useState } from "react";
import "./Blog.css";
import logo from "../assets/epochfolio-logo.png";
import heroImg from "../assets/hero-illustration.png";
import missionImg from "../assets/mission-success.png";
import OurmissionImg from "../assets/Ourmission.png";
import architecturalImg from "../assets/architectural.png";
import naitikImg from "../assets/NaitikJoshi.png";  // ✅ Fixed - no space
import niteshImg from "../assets/NiteshSharma.png";
import footerlogoImg from "../assets/epochfolio-footer-logo.png";

const blogData = [
  {
    title: "The Future of AI in Education",
    desc:
      "Explore how artificial intelligence is transforming the education landscape, offering personalized learning experiences and automating administrative tasks.",
    extra:
      " With tools like intelligent tutoring systems, automated grading, and predictive analytics, AI is helping educators identify learning gaps early and deliver customized content that improves student outcomes.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  },
  {
    title: "Unlocking Your Potential: A Guide to Career Development",
    desc:
      "Discover practical strategies and tips to advance your career, set meaningful goals, and achieve professional success.",
    extra:
      " Career growth also depends on self-awareness, continuous skill development, networking, and the ability to adapt to changing industry demands over time.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    title: "The Importance of Lifelong Learning in a Changing World",
    desc:
      "Understand why continuous learning is crucial for personal and professional growth in today's rapidly evolving global landscape.",
    extra:
      " Lifelong learning helps individuals stay relevant, build resilience, and confidently handle new technologies, roles, and responsibilities throughout their careers.",
    image: "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg",
  },
  {
    title: "Building a Strong Personal Brand Online",
    desc:
      "Learn how to effectively build and manage your personal brand in the digital age to enhance your professional opportunities.",
    extra:
      " By sharing valuable content, maintaining consistency across platforms, and showcasing your expertise, you can build credibility and attract the right opportunities online.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    title: "The Role of Emotional Intelligence in Leadership",
    desc:
      "Understand why emotional intelligence is a critical skill for effective leadership and how it can be developed.",
    extra:
      " Leaders with high emotional intelligence communicate better, manage conflicts effectively, and create positive work environments that motivate teams to perform at their best.",
    image: "https://images.pexels.com/photos/3861956/pexels-photo-3861956.jpeg",
  },
  {
    title: "Navigating the Gig Economy: Opportunities and Challenges",
    desc:
      "Explore the rise of the gig economy, its benefits, and the potential challenges for freelancers and independent contractors.",
    extra:
      " While flexibility and independence are major advantages, gig workers must also manage income stability, skill upgrades, and long-term career planning on their own.",
    image: "https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg",
  },
  {
    title: "The Power of Networking in Professional Growth",
    desc:
      "Discover how building and maintaining a strong professional network can open doors to new opportunities and collaborations.",
    extra:
      " Meaningful networking goes beyond exchanging contacts; it involves building genuine relationships that support learning, collaboration, and long-term career success.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    title: "The Impact of Technology on Modern Workplaces",
    desc:
      "Examine how technological advancements are reshaping the modern work environment, influencing productivity and collaboration.",
    extra:
      " From remote work tools to automation and cloud platforms, technology is enabling faster communication, flexible work models, and more efficient business processes.",
    image: "https://images.pexels.com/photos/1181223/pexels-photo-1181223.jpeg",
  },
  {
    title: "Achieving Work-Life Balance in a Demanding World",
    desc:
      "Learn practical strategies to maintain a healthy work-life balance, reduce stress, and improve overall well-being.",
    extra:
      " Setting boundaries, prioritizing mental health, and managing time effectively can help individuals stay productive while maintaining a fulfilling personal life.",
    image: "https://images.pexels.com/photos/4050292/pexels-photo-4050292.jpeg",
  },
];

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleReadMore = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
      <>
    <div className="blog-page">
      <div className="blog-container">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <h2>{blog.title}</h2>

              <p>
                {blog.desc}
                {openIndex === index && (
                  <span className="extra-text">
                    {blog.extra}
                  </span>
                )}
              </p>

              <span
                className="read-more"
                onClick={() => handleReadMore(index)}
              >
                {openIndex === index ? "Show Less" : "Read More"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
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
};

export default Blog;
