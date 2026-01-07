import './HomePage.css';
import chartBg from '../assets/HomePage/chart-Background.png';
import image1 from '../assets/HomePage/coreServicesImg.png';
import image2 from '../assets/HomePage/degree.png';
import image3 from '../assets/HomePage/hall.png';
import hand from '../assets/HomePage/hand.png';
import plan from '../assets/HomePage/plan.png';
import write from '../assets/HomePage/write.png';
import sup from '../assets/HomePage/support.png';
import time from '../assets/HomePage/timeTracking.png';
import zrisk from '../assets/HomePage/zeroRisk.png';
import aplan from '../assets/HomePage/affordablePlan.png';
import founder from '../assets/HomePage/foundersVision.png';

import Footer from "../components/footer";

function HomePage() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section className="homepage-container">
        <div className="homepage-content">
          <h1 className="homepage-title">
            Transformation Placement Empowering Futures
          </h1>

          <p className="homepage-description">
            India's most ambitious HR partner for colleges & companies offering
            guaranteed placements, real-time hiring solutions, and deep industry
            collaborations
          </p>

          <div className="homepage-buttons">
            <button className="button button-primary">
              Request a demo
            </button>
            <button className="button button-secondary">
              Join as a partner
            </button>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="homepage-impact-container">
        <img
          src={chartBg}
          alt="Impact background"
          className="homepage-impact-image"
        />

        <div className="homepage-impact-bar">
          <h2 className="homepage-title">Our Impact</h2>
          <p className="homepage-description">
            We've helped numerous colleges and companies achieve their placement
            goals, resulting in successful student placements.
          </p>
        </div>
      </section>

      {/* ================= PATTERN BACKGROUND SECTION ================= */}
<section className="pattern-background">
  <div className="who-we-are-content">
    <h1 className="who-title">Who are we?</h1>

    <p className="who-text">
      We are proud to be the choice of top training & placement officers and
      institutions across the country, helping streamline campus hiring
      processes
    </p>

    <div className="who-image">
      <img src={hand} alt="Team collaboration" />
    </div>
    <p className="who-caption">trusted by 20+ tpo</p>

    <div className="who-image">
      <img src={plan} alt="Team collaboration" />
    </div>
    <p className="who-caption">
      Built by campus leaders and Industry experts
    </p>

    <div className="who-image">
      <img src={write} alt="Team collaboration" />
    </div>
    <p className="who-caption">
      Serving Companies for free in year one
    </p>
  </div>
  <div className="our-impact-content">
          <h2 className="impact-title">Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-row">
              <div className="impact-card">
                <p className="impact-text">22 Colleges Onboarded and<br />1000+ Students Trained</p>
              </div>
              <div className="impact-card">
                <p className="impact-text">500+ Internships Facilitated</p>
              </div>
              <div className="impact-card">
                <p className="impact-text">30+ Corporate Partners in Pipeline</p>
              </div>
            </div>
            <div className="impact-row">
              <div className="impact-card">
                <p className="impact-text">15+ Skill Training Modules Launched</p>
              </div>
              <div className="impact-card">
                <p className="impact-text">Hosted TPO Excellence Awards 2025 with<br />100+ dignitaries</p>
              </div>
            </div>
          </div>
        </div>


 <div className="who-we-are-content">
    <h1 className="who-title">Why Colleges & Companies Trust Epochfolio</h1>
    <h1 className="who-title"></h1>

    <p className="who-text">
     Effortlessly streamline your campus placement process by accessing the latest job openings, managing student data, and securing interviews, all with the aim of achieving a 100% campus placement success rate.
    </p>
  </div>

  <div className="who-image-raw">
  <img src={sup} alt="End-to-End Support" />
</div>

   <div className="who-image-raw">
  <img src={time} alt="End-to-End Support" />
</div>

<div className="who-image-raw">
  <img src={zrisk} alt="End-to-End Support" />
</div>

<div className="who-image-raw">
  <img src={aplan} alt="End-to-End Support" />
</div>

<div className="who-image-raw">
  <img src={founder} alt="End-to-End Support" />
</div>

   
  <div className="custom-shape-divider-bottom-1767423273">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="shape-fill"
      />
    </svg>
  </div>
</section>


      <section className="white-section">
        {/* content on white background */}
      </section>

      <section className="core-services-section">
        <h2 className="core-services-heading">
          Core services at a glance
        </h2>
      </section>

      {/* ===== Core Services Image Section ===== */}
      <section className="core-services-image-section">
        <div className="core-services-card">
          <img
            src={image1}
            alt="Students collaborating and studying together"
            className="core-services-image"
          />
          <div className="core-services-overlay"></div>
          <div className="core-services-text bottom">
            <h2>
            Internship<br/>
            Matching & Trial<br/>
            Periods
            </h2>
          </div>
        </div>
      </section>

      {/* ===== Core Services Image Section – Image 2 ===== */}
      <section className="core-services-image-section-alt">
        <div className="core-services-card-alt">
          <img
            src={image2}
            alt="Career guidance and mentorship"
            className="core-services-image-alt"
          />
          <div className="core-services-overlay-alt"></div>
          <div className="core-services-text-alt bottom">
            <h2>Industry-Aligned<br/>
              Mentorship</h2>
          </div>
        </div>
      </section>

      {/* ===== Core Services Image Section – Image 3 ===== */}
      <section className="core-services-image-section-v3">
        <div className="core-services-card-v3">
          <img
            src={image3}
            alt="Industry-aligned mentorship"
            className="core-services-image-v3"
          />
          <div className="core-services-overlay-v3"></div>
          <div className="core-services-text-v3">
            <h2>Final Placement<br/>
            Drives & Grooming</h2>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-content">
          <h1 className="partner-heading">
            Let's Build the Future <br /> Together
          </h1>

          <p className="partner-subtext">
            Whether you're a company hiring talent or a college improving
            placement performance, EpochFolio is your growth partner.
          </p>

          <button className="partner-button">
            Partner with us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
