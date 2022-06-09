import React, { useEffect, useState } from 'react';
import '../styles/ApiTest.css';

const ApiTest = () => {
  const [data, setData] = useState();

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2942f6734bmsh26a297b63d78f09p11c2b7jsn20723fedded5',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
    body: '{"geoId":304097,"startDate":"2022-03-29","endDate":"2022-03-30","pax":[{"ageBand":"ADULT","count":2}],"sort":"TRAVELER_FAVORITE_V2","sortOrder":"asc","filters":[{"id":"category","value":["11873"]}],"updateToken":""}',
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
        // console.log(response.data.AppPresentation_queryAppListV2[0]);
        setData(
          response.data.AppPresentation_queryAppListV2[0].sections[1]
            .singleCardContent
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Testing Endpoint</h1>
      <p>{data ? data.cardTitle.string : 'not found'}</p>
      {/* <img
        className="img1"
        src={data[0] ? data[0].image.photo.photoSizes[0].url : ''}
        alt=""
      />
      <h1>{data[0] ? data[0].detailsV2.names.name : ''}</h1>
      <h4>
        {data[0] ? data[0].detailsV2.names.longOnlyHierarchyTypeaheadV2 : ''}
      </h4>
      <p>{data[0] ? data[0].detailsV2.contact.streetAddress.street1 : ''}</p> */}
    </div>
  );
};

export default ApiTest;
