import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import '../styles/Dashboard.css';
import { gsap } from 'gsap';

const Dashboard = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.fromTo(
      q('.letter'),
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.4 }
    );
  }, []);

  console.log(gsap.Tw);

  return (
    <>
      <section className="main-section">
        <div className="title-cont">
          <div className="text-cont">
            <div className="h1-cont" ref={el}>
              <h1 className="letter">F</h1>
              <h1 className="letter">Y</h1>
              <h1 className="letter">A</h1>
            </div>
            <h4>Find Your Adventure</h4>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="second-title-cont">
          <h2 className="second-title">Adventure</h2>
          <h4 className="second-subtitle">One Click Away</h4>
          <button className="start">
            <Link className="link" to="/mapsearch">
              Get Started
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
