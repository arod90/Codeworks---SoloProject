import React, { useEffect, useState } from 'react';
import '../styles/ApiTest.css';

const Attractions = () => {
  const [data, setData] = useState([]);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
    body: '{"geoId":187497,"startDate":"2022-03-29","endDate":"2022-03-30","pax":[{"ageBand":"ADULT","count":2}],"sort":"TRAVELER_FAVORITE_V2","sortOrder":"asc","filters":[{"id":"category","value":["11873"]}],"updateToken":""}',
  };

  useEffect(() => {
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
                  ? data.singleCardContent.cardPhoto.sizes.urlTemplate
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
              {data
                ? data.singleCardContent.merchandisingText.htmlString
                : 'not found'}
            </p>
            <p>
              {data ? data.singleCardContent.primaryInfo.text : 'not found'}
            </p>
            {/* <p>
              {data ? data.singleCardContent.secondaryInfo.text : 'not found'}
            </p> */}
            <p>
              Rating :
              {data ? data.singleCardContent.bubbleRating.rating : 'not found'}{' '}
              stars
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Attractions;
