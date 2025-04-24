import localFont from "next/font/local";

export const eudoxus = localFont({
  src: [
    {
      path: "./EudoxusSans-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./EudoxusSans-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./EudoxusSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./EudoxusSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./EudoxusSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./EudoxusSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});



// @font-face {
//   font-family: 'Eudoxus Sans';
//   src: url('https://stijndv.com/fonts/EudoxusSans-ExtraLight.woff2') format('woff2'),
//       url('https://stijndv.com/fonts/EudoxusSans-ExtraLight.woff') format('woff');
//   font-weight: 200;
//   font-style: normal;
//   font-display: block;
// }
// @font-face {
//   font-family: 'Eudoxus Sans';
//   src: url('https://stijndv.com/fonts/EudoxusSans-Medium.woff2') format('woff2'),
//       url('https://stijndv.com/fonts/EudoxusSans-Medium.woff') format('woff');
//   font-weight: 500;
//   font-style: normal;
//   font-display: block;
// }
