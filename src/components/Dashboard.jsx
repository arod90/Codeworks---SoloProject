import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Dashboard.css';
import { useState } from 'react';
import { useEffect } from 'react';
import load from '../assets/load.svg';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {!isLoading ? (
        <section className="main-section">
          <div className="title-cont">
            <div className="text-cont">
              <div className="h1-cont">
                <div className="title-cont1">
                  <div className="t-cont">
                    <h1 className="letter">T</h1>
                  </div>
                  <div className="r-cont">
                    <h1 className="letter">R</h1>
                  </div>
                </div>
                <div className="title-cont2">
                  <div className="v-cont">
                    <h1 className="letter">V</h1>
                  </div>
                  <div className="l-cont">
                    <h1 className="letter">L</h1>
                  </div>
                </div>
              </div>
              <div className="subtitle-cont">
                <h4>ADVISOR</h4>
              </div>
            </div>
          </div>
          <div className="btn-cont">
            <Link className="link" to="/loginreg">
              <button className="start">Get Started</button>
            </Link>
            {/* <Link to="/stack">
            <span className="hidden-dev">👨🏽‍💻</span>
          </Link> */}
          </div>
        </section>
      ) : (
        <div className="loading-page">
          <h1>Loading TRVL Advisor</h1>
          <img src={load} alt="" />
        </div>
      )}
    </>
  );
};

export default Dashboard;
