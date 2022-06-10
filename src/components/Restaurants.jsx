import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/Restaurants.css';

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
      // .then((response) => {
      //   console.log(response);
      // })
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
  }, [geoId]);

  return (
    <>
      <h1>Restaurants</h1>
      <div className="cont">
        <motion.div
          drag="x"
          // style={{ x, scale }}
          dragElastic={0.2}
          // dragConstraints={constraintsRef}
          dragConstraints={{ left: -6500, right: 0 }}
          className="res-cont"
        >
          {data
            .map((data) => {
              return (
                <div className="res-item">
                  <img
                    src={
                      data && data.singleCardContent.cardPhoto
                        ? data.singleCardContent.cardPhoto.sizes.urlTemplate
                            .replace('{width}', '700')
                            .replace('{height}', '400')
                        : 'no url found'
                    }
                    alt=""
                  />
                  <div className="p-cont">
                    <p className="res-name">
                      {data
                        ? data.singleCardContent.cardTitle.string
                        : 'not found'}
                    </p>
                    <p className="menu-link">
                      {data &&
                      data.singleCardContent.commerceButtons.singleButton &&
                      data.singleCardContent.commerceButtons.singleButton.link
                        .externalUrl ? (
                        <a
                          href={
                            data.singleCardContent.commerceButtons.singleButton
                              .link.externalUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Menu
                        </a>
                      ) : (
                        'no menu found'
                      )}
                    </p>
                    <p className="res-info">
                      {data && data.singleCardContent.primaryInfo
                        ? data.singleCardContent.primaryInfo.text
                        : 'not found'}
                    </p>
                    <p className="res-info">
                      {data && data.singleCardContent.secondaryInfo
                        ? data.singleCardContent.secondaryInfo.text
                        : 'not found'}
                    </p>
                    <p className="res-rating">
                      Rating :
                      {data && data.singleCardContent.bubbleRating
                        ? data.singleCardContent.bubbleRating.rating
                        : 'not found'}{' '}
                      stars
                    </p>
                    <p className="res-rating">
                      Reviewed by:
                      {data && data.singleCardContent.bubbleRating
                        ? data.singleCardContent.bubbleRating.numberReviews
                            .string
                        : 'not found'}{' '}
                      users
                    </p>
                    <div className="res-line"></div>
                  </div>
                </div>
              );
            })
            .slice(0, 15)}
        </motion.div>
      </div>
    </>
  );
};

export default Restaurants;
