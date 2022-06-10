import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/Hotels.css';

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
      <h1>Hotels</h1>
      <div className="cont">
        <motion.div
          drag="x"
          // style={{ x, scale }}
          dragElastic={0.2}
          // dragConstraints={constraintsRef}
          dragConstraints={{ left: -6500, right: 0 }}
          className="hot-cont"
        >
          {data
            .map((data) => {
              return (
                <div className="hot-item">
                  <img
                    src={
                      data && data.singleCardContent.cardPhotos[0]
                        ? data.singleCardContent.cardPhotos[
                            data.singleCardContent.cardPhotos.length - 1
                          ].sizes.urlTemplate
                            .replace('{width}', '700')
                            .replace('{height}', '400')
                        : 'no url found'
                    }
                    alt=""
                  />
                  <div className="p-cont">
                    <p className="hot-adr">
                      {data && data.singleCardContent.secondaryInfo
                        ? data.singleCardContent.secondaryInfo.text
                        : 'not found'}
                    </p>
                    <div className="hot-line"></div>
                    <p className="hot-name">
                      {data
                        ? data.singleCardContent.cardTitle.string
                        : 'not found'}
                    </p>
                    <div className="hot-line"></div>
                    <p className="hot-link">
                      {data &&
                      data.singleCardContent.commerceButtons &&
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
                          Book Hotel
                        </a>
                      ) : (
                        'booking website not found'
                      )}
                    </p>
                    <p className="hot-info">
                      Average cost per night:
                      {data &&
                      data.singleCardContent.commerceInfo &&
                      data.singleCardContent.commerceInfo.priceForDisplay
                        ? data.singleCardContent.commerceInfo.priceForDisplay
                            .string
                        : 'not found'}{' '}
                      USD
                    </p>
                    {/* <p>
              {data ? data.singleCardContent.secondaryInfo.text : 'not found'}
            </p> */}
                    <p className="hot-rating">
                      Rating :
                      {data && data.singleCardContent.bubbleRating
                        ? data.singleCardContent.bubbleRating.rating
                        : 'not found'}{' '}
                      stars
                    </p>
                    <p className="hot-rating">
                      Reviewed by:
                      {data && data.singleCardContent.bubbleRating
                        ? data.singleCardContent.bubbleRating.numberReviews
                            .string
                        : 'not found'}{' '}
                      users
                    </p>
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

export default Hotels;
