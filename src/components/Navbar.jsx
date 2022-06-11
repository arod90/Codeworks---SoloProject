import React from 'react';
import '../styles/Navbar.css';
// import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // const user = useLocation();
  return (
    <div className="nav-cont">
      <div className="left-side">
        <div className="nav-logo">TRVL</div>
        <div className="nav-sublogo">COMPANION</div>
      </div>
      <div className="right-side">
        <ul>
          <li className="atr-li">Attractions</li>
          <li className="res-li">Restaurants</li>
          <li className="hot-li">Hotels</li>
        </ul>
        <div className="user-info">
          {/* <p>{user ? user.displayName : 'not signed in'}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
