import React, { useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/AtrCard.css';

const AtrCard = ({ data, setFavorites }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    // setFavorites((prev) => {
    //   return [
    //     ...prev.filter(
    //       (el) =>
    //         el.singleCardContent.saveId.id !== data.singleCardContent.saveId.id
    //     ),
    //     data,
    //   ];
    // });
    setIsOn(!isOn);
  };
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <div className="cont">
        <div className="card">
          <div className="atr-cont">
            <div data-isOn={isOn} className="atr-item">
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
                <p className="atr-title">
                  {data ? data.singleCardContent.cardTitle.string : 'not found'}
                </p>
                <p className="atr-price">
                  {data
                    ? data.singleCardContent.merchandisingText.htmlString
                    : 'not found'}
                </p>
                <p className="atr-rating">
                  Rating :
                  {data && data.singleCardContent.bubbleRating
                    ? data.singleCardContent.bubbleRating.rating
                    : 'not found'}{' '}
                  stars
                </p>
                <p className="atr-rating">
                  Reviewed by:
                  {data && data.singleCardContent.bubbleRating
                    ? data.singleCardContent.bubbleRating.numberReviews.string
                    : 'not found'}{' '}
                  users
                </p>
                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                  <motion.div
                    data-isOn={isOn}
                    className="handle"
                    layout
                    transition={spring}
                  />
                </div>
                <h1 className="title-back">TRVL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtrCard;
