import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import glogo from '../assets/glogo.png';
import '../styles/LoginReg.css';

const LoginReg = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { googleSignIn, register, login, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRegister = async (registerEmail, registerPassword) => {
    try {
      await register({ registerEmail, registerPassword });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogin = async (loginEmail, loginPassword) => {
    try {
      await login({ loginEmail, loginPassword });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/mapsearch');
    }
  }, [user]);

  return (
    <>
      <div className="form-wrapper">
        <div className="form-cont">
          <div className="login-form" action="">
            <h3>Login</h3>
            <input
              type="text"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              placeholder="Enter your E-mail"
            />
            <input
              type="text"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              placeholder="Enter your Password"
            />
            <button onClick={handleLogin}>Sign-In</button>
            <div>
              <button className="g-singin" onClick={handleGoogleSignIn}>
                <p>Sign-in with Google</p>{' '}
                <img className="glogo" src={glogo} alt="" />
              </button>
            </div>
          </div>
          <div className="reg-form" action="">
            <h3>Register</h3>
            <input
              type="text"
              placeholder="Enter your E-mail"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <input
              type="text"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              placeholder="Enter your Password"
            />
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginReg;
