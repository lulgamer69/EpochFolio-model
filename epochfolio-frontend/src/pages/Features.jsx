import React from "react";
import '../styles/Home.css'; 

import tracking from '../assets/HomePic/feature/tracking.png';
import zr from '../assets/HomePic/feature/zeroRisk.png';
import ap from '../assets/HomePic/feature/affordablePlan.png';
import support from '../assets/HomePic/feature/support.png';
import fv from '../assets/HomePic/feature/foundersVision.png';

export default function Features() {
  return (
    <main>


      <section className="who">
        <h1>
        Why <span>Colleges</span> & <span>Companies</span> <br/> Trust <span>Epochfolio</span>
        </h1>

        <div class="p1">Effortlessly streamline your campus placement process by accessing the latest job opening, managing student data, and securing interviews, all with the aim of achieving a 100% campus placement sucess rate.</div>
      </section>

        <section className="college-section">
        
           {/* TOP ROW — 3 CARDS */}
            <div className="colleges-row-top1">
              <div className="college-card">
                <img src={tracking} className="college-card-img" />
                <div className="college-card-body">
                  <h3>Curriculum Integration</h3>
                  <p>Centralized platform for managing all placement activities</p>
                </div>
              </div>
        
              <div className="college-card">
                <img src={zr} className="college-card-img" />
                <div className="college-card-body">
                  <h3>Guaranteed Placement</h3>
                  <p>Backed by MoUs and tracked results</p>
                </div>
              </div>
        
              <div className="college-card">
                <img src={ap} className="college-card-img" />
                <div className="college-card-body">
                  <h3>Industry Connect</h3>
                  <p>50+ live sessions, 12 hiring events/year, expert webinars</p>
                </div>
              </div>
            </div>
        
            {/* BOTTOM ROW — 2 CARDS CENTERED */}
            <div className="colleges-row-bottom1">
              <div className="college-card">
                <img src={support} className="college-card-img" />
                <div className="college-card-body">
                  <h3>Visibility & Branding</h3>
                  <p>National recognitions, TPO awards, and joint showcases</p>
                </div>
              </div>
        
              <div className="college-card">
                <img src={fv} className="college-card-img" />
                <div className="college-card-body">
                  <h3>Dedicated Success Manager</h3>
                  <p>Because your students’ future matters</p>
                </div>
              </div>
            </div>
      </section>
    </main>
  );
}
