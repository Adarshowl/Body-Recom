
// const customColor = `rgba(0, 186, 170, 1) + rgba(0, 144, 218, 1)`; // primary1: '#0195D3'
const color1 = "#0195D3";
const color21 = "#00BAAA";
const color2 = '#00B5AE'


// #008EDC
// 100%
// #00BAAA
// 100%

// Function to convert hexadecimal color to RGB
function hexToRgb(hex) {
  // Remove the hash sign if it exists
  hex = hex.replace(/^#/, '');

  // Convert to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// Function to convert RGB to hexadecimal color
function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Convert colors to RGB
const rgbColor1 = hexToRgb(color1);
const rgbColor2 = hexToRgb(color2);
// const rgbColor3 = hexToRgb(color3);


// Calculate average RGB values
const avgR = Math.round((rgbColor1.r + rgbColor2.r) / 2);
const avgG = Math.round((rgbColor1.g + rgbColor2.g) / 2);
const avgB = Math.round((rgbColor1.b + rgbColor2.b) / 2);

// Convert average RGB to hexadecimal
const blendedColor = rgbToHex(avgR, avgG);

console.log(blendedColor); // Output the blended color



export const COLORS = {
  white: '#fff',
  black: '#000',
  primary1: '#0195D3',
  primary2: '#00B0B6',
  primary3: '#00B5AE',
  light_gray: '#F7F7F7',
  customColor: blendedColor,
  secondary: '#F8B832',
  gray: '#ACABAB',
  bg_gray: '#E9E8E8',
  lightest_gray: '#DBDBDB',
  lightest_gray1: '#e7e7e7',
  grey: 'grey',
  red: '#ff0000',
  bluishGrey: '#EFF0F3',
  transparent: '#00000000',
  header_bg_1: '#2A3762',
  header_bg_2: '#061031',
  drawer_box: '#E9E9E9',
  green: '#39B400',
  bg: '#F4F9FF'
};


export const GRADIENT_COLORS = {
  primaryGradient: [COLORS.primary1, COLORS.primary3],
  // Define other gradients...
};