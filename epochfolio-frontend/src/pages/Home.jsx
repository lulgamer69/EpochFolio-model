  import React from "react";
  import '../styles/Home.css';

  import {
    LuFileSearch,
    LuTrendingUp,
    LuGraduationCap,
    LuShare2,
  } from "react-icons/lu";
  import { PiBook } from "react-icons/pi";
  import { LuGlobe, LuSearch } from "react-icons/lu";


  import {
  LuUser,
  LuSchool,
  LuStar,
  LuPackage,
  LuCheck
} from "react-icons/lu";



  import amity from '../assets/HomePic/Colleges/amityT.png';
  import DelhiUniversity from '../assets/HomePic/Colleges/DelhiUT.png';
  import DSU from '../assets/HomePic/Colleges/DSUT.png';
  import Manchester from '../assets/HomePic/Colleges/MANCHESTERUT.png';
  import  MIT from '../assets/HomePic/Colleges/MITT.png';
  import punjabU from '../assets/HomePic/Colleges/PunjabUniversityT.png';
  import symbiosis from '../assets/HomePic/Colleges/symbiosisT.png';
  import TMU from '../assets/HomePic/Colleges/TMUT.png';
  import UPES from '../assets/HomePic/Colleges/UPEST.png';
 


 const college = [
  { type: "title", label: "OUR CLIENTS" },
  { type: "divider" },
  { type: "logo", src: amity },
  { type: "logo", src: DelhiUniversity },
  { type: "logo", src: DSU },
  { type: "logo", src: Manchester },
  { type: "logo", src: MIT },
  { type: "logo", src: punjabU},
  { type: "logo", src: symbiosis },
  { type: "logo", src: TMU},
  { type: "logo", src: UPES}
];



