import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import '../styles/Dashboard.css';
import scroll from '../assets/svg/scroll.svg';

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
              <h4>COMPANION</h4>
            </div>
          </div>
        </div>
        <img className='scroll' src={scroll} alt="" />
      </section>
      <section className="second-section">
        <div className="second-title-cont">
          <h2 className="second-title">TRVL Companion</h2>
          <h4 className="second-subtitle">
            Is a web service that lets you browse Activities, book Hotels, and
            check out Restaurant menus in a given destination.
            <br />
            <br />
            currently supports all major cities & offers limited support for
            smaller towns and suburbs
          </h4>
          <div className="btn-cont">
            <Link className="link" to="/loginreg">
              <button className="start">Get Started</button>
            </Link>
            <Link to="/stack">
              <span className="hidden-dev">👨🏽‍💻</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
