import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/Attractions.css';
import AtrCard from './AtrCard';
import spinner from '../assets/svg/perfwedge.svg';

const Attractions = ({ geoId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [favorites, setFavorites] = useState([]);

  // const [isOn, setIsOn] = useState(false);

  // const toggleSwitch = (e) => {
  //   setIsOn(!isOn);
  //   console.log(e);
  // };

  // const spring = {
  //   type: 'spring',
  //   stiffness: 700,
  //   damping: 30,
  // };

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
    body: `{"geoId":${geoId},"startDate":"2022-03-29","endDate":"2022-03-30","pax":[{"ageBand":"ADULT","count":2}],"sort":"TRAVELER_FAVORITE_V2","sortOrder":"asc","filters":[{"id":"category","value":["11873"]}],"updateToken":""}`,
  };

  useEffect(() => {
    setIsLoading(true);
    if (geoId) {
      fetch(
        'https://travel-advisor.p.rapidapi.com/attraction-products/v2/list?currency=USD&units=km&lang=en_US',
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const newData =
            response.data.AppPresentation_queryAppListV2[0].sections.filter(
              (el) => el.singleCardContent
            );
          console.log({ newData });
          setData(newData);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [geoId]);

  return (
    <>
      <div id="atr" className="atr-title-wrap">
        <p>A&TtD</p>
        <h1>
          Attractions <span>&</span> Things to do
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
        {/* {data
          .slice(0, 30)
          .map((data, id) =>
            isLoading ? (
              <img className="card-spinner" src={spinner} alt="spinner" />
            ) : (
              <AtrCard key={id} data={data} />
            )
          )} */}
        {data.length ? (
          data.slice(0, 30).map((data, id) => <AtrCard key={id} data={data} />)
        ) : (
          <img className="card-spinner" src={spinner} alt="spinner" />
        )}
        {/* {favorites.map((data, id) => (
          <AtrCard setFavorites={setFavorites} key={id} data={data} />
        ))} */}
      </motion.div>
    </>
  );
};

export default Attractions;
