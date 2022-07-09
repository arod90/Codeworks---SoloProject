import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/Hotels.css';
import HotCard from './HotCard';

const Hotels = ({ geoId }) => {
  const [data, setData] = useState([]);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
    body: `{"geoId":${geoId},"checkIn":"2022-06-10","checkOut":"2022-06-15","sort":"PRICE_HIGH_TO_LOW","sortOrder":"asc"}`,
  };

  useEffect(() => {
    fetch(
      'https://travel-advisor.p.rapidapi.com/hotels/v2/list?currency=USD&units=km&lang=en_US',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const newData =
          response.data.AppPresentation_queryAppListV2[0].sections.filter(
            (el) => el.singleCardContent
          );
        console.log(newData);
        let newArr = [];
        newData.map((a) => {
          if (a.singleCardContent.commerceButtons) {
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
      <div id="hot" className="hot-title-wrap">
        <p>H&StS</p>
        <h1>
          Hotels <span>&</span> Stays
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
          data.slice(0, 30).map((data, id) => <HotCard key={id} data={data} />)
        ) : (
          <div className="search-for-city">
            <h3>Search for a city to see Hotel suggestions!</h3>
          </div>
          // <img className="card-spinner" src={spinner} alt="spinner" />
        )}
      </motion.div>
    </>
  );
};

export default Hotels;
