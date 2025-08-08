export const Title = () => {
  return (
    <>
      <div className="owncontainer bg-gray-200">
        <svg id="hero" width="100%" 
         className="w-full h-[70px] sm:h-[100px] xl:h-[120px]"
        viewBox="0 0 400 80" 
        xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#000" />
            </linearGradient>
            <pattern id="wave" x="0" y="37" width="100%" height="100%" patternUnits="userSpaceOnUse">
              <path
                id="wavePath"
                d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 T140 9 T160 9 T160 9 T180 9 T200 9 T220 9 T240 9 T260 9 T280 9 T300 9 T320 9 T340 9 T360 9 V40 H-40z"
                mask="url(#mask)"
                fill="url(#gradient)"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          {/* Main title with wave */}
          <text x="50%" y="56" fontSize="28" fillOpacity=".1" textAnchor="middle">
            HR Dharam Kanta
          </text>
          <text x="50%" y="56" fontSize="28" fill="url(#wave)" fillOpacity="1" textAnchor="middle">
            HR Dharam Kanta
          </text>

          {/* Subtext below */}
          <text x="50%" y="70" fontSize="12" fill="#333" textAnchor="middle" className="xl:color-black">
            Building Material Supplier
          </text>
        </svg>
      </div>
    </>
  );
};



// export const Title = () => {
//   return (
//     <>
//     <div className="mt-10 sm:mt-0"></div>
// <div className="owncontainer bg-gray-200">
//     <svg id="hero" width="100%" height="110" viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <linearGradient id="gradient">
//           <stop offset="0%" stopColor="#000" />
//         </linearGradient>
//         <pattern id="wave" x="0" y="37" width="100%" height="100%" patternUnits="userSpaceOnUse">
//           <path id="wavePath"
//             d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 T140 9 T160 9 T160 9 T180 9 T200 9 T220 9 T240 9 T260 9 T280 9 T300 9 T320 9 T340 9 T360 9 V40 H-40z"
//             mask="url(#mask)" fill="url(#gradient)">
//             <animateTransform
//               attributeName="transform"
//               begin="0s"
//               dur="1.5s"
//               type="translate"
//               from="0,0"
//               to="40,0"
//               repeatCount="indefinite" />
//           </path>
//         </pattern>
//       </defs>
//       <text x="50%" y="60" fontSize="35" fillOpacity=".1" textAnchor="middle">HR Dharam Kanta</text>
//       <text x="50%" y="60" fontSize="35" fill="url(#wave)" fillOpacity="1" textAnchor="middle">HR Dharam Kanta</text>
//       <text x="50%" y="80" fontSize="16" fill="#333" id="herotext" textAnchor="middle">Building Material Supplier</text>
//     </svg>
// </div>
// </>
//   );
// }

