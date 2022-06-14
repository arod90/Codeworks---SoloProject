import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import wave from '../assets/gifs/wave.gif';
import { Link as Link2 } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="nav-cont">
      <div className="left-side">
        <div className="nav-logo">TRVL</div>
        <div className="nav-sublogo">COMPANION</div>
      </div>
      <div className="right-side">
        <div className="link-cont">
          <ul>
            <li className="atr-li">
              <Link to="atr" smooth={true}>
                Attractions
              </Link>
            </li>
            <li className="res-li">
              <Link to="res" smooth={true}>
                Restaurants
              </Link>
            </li>
            <li className="hot-li">
              <Link to="hot" smooth={true}>
                Hotels
              </Link>
            </li>
          </ul>
        </div>
        <div className="user-info">
          {/* <button onClick={handleSignOut}>Logout</button> */}
          <div className="user-info-subcont">
            <p>
              Hello{' '}
              {user?.displayName
                ? user?.displayName.split(' ').slice(0, 1).join('')
                : 'Guest'}
              !
            </p>
            {user?.displayName ? (
              <button className="log-btn" onClick={handleSignOut}>
                Logout
              </button>
            ) : (
              <Link2 to="/loginreg">
                <button className="log-btn">Sign in</button>
              </Link2>
            )}
            <img className="bye-bye" src={wave} alt="" />
          </div>
          <img className="user-pic" src={user?.photoURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
