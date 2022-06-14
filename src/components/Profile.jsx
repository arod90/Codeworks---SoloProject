import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/Profile.css';

const Profile = () => {
  const [savedData, setSavedData] = useState([]);
  const userCollectionRef = collection(db, 'users');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(userCollectionRef);
      setSavedData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div className="profile-cont">
      <h1>saved trips</h1>
      {savedData.map((data) => {
        return <h1>{data.userName}</h1>;
      })}
    </div>
  );
};

export default Profile;
