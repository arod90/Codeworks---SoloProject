import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginReg.css';
import { FcGoogle } from 'react-icons/fc';

const LoginReg = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {}
  };

  const guestView = () => {
    navigate('/mapsearch');
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/mapsearch');
    }
  }, [user, navigate]);

  return (
    <>
      <div className="form-wrapper">
        <h1 className="h1-back">TRVL</h1>
        <div className="form-cont">
          <button className="g-singin" onClick={handleGoogleSignIn}>
            <p>Sign-in with Google</p> <FcGoogle size={35} />
          </button>
          <h2 onClick={guestView}>Or continue as a Guest</h2>
        </div>
      </div>
    </>
  );
};

export default LoginReg;
