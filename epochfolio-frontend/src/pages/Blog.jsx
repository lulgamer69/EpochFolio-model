import { useState } from "react";
import "../styles/Blog.css";
const base = import.meta.env.BASE_URL;


const blogData = [
  {
    title: "The Future of AI in Education",
    shortDesc:
      "Explore how artificial intelligence is transforming the education sector...",
    fullDesc:
      "Explore how artificial intelligence is transforming the education sector, enhancing personalized learning experiences, automating assessments, supporting teachers, and creating adaptive learning paths for students worldwide.",
    img: `${base}/BlogPics/firstAi.jpg` ,
  },
  {
    title: "Unlocking Your Potential: A Guide to Personal Development",
    shortDesc:
      "Discover practical strategies to unlock your true potential...",
    fullDesc:
      "Discover practical strategies to unlock your true potential and achieve personal growth through goal setting, discipline, habit building, and continuous self-reflection.",
    img: `${base}/BlogPics/secUnlock.jpg`,
  },
  {
    title: "The Importance of Lifelong Learning",
    shortDesc:
      "Learn why continuous learning is essential for career growth...",
    fullDesc:
      "Learn why continuous learning is essential for career growth, adaptability in changing industries, personal fulfillment, and staying relevant in a fast-changing world.",
    img:`${base}/BlogPics/thirdlifelong.jpg`,
  },
  {
    title: "Building a Strong Personal Brand Online",
    shortDesc:
      "Tips and techniques to build a powerful online presence...",
    fullDesc:
      "Tips and techniques to build a powerful online presence through social media, professional networking platforms, content creation, and personal storytelling.",
    img: `${base}/BlogPics/fourthOnlineBrand.jpg`,
  },
  {
    title: "The Role of Emotional Intelligence",
    shortDesc:
      "Understand how emotional intelligence impacts leadership...",
    fullDesc:
      "Understand how emotional intelligence impacts leadership, teamwork, communication, conflict resolution, and long-term professional success.",
    img: `${base}/BlogPics/fifthEmotional.jpg`,
  },
  {
    title: "Navigating the Gig Economy",
    shortDesc:
      "Opportunities and challenges of the gig economy...",
    fullDesc:
      "Explore the opportunities and challenges of the gig economy, including flexibility, income stability, skill development, and long-term career planning.",
    img: `${base}/BlogPics/sixNavigate.jpg`,
  },
  {
    title: "The Power of Networking",
    shortDesc:
      "How strong connections open career opportunities...",
    fullDesc:
      "Learn how building strong professional connections opens doors to new career opportunities, mentorship, collaborations, and long-term growth.",
    img: `${base}/BlogPics/sevenNetworking.jpg`,
  },
  {
    title: "The Impact of Technology on Modern Workplaces",
    shortDesc:
      "How technology is reshaping modern work culture...",
    fullDesc:
      "A detailed look at how technology is reshaping modern work culture through remote work, automation, AI tools, and digital collaboration platforms.",
    img:`${base}/BlogPics/eightTech.jpg`,
  },
  {
    title: "Achieving Work-Life Balance",
    shortDesc:
      "Ways to maintain balance in a busy professional life...",
    fullDesc:
      "Practical strategies to maintain a healthy work-life balance, reduce burnout, manage time effectively, and improve overall well-being.",
    img:`${base}/BlogPics/nineWorklife.jpg`, 
  },
];

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleReadMore = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero">
        <img
          src={`${base}/BlogPics/a.jpg`} 
          alt="Blog Hero"
          loading="lazy"
        />
      </div>

      {/* Blog Cards */}
      <div className="blog-container">
        {blogData.map((item, index) => (
          <div className="blog-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="blog-content">
              <h3>{item.title}</h3>

              <p>
                {activeIndex === index
                  ? item.fullDesc
                  : item.shortDesc}
              </p>

              <span
                className="read-more"
                onClick={() => handleReadMore(index)}
              >
                {activeIndex === index ? "Show Less" : "Read More"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