import TCS from '../assets/HomePic/Companies/TCS.png';
import HYAT from '../assets/HomePic/Companies/HYATT.png';
import ITC from '../assets/HomePic/Companies/ITC.png';
import ADROIT from '../assets/HomePic/Companies/ADROIT.png';
import AIRTEL from '../assets/HomePic/Companies/AIRTEL.png';
import CORIZON from '../assets/HomePic/Companies/CORIZON.png';
import KPMG from '../assets/HomePic/Companies/KPMG.png';
import BLINKIT from '../assets/HomePic/Companies/BLINKIT.png';
import amazon from '../assets/HomePic/Companies/amazonT.png';
import fk from '../assets/HomePic/Companies/flipkartT.png';





 const company = [
  { type: "title", label: "OUR CLIENTS" },
  { type: "divider" },
  { type: "logo", src: TCS },
  { type: "logo", src: amazon },
  { type: "logo", src: fk },
  { type: "logo", src: AIRTEL },
  { type: "logo", src: HYAT },
  { type: "logo", src: ITC},
  { type: "logo", src: ADROIT },
  { type: "logo", src: KPMG },
  { type: "logo", src: BLINKIT },
  { type: "logo", src: CORIZON }
];


  import img1 from '../assets/HomePic/man.png';
  import img2 from '../assets/HomePic/women.png';
  import img3 from '../assets/HomePic/mohit.png';
  import img4 from '../assets/HomePic/man2.png';
  import img5 from '../assets/HomePic/man3.png';




  import hand from '../assets/HomePic/HandShake.png';
  import abulb from '../assets/HomePic/bulb.png';
  import conference from '../assets/HomePic/conference.png';
  import gd from '../assets/HomePic/groupdiscussion.png';
  import gc from '../assets/HomePic/growthchart.png';
  import highfi from '../assets/HomePic/highfi.png';
  import hn from '../assets/HomePic/human-network.png';
  import lspeaker from '../assets/HomePic/loudSpeaker.png';
  import rating from '../assets/HomePic/rating.png';

  // import Footer from '../components/Footer.jsx';


  export default function Home() {
    return (
      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          {/* BACKGROUND IMAGE */}
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${hand})` }}
          ></div>

          {/* OVERLAY */}
          <div className="hero-overlay"></div>

          {/* TITLE */}
          <h1 className="hero-title">
            One Platform.<br />
            Smarter Hiring.<br />
            Stronger Careers.
          </h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle">
            Connecting colleges, candidates, and companies through one
            career ecosystem.
          </p>

          {/* BUTTONS */}
          <div className="hero-cta">
            <button className="cta-primary">
              Get Started Now
            </button>
            <button className="cta-secondary">
              Join the EpochFolio Network
            </button>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="stats-bar">
          <div className="stat">
            <span className="check">✔</span>
            <span>10,000+ Students Placed</span>
          </div>
          <div className="stat">
            <span className="check">✔</span>
            <span>500+ College Partners</span>
          </div>
          <div className="stat">
            <span className="check">✔</span>
            <span>98% Success Rate</span>
          </div>
        </section>
{/*The who section */}
        {/* WHO IS EPOCHFOLIO */}
        <section className="who">
          <h2>
            WHO IS <span>EPOCHFOLIO?</span>
          </h2>
          <p>
            EpochFolio is a next-gen human resource and campus-industry
            collaboration platform dedicated to connecting top talent with
            the right opportunities. We empower colleges, students, and
            companies through tailored training, guaranteed placements, and
            impactful partnerships that transform potential into success.
          </p>
        </section>

{/*The what section  with the cards  */}
              {/* WHAT WE DO BEST FOR COMPANIES */}
        <section className="companies-section">
          <h2 className="companies-title">
            WHAT WE DO BEST FOR YOUR <span>COMPANIES</span>
          </h2>

          <div className="companies-cards">
            {/* Card 1 */}
            <div className="company-card">
              <img
                src={conference}
                alt="Intern to Hire Program"
                className="company-card-img"
              />
              <div className="company-card-body">
                <h3>Intern to Hire Program</h3>
                <p>Real ROI with 2-month trial phase</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="company-card">
              <img
                src={highfi}
                alt="Fast & Reliable Matches"
                className="company-card-img"
              />
              <div className="company-card-body">
                <h3>Fast & Reliable Matches</h3>
                <p>AI-based profiles + human screening</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="company-card">
              <img
                src={conference}
                alt="Pan-India Talent Pool"
                className="company-card-img"
              />
              <div className="company-card-body">
                <h3>Pan-India Talent Pool</h3>
                <p>From Tier 1, 2, and 3 colleges</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="company-card">
              <img
                src={gd}
                alt="Easy Onboarding Support"
                className="company-card-img"
              />
              <div className="company-card-body">
                <h3>Easy Onboarding Support</h3>
                <p>Our team coordinates everything</p>
              </div>
            </div>
          </div>
        </section>
  {/* WHY COLLEGES PREFER US */}
  <section className="colleges-section">
    <h2 className="colleges-title">
      WHAT WE DO BEST FOR YOUR <span>COLLEGES</span>
    </h2>

    {/* TOP ROW — 3 CARDS */}
    <div className="colleges-row-top">
      <div className="college-card">
        <img src={abulb} className="college-card-img" />
        <div className="college-card-body">
          <h3>Curriculum Integration</h3>
          <p>Centralized platform for managing all placement activities</p>
        </div>
      </div>

      <div className="college-card">
        <img src={gc} className="college-card-img" />
        <div className="college-card-body">
          <h3>Guaranteed Placement</h3>
          <p>Backed by MoUs and tracked results</p>
        </div>
      </div>

      <div className="college-card">
        <img src={hn} className="college-card-img" />
        <div className="college-card-body">
          <h3>Industry Connect</h3>
          <p>50+ live sessions, 12 hiring events/year, expert webinars</p>
        </div>
      </div>
    </div>

    {/* BOTTOM ROW — 2 CARDS CENTERED */}
    <div className="colleges-row-bottom">
      <div className="college-card">
        <img src={lspeaker} className="college-card-img" />
        <div className="college-card-body">
          <h3>Visibility & Branding</h3>
          <p>National recognitions, TPO awards, and joint showcases</p>
        </div>
      </div>

      <div className="college-card">
        <img src={rating} className="college-card-img" />
        <div className="college-card-body">
          <h3>Dedicated Success Manager</h3>
          <p>Because your students’ future matters</p>
        </div>
      </div>
    </div>
  </section>
  {/*our core services at a glans along with the 6 cards coming with it*/}
  <section className="core-services">
    <h2 className="core-services-title">
      OUR CORE <span>SERVICES</span> AT A GLANCE
    </h2>

    <div className="core-services-grid">
      <div className="feature-card">
        <div className="icon-box">
          <PiBook size={24} />
        </div>
        <div className="feature-content">
          <h3>Industry-Aligned Training</h3>
          <p>Industry-designed training to build job-ready skills.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-box">
          <LuFileSearch size={24} />
        </div>
        <div className="feature-content">
          <h3>Internship & Trial Periods</h3>
          <p>Smart matching of students with relevant internships and roles.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-box">
          <LuTrendingUp size={24} />
        </div>
        <div className="feature-content">
          <h3>Final Placement Drives & Grooming</h3>
          <p>End-to-end preparation for successful campus placements.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-box">
          <LuGraduationCap size={24} />
        </div>
        <div className="feature-content">
          <h3>Colleges Branding & National Visibility</h3>
          <p>Building national visibility for institutions.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-box">
          <LuShare2 size={24} />
        </div>
        <div className="feature-content">
          <h3>Corporate HR Connects & CSR Projects</h3>
          <p>Connecting students with impactful CSR and industry initiatives.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-box icon-globe-search">
          <LuGlobe className="globe-icon" />
          <LuSearch className="search-icon" />
        </div>
        <div className="feature-content">
          <h3>AI-Based Student Tracker, Smart Placement Portal</h3>
          <p>AI-powered dashboard for smarter placement management.</p>
        </div>
      </div>
    </div>
  </section>


 {/* SHAPE DIVIDER BELOW CORE SERVICES */}
  <section className="common">
    
   {/* SHAPE DIVIDER BELOW CORE SERVICES */}

    <div className="blue-section">
     
     <div className="custom-shape-divider-top-1769194965">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
      </svg>
    </div>
<div className="trusted-content">

  <h2 className="trusted-title">
    Trusted By <span>Thousands</span>
  </h2>

  <div className="trusted-stats">
    <div className="trusted-item">
      <div className="trusted-icon">
        <LuUser size={30} />
      </div>
      <h3>10,000+</h3>
      <p>Students Placed</p>
    </div>

    <div className="trusted-item">
      <div className="trusted-icon">
        <LuSchool size={30} />
      </div>
      <h3>22+</h3>
      <p>College Partners</p>
    </div>

    <div className="trusted-item">
      <div className="trusted-icon">
        <LuGraduationCap size={30} />
      </div>
      <h3>98%</h3>
      <p>Success Rate</p>
    </div>

    <div className="trusted-item">
      <div className="trusted-icon">
        <LuStar size={30} />
      </div>
      <h3>30+</h3>
      <p>
        Corporate Partners <br /> in pipeline
      </p>
    </div>

    <div className="trusted-item">
      <div className="trusted-icon">
        <LuPackage size={30} />
      </div>
      <h3>15+</h3>
      <p>
        Skill Training <br /> Modules Launched
      </p>
    </div>

    <div className="trusted-item">
      <div className="trusted-icon">
        <LuCheck size={30} />
      </div>
      <h3>98%</h3>
      <p>
        Internships <br /> Facilitated
      </p>
    </div>
  </div>

</div>
    </div>
    
</section>
{/*Our clients section along with the title and the infinite loop */}
    <section className="our-clients">
      <div className="clients-wrapper">
        <span className="line" />

        <h2 className="clients-title">
          OUR <span>CLIENTS</span>
        </h2>

        <span className="line" />
      </div>
    </section>
{/*The infinite belt */}
      <section className="clients-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...company, ...company].map((company, index) => {
            if (company.type === "title") {
              return (
                <div className="marquee-title" key={index}>
                  OUR CLIENTS
                </div>
              );
            }

            if (company.type === "divider") {
              return <div className="marquee-divider" key={index} />;
            }

            return (
              <div className="logo-card" key={index}>
                <img src={company.src} alt="client logo" />
              </div>
            );
          })}
        </div>
      </div>
    </section>



{/*Our our college partners  section along with the title and the infinite loop */}

<section className="our-clients">
      <div className="clients-wrapper">
        <span className="line" />

        <h2 className="clients-title">
          OUR <span>COLLEGE PARTNERS</span>
        </h2>

        <span className="line" />
      </div>
    </section>



{/*The infinite belt */}
      <section className="clients-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...college, ...college].map((college, index) => {
            if (college.type === "title") {
              return (
                <div className="marquee-title1" key={index}>
                  OUR <br/>COLLEGE <br/> PARTNERS
                </div>
              );
            }

            if (college.type === "divider") {
              return <div className="marquee-divider" key={index} />;
            }

            return (
              <div className="logo-card" key={index}>
                <img src={college.src} alt="client logo" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
{/*The picture section which says why why companies love working with us  */}

  <section className="testimonials-section">
    <div className="testimonials-container">
      <h2 className="testimonials-title">
        WHY COLLEGES AND COMPANIES
        <span>LOVE WORKING WITH US</span>
      </h2>

      <p className="testimonials-quote">
        <span className="quote-mark">“</span>
        Without any doubt I recommend Epochfolio as one of the best in the
        industry. One of the best. I’ve came across so far. Wouldn’t be
        hesitated to introduce their work to someone else.
        <span className="quote-mark">”</span>
      </p>

      {/* avatars row (structure only) */}
    

    <div className="testimonials-avatars">

    <div className="testimonial-person">
      <div className="avatar small">
      <img src={img1} alt="Romeena De Silva" />
    </div>
      <div className="stars small">★★★★★</div>
      <h4 className="person-name">Romeena De Silva</h4>
      <p className="person-role">Developer</p>
    </div>

    <div className="testimonial-person">
      <div className="avatar small">
      <img src={img2} alt="Romeena De Silva" />
    </div>
      <div className="stars small">★★★★★</div>
      <h4 className="person-name">Romeena De Silva</h4>
      <p className="person-role">Software</p>
    </div>

    {/* CENTER (highlighted) */}
    <div className="testimonial-person center">
      <div className="avatar large">
      <img src={img3} alt="Mohit" />
    </div>
      <div className="stars">★★★★★</div>
      <h3 className="person-name highlight">Mohit</h3>
      <p className="person-role highlight">Software Engineer</p>
    </div>

    <div className="testimonial-person">
      <div className="avatar small">
      <img src={img4} alt="Romeena De Silva" />
    </div>
      <div className="stars small">★★★★★</div>
      <h4 className="person-name">Romeena De Silva</h4>
      <p className="person-role">Amazon</p>
    </div>

    <div className="testimonial-person">
      <div className="avatar small">
      <img src={img5} alt="Romeena De Silva" />
    </div>
      <div className="stars small">★★★★★</div>
      <h4 className="person-name">Romeena De Silva</h4>
      <p className="person-role">Airtel</p>
    </div>

  </div>
      
    </div>
  </section>
{/*The email section  */}


 <section className="email">
      <div className="email-content">

       <h1 className="hover-heading">
  <span>Let’s</span> <span>Build</span> <span>the</span> <span>Future</span> <span>Together</span>
</h1>


        <p>
          Join 250+ companies and 100+ colleges transforming campus
          recruitment. Start your journey with Epochfolio today.
        </p>

        <div className="email-form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your work Email"
            autoComplete="email"
            required
          />
          <button type="submit">
            Get Started <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
      </main>
    );
  }

