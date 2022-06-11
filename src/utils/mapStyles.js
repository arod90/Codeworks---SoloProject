// export default [
//   {
//       "featureType": "landscape",
//       "stylers": [
//           {
//               "hue": "#FFA800"
//           },
//           {
//               "saturation": 0
//           },
//           {
//               "lightness": 0
//           },
//           {
//               "gamma": 1
//           }
//       ]
//   },
//   {
//       "featureType": "road.highway",
//       "stylers": [
//           {
//               "hue": "#53FF00"
//           },
//           {
//               "saturation": -73
//           },
//           {
//               "lightness": 40
//           },
//           {
//               "gamma": 1
//           }
//       ]
//   },
//   {
//       "featureType": "road.arterial",
//       "stylers": [
//           {
//               "hue": "#FBFF00"
//           },
//           {
//               "saturation": 0
//           },
//           {
//               "lightness": 0
//           },
//           {
//               "gamma": 1
//           }
//       ]
//   },
//   {
//       "featureType": "road.local",
//       "stylers": [
//           {
//               "hue": "#00FFFD"
//           },
//           {
//               "saturation": 0
//           },
//           {
//               "lightness": 30
//           },
//           {
//               "gamma": 1
//           }
//       ]
//   },
//   {
//       "featureType": "water",
//       "stylers": [
//           {
//               "hue": "#00BFFF"
//           },
//           {
//               "saturation": 100
//           },
//           {
//               "lightness": -14
//           },
//           {
//               "gamma": 1
//           }
//       ]
//   },
//   {
//       "featureType": "poi",
//       "stylers": [
//           {
//               "hue": "#679714"
//           },
//           {
//               "saturation": 33.4
//           },
//           {
//               "lightness": -25.4
//           },
//           {
//               "gamma": 1
//           }
//       ]
//   }
// ]

export default [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#e3b141',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#e0a64b',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#0e0d0a',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d1b995',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#8b6f32',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#be5db4',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#448636',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#12120f',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: '-77',
      },
      {
        gamma: '4.48',
      },
      {
        saturation: '24',
      },
      {
        weight: '0.65',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f6b044',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4f4e49',
      },
      {
        weight: '0.36',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#c4ac87',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#262307',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a4875a',
      },
      {
        lightness: 16,
      },
      {
        weight: '0.16',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#deb483',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#0f252e',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#141c84',
      },
      {
        gamma: '3.14',
      },
      {
        weight: '1.07',
      },
    ],
  },
];
