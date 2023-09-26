// fontLoader.js

import WebFont from 'webfontloader';

// Array to store font file paths (replace 'FontName' with the actual font family name)
const fontFiles = [
  `${process.env.PUBLIC_URL}/Fonts/Larsseit/Larsseit-Medium.otf`,
  `${process.env.PUBLIC_URL}/Fonts/Larsseit/Larsseit-Bold.otf`,
  `${process.env.PUBLIC_URL}/Fonts/Quincy/quincycf-medium.otf`,
  `${process.env.PUBLIC_URL}/Fonts/Larsseit/Larsseit-Bold.otf`,
  
];

WebFont.load({
    custom: {
      families: ['Larsseit-Medium', 'Larsseit-Bold', 'QuincyCF-Medium'], // Specify font family names
      urls: [
        '/Fonts/Larsseit/Larsseit-Medium.otf',
        '/Fonts/Larsseit/Larsseit-Bold.otf',   
        '/Fonts/Quincy/quincycf-medium.otf',   
      ],
    },
  });
  
