import React, { useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/ResCard.css';

const ResCard = ({ data }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <div>
        <div className="card">
          <div className="res-cont">
            <div data-isOn={isOn} className="res-item">
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
                        .split(' ')
                        .slice(
                          1,
                          data.singleCardContent.cardTitle.string.length - 1
                        )
                        .join(' ')
                    : 'not found'}
                </p>
                <p className="menu-link">
                  {data &&
                  data.singleCardContent.commerceButtons.singleButton &&
                  data.singleCardContent.commerceButtons.singleButton.link
                    .externalUrl ? (
                    <a
                      href={
                        data.singleCardContent.commerceButtons.singleButton.link
                          .externalUrl
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
                    : 'not found'}
                  stars
                </p>
                <p className="res-rating">
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
                <div className="res-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResCard;
