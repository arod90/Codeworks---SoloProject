import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import '../styles/LoginReg.css';
import glogo from '../assets/glogo.png';
import { useNavigate } from 'react-router-dom';

const LoginReg = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate('/mapsearch');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate('/mapsearch');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res);
        // navigate('/mapsearch', { state: user });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
          <button onClick={login}>Sign-In</button>
          <button className="g-singin" onClick={signInWithGoogle}>
            <p>Sign-in with Google</p>{' '}
            <img className="glogo" src={glogo} alt="" />
          </button>
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
          {/* <input type="text" placeholder="Re-enter your password" /> */}
          <button onClick={register}>Register</button>
        </div>
      </div>
      <button onClick={logout}>Logout</button>
      <p>{user?.email}</p>
      <p>{user?.displayName}</p>
      <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default LoginReg;
