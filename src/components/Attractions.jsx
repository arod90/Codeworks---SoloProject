import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/Attractions.css';

const Attractions = ({ geoId }) => {
  const [data, setData] = useState([]);

  // const constraintsRef = useRef(null);

  // const ease = [0.6, 0.05, -0.01, 0.99];
  // let x = useSpring(0, { stiffness: 300, damping: 200 });
  // // const width = useTransform(x, [-6500, 0], [2145, 0]);
  // const scale = useTransform(x, [-100, 0], [1.25, 1]);

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
    if (geoId) {
      fetch(
        'https://travel-advisor.p.rapidapi.com/attraction-products/v2/list?currency=USD&units=km&lang=en_US',
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(
            response.data.AppPresentation_queryAppListV2[0].sections.filter(
              (el) => el.singleCardContent
            )
          );
          const newData =
            response.data.AppPresentation_queryAppListV2[0].sections.filter(
              (el) => el.singleCardContent
            );
          console.log({ newData });
          setData(newData);
        })
        .catch((err) => console.error(err));
    }
  }, [geoId]);

  return (
    <>
      <div className="atr-title-wrap">
        <p>
          A<span className="white-span">&</span>TtD
        </p>
        <h1>
          Attractions <span>&</span> Things to do
        </h1>
      </div>
      <div className="cont">
        <motion.div
          drag="x"
          // style={{ x, scale }}
          dragElastic={0.2}
          // dragConstraints={constraintsRef}
          dragConstraints={{ left: -6500, right: 0 }}
          className="atr-cont"
        >
          {data
            .map((data) => {
              return (
                <div className="atr-item">
                  <img
                    src={
                      data
                        ? data.singleCardContent.cardPhoto.sizes.urlTemplate
                            .replace('{width}', '700')
                            .replace('{height}', '400')
                        : 'no url found'
                    }
                    alt=""
                  />
                  <div className="p-cont">
                    <p className="top-p">
                      <div className="line"></div>
                      {data && data.singleCardContent.primaryInfo
                        ? data.singleCardContent.primaryInfo.text
                        : 'not found'}
                    </p>
                    <p className="title">
                      {data
                        ? data.singleCardContent.cardTitle.string
                        : 'not found'}
                    </p>
                    <p className="price">
                      {data
                        ? data.singleCardContent.merchandisingText.htmlString
                        : 'not found'}
                    </p>
                    {/* <p>
              {data ? data.singleCardContent.secondaryInfo.text : 'not found'}
            </p> */}
                    <p className="rating">
                      Rating :
                      {data && data.singleCardContent.bubbleRating
                        ? data.singleCardContent.bubbleRating.rating
                        : 'not found'}{' '}
                      stars
                    </p>
                    <p className="rating">
                      Reviewed by:
                      {data && data.singleCardContent.bubbleRating
                        ? data.singleCardContent.bubbleRating.numberReviews
                            .string
                        : 'not found'}{' '}
                      users
                    </p>
                    <h1 className="title-back">TRVL</h1>
                  </div>
                </div>
              );
            })
            .slice(0, 15)}
        </motion.div>
      </div>
      {/* <div className="product-drag-progress-background">
        <motion.div
          style={{ width }}
          className="product-drag-progress"
        ></motion.div>
      </div> */}
    </>
  );
};

export default Attractions;
