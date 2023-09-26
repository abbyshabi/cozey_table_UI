// fontLoader.js

import WebFont from 'webfontloader';

// Array to store font file paths (replace 'FontName' with the actual font family name)
const fontFiles = [
  `${process.env.PUBLIC_URL}/Fonts/Larsseit/Larsseit-Medium.otf`,
  `${process.env.PUBLIC_URL}/Fonts/Larsseit/Larsseit-Bold.otf`,
  `${process.env.PUBLIC_URL}/Fonts/Quincy/quincycf-medium.otf`,
  `${process.env.PUBLIC_URL}/Fonts/Larsseit/Larsseit-Bold.otf`,
  // Add more font file paths if needed
];

console.log(fontFiles)
// Load fonts using webfontloader
WebFont.load({
  custom: {
    families: ['QuincyCF', 'Larsseit-Medium'], // Specify font family names
    urls: fontFiles,        // Specify font file paths
  },
});
