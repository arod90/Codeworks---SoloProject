import React from 'react';
import '../styles/TechStack.css';
import reactlogo from '../logo.svg';
import firebaselogo from '../assets/gifs/firebase.gif';
import googlelogo from '../assets/gifs/google.gif';
import rapidlogo from '../assets/gifs/rapid2.png';
import { Link } from 'react-router-dom';

const TechStack = () => {
  return (
    <div className="stack-cont">
      <h1>Tech Stack</h1>
      <div className="row">
        <div className="tech-cont">
          <img className="App-logo" src={reactlogo} alt="" />
          <h4>React</h4>
        </div>
        <div className="tech-cont">
          <img src={firebaselogo} alt="" />
          <h4>Firebase</h4>
        </div>
        <div className="tech-cont">
          <img className="g-logo" src={googlelogo} alt="" />
          <h4>Google</h4>
          <p>Maps JavaScript API</p>
          <p>Places API</p>
          <p>Geocoding API</p>
        </div>
        <div className="tech-cont">
          <img className="rapid-logo" src={rapidlogo} alt="" />
          <h4>Rapid-Api</h4>
          <p>Travel-Advisor API</p>
        </div>
      </div>
      <Link to="/">
        <button className="home">home</button>
      </Link>
    </div>
  );
};

export default TechStack;
