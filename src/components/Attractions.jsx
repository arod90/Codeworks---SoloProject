import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Attractions.css';
import AtrCard from './AtrCard';

const Attractions = ({ geoId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        dragElastic={0.2}
        dragConstraints={{ left: -7500, right: 0 }}
        className="cont"
      >
        {data.length ? (
          data.slice(0, 30).map((data, id) => <AtrCard key={id} data={data} />)
        ) : (
          <div className="search-for-city">
            <h3>Search for a city to see Attraction suggestions!</h3>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Attractions;
