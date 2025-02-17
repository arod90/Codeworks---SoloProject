import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import mapStyles from '../utils/mapStyles';
import suitcase from '../assets/svg/suitcase.svg';
import locateUser from '../assets/svg/find3.svg';
import '@reach/combobox/styles.css';
import '../styles/Map.css';
import Attractions from './Attractions';
import Restaurants from './Restaurants';
import Hotels from './Hotels';
import surv from '../assets/svg/world.svg';
import spinner from '../assets/svg/perfwedge.svg';

// VARIABLES

const libraries = ['places'];

const center = { lat: 41.395, lng: 2.1978 };

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
  rotateControl: true,
};

const fetchOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
};

// COMPONENT

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [adr, setAdr] = useState('');
  const [geoId, setGeoId] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const format = (string) => {
    let newStringArr = string.split(' ');
    if (newStringArr[newStringArr.length - 1] === 'USA') {
      string.split(' ').slice(0, -2);
      let newAdr = string.replace(/ /g, '%20');
      let formattedAdr = newAdr.replace(/,/g, '');
      return formattedAdr.split('%20').slice(0, -2).join('%20');
    } else {
      let newAdr = string.replace(/ /g, '%20');
      let formattedAdr = newAdr.replace(/,/g, '');
      return formattedAdr;
    }
  };

  let formattedAdr = format(adr);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${formattedAdr}&lang=en_US&units=km`,
      fetchOptions
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.data.Typeahead_autocomplete.results);
        setGeoId(response.data.Typeahead_autocomplete.results[0].documentId);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [formattedAdr]);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  //the steps below allow us to access the map anywhere in our code without having to re-render
  //state triggers re-render, useRef retains state and prevents re-render

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className="section-container">
        <div className="top-cont">
          <div className="map-container">
            <Locate panTo={panTo} />
            <GoogleMap
              mapContainerClassName="map-container"
              zoom={3}
              center={center}
              mapTypeId="satellite"
              options={options}
              onClick={onMapClick}
              onLoad={onMapLoad}
            >
              {markers.map((marker) => (
                <Marker
                  key={marker.time.toISOString()}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  icon={{
                    url: suitcase,
                    scaledSize: new window.google.maps.Size(49, 49),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(25, 25),
                  }}
                  onClick={() => {
                    setSelected(marker);
                  }}
                />
              ))}
              {selected ? (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onCloseClick={() => {
                    setSelected(null);
                  }}
                >
                  <h2>👀 looking into this destination</h2>
                </InfoWindow>
              ) : null}
            </GoogleMap>
          </div>
          <div className="info-container">
            <div className="searchbar-cont">
              {hasSearched === false ? (
                <h1 className="dest-info">
                  Start here 👇🏼 input your destination of interest
                </h1>
              ) : (
                <h1 className="dest-info">
                  Search for your next destination 👀
                </h1>
              )}
              <div className="bar-div">
                <Search
                  className="searchbar"
                  panTo={panTo}
                  setHasSearched={setHasSearched}
                  setAdr={setAdr}
                />
              </div>
            </div>
            <div className="img-cont">
              <img
                className="img1"
                src={
                  data[0]
                    ? isLoading
                      ? spinner
                      : data[0].image.photo.photoSizes[
                          data[0].image.photo.photoSizes.length - 1
                        ].url
                    : surv
                }
                alt=""
              />
              <div className="name-cont">
                {!isLoading && (
                  <>
                    <h1 className="city-name">
                      {data[0] ? data[0].detailsV2.names.name : ''}
                    </h1>
                    <h4 className="city-info">
                      {data[0]
                        ? data[0].detailsV2.names.longOnlyHierarchyTypeaheadV2
                        : ''}
                    </h4>
                  </>
                )}
                <p>
                  {data[0]
                    ? data[0].detailsV2.contact.streetAddress.street1
                    : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Attractions geoId={geoId} />
      </div>
      <div>
        <Restaurants geoId={geoId} />
      </div>
      <div>
        <Hotels geoId={geoId} />
      </div>
    </>
  );
};

// LOCATE FUNCTION

function Locate({ panTo }) {
  return (
    <button
      className="locate-user"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src={locateUser} alt="locate icon" />
    </button>
  );
}

// SEARCH FUNCTION

function Search({ panTo, setAdr, setHasSearched }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 41.395, lng: () => 2.1978 },
      radius: 200 * 1000,
    },
  });
  return (
    <div className="searchbar">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          setAdr(address);
          setHasSearched(true);
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
            setValue('');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder=" So, where to next?"
        />
        <ComboboxPopover>
          <ComboboxList className="list">
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption
                  className="option"
                  key={description}
                  value={description}
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Map;
