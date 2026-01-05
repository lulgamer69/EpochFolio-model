import "./About.css";
import logo from "../assets/epochfolio-logo.png";
import heroImg from "../assets/hero-illustration.png";
import missionImg from "../assets/mission-success.png";
import OurmissionImg from "../assets/Ourmission.png";
import architecturalImg from "../assets/architectural.png";
import naitikImg from "../assets/NaitikJoshi.png";  // ✅ Fixed - no space
import niteshImg from "../assets/NiteshSharma.png";
import footerlogoImg from "../assets/epochfolio-footer-logo.png";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="about-page">

      {/* ========== 1. HERO SECTION - FIRST ========== */}
      <section className="hero">

        {/* Image LEFT */}
        <div className="hero-image">
          <img src={heroImg} alt="Student success illustration" />
        </div>

        {/* Text RIGHT */}
        <div className="hero-text">
          <h1>
            Every student, regardless of their background, deserves a real
            chance at success.
          </h1>
        </div>

      </section>


      {/* 2. ABOUT SECTION */}
      <section className="about-section">
        <div className="about-image">
          <img src={missionImg} alt="Student working illustration" />
        </div>
        <div className="about-text">
          <p>
            The EpochFolio, we are not just tackling the problem
            of poor placements — we're redefining what's possible for millions
            of students who've been overlooked, underserved, and underestimated
            by the traditional system.
          </p>
        </div>
      </section>



      {/* 3. MISSION SECTION */}
      <section className="mission">
        <div className="mission-image-center">
          <img src={OurmissionImg} alt="Mission target illustration" />
        </div>
        <div className="mission-content">
          <h2>OUR MISSION</h2>
          <div className="mission-text">
            <p>
              In today's world, a degree isn't enough. Students from Tier 2 and
              Tier 3 colleges, rural campuses, and small towns often find
              themselves stuck in a cycle of endless online courses, broken
              promises, and recruiters who never call back. We've lived that
              reality. And we decided to change it.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VISION SECTION */}
      <section className="vision-section">
        <div className="vision-background">
          <img src={architecturalImg} alt="Vision background" />
        </div>
        <div className="vision-content">
          <h2>OUR VISION</h2>
          <p>
            A future where no capable student is left behind because of a lack of
            network, exposure, or opportunity.
          </p>
        </div>
      </section>


      {/* FOUNDERS SECTION */}
      <section className="founders">
        <h2>OUR FOUNDERS</h2>

        <div className="founder-cards">

          {/* FOUNDER 1 */}
          <div className="founder-card">
            <img
              src={naitikImg}
              alt="Naitik Joshi"
              className="founder-image"
            />
            <h3>Naitik Joshi</h3>
            <span>Founder</span>

            <p>
              "I wasn't from a Tier 1 college. I didn't have IIT–IIM networks.
              But I had fire. I built EpochFolio for students like me — who just
              need one chance to change everything."
            </p>
          </div>

          {/* FOUNDER 2 */}
          <div className="founder-card">
            <img
              src={niteshImg}
              alt="Nitesh Kumar Sharma"
              className="founder-image"
            />
            <h3>Nitesh Kumar Sharma</h3>
            <span>Co-Founder</span>

            <p>
              With over 10 years of experience working closely with companies,
              colleges, and students, I understand the placement ecosystem and
              the real gaps that need to be solved.
            </p>
          </div>

        </div>
      </section>
    <Footer/>


    </div>
  );
}
