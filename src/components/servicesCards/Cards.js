import React from "react";
import "./Cards.css";
import Fade from 'react-reveal/Fade';

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
// import Card3 from "../../assets/card3.jpg";
import Card4 from "../../assets/card4.jpg";

const Cards = () => {
  return (
    <>
    <div className="section-bg">
      <div id="cards">
        <div className="main-cards-header container">
          <h1>Detox Program Options and Available Services</h1>
          <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
        </div>



      <div className="cards-flex container">

      <Fade top>
        <div className="services-card">
          <img src={Card1} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Addiction Treatment</h1>
              <p className="card-text"> This intensive, structured program provides a comprehensive level of care for individuals seeking a dedicated and supportive environment on their path to recovery from mental health and addiction challenges.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/substance-abuse">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>
      </Fade>

      <Fade top>
        <div className="services-card">
          <img src={Card2} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Detox Programs</h1>
              <p className="card-text"> Elmo Detox lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. </p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/detox">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>
      </Fade>

      <Fade top>
        <div className="services-card">
          <img src={Card4} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Job Assistance</h1>
              <p className="card-text"> Many individuals in recovery face unique challenges when it comes to securing and maintaining employment, but there are resources and strategies available to help them on their path to a fulfilling career.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/jobs">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>
      </Fade>



      </div>
    </div>
  </div>
    </>
  );
};

export default Cards;
