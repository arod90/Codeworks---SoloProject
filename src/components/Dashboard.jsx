import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
