import React, { useEffect, useState } from 'react';

const Hotels = () => {
  const [data, setData] = useState([]);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
    body: '{"geoId":187497,"checkIn":"2022-06-10","checkOut":"2022-06-15","sort":"PRICE_HIGH_TO_LOW","sortOrder":"asc","filters":[{"id":"deals","value":["1","2","3"]},{"id":"price","value":["31","122"]},{"id":"type","value":["9189","9201"]},{"id":"amenity","value":["9156","9658","21778","9176"]},{"id":"distFrom","value":["2227712","25.0"]},{"id":"rating","value":["40"]},{"id":"class","value":["9572"]}],"rooms":[{"adults":2,"childrenAges":[2]},{"adults":2,"childrenAges":[3]}],"updateToken":""}',
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
  }, []);

  return (
    <>
      <h1>Testing Endpoint</h1>
      {data.map((data) => {
        return (
          <div className="container">
            <img
              src={
                data
                  ? data.singleCardContent.cardPhotos[
                      data.singleCardContent.cardPhotos.length - 1
                    ].sizes.urlTemplate
                      .replace('{width}', '700')
                      .replace('{height}', '400')
                  : 'no url found'
              }
              alt=""
            />
            <p>
              {data ? data.singleCardContent.cardTitle.string : 'not found'}
            </p>
            <p>
              {data &&
              data.singleCardContent.commerceButtons &&
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
                  Book Hotel
                </a>
              ) : (
                'booking website not found'
              )}
            </p>
            <p>
              Average cost per night:
              {data &&
              data.singleCardContent.commerceInfo &&
              data.singleCardContent.commerceInfo.priceForDisplay
                ? data.singleCardContent.commerceInfo.priceForDisplay.string
                : 'not found'}{' '}
              USD
            </p>
            {/* <p>
              {data ? data.singleCardContent.secondaryInfo.text : 'not found'}
            </p> */}
            <p>
              Rating :
              {data ? data.singleCardContent.bubbleRating.rating : 'not found'}{' '}
              stars
            </p>
            <p>
              Reviewed by:
              {data
                ? data.singleCardContent.bubbleRating.numberReviews.string
                : 'not found'}{' '}
              users
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Hotels;
