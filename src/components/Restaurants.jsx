import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/Restaurants.css';
import ResCard from './ResCard';

const Restaurants = ({ geoId }) => {
  const [data, setData] = useState([]);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
    body: `{"geoId":${geoId},"partySize":2,"sort":"POPULARITY","sortOrder":"desc"}`,
  };

  useEffect(() => {
    fetch(
      'https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=km&lang=en_US',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const newData =
          response.data.AppPresentation_queryAppListV2[0].sections.filter(
            (el) => el.singleCardContent
          );
        let newArr = [];
        newData.map((a) => {
          if (a.singleCardContent.commerceButtons.singleButton) {
            newArr.unshift(a);
          } else {
            newArr.push(a);
          }
        });
        setData(newArr);
      })
      .catch((err) => console.error(err));
  }, [geoId]);

  return (
    <>
      <div id="res" className="rest-title-wrap">
        <p className="rest-p">R&EtS</p>
        <h1>
          Restaurants <span>&</span> Eateries
        </h1>
      </div>
      <motion.div
        drag="x"
        // style={{ x, scale }}
        dragElastic={0.2}
        // dragConstraints={constraintsRef}
        dragConstraints={{ left: -7500, right: 0 }}
        className="cont"
      >
        {data.length ? (
          data.slice(0, 30).map((data, id) => <ResCard key={id} data={data} />)
        ) : (
          <div className="search-for-city">
            <h3>Search for a city to see Restaurant suggestions!</h3>
          </div>
          // <img className="card-spinner" src={spinner} alt="spinner" />
        )}
      </motion.div>
    </>
  );
};

export default Restaurants;
