import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import '../styles/Dashboard.css';
// import { gsap } from 'gsap';

const Dashboard = () => {
  // const el = useRef();
  // const q = gsap.utils.selector(el);

  // useEffect(() => {
  //   gsap.fromTo(
  //     q('.letter'),
  //     { opacity: 0 },
  //     { opacity: 1, duration: 1, stagger: 0.4 }
  //   );
  // }, []);

  return (
    <>
      <section className="main-section">
        <div className="title-cont">
          <div className="text-cont">
            {/* <div className="h1-cont" ref={el}> */}
            <div className="h1-cont">
              <div className="title-cont1">
                <h1 className="letter">T</h1>
                <h1 className="letter">R</h1>
              </div>
              <div className="title-cont2">
                <h1 className="letter">V</h1>
                <h1 className="letter">L</h1>
              </div>
            </div>
            <div className="subtitle-cont">
              <h4>COMPANION</h4>
            </div>
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
