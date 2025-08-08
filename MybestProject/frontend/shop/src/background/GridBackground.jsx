const GridBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative isolate ${className}`}
     style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
    >
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-400/30 dark:stroke-gray-800/30"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 0 40 L 40 40 40 0" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      {children}
    </div>
  );
};

export default GridBackground;




// const GridBackground = ({ children, className = "" }) => {
//   return (
//     <div className={`relative isolate ${className}`}>
//       <svg
//         className="absolute inset-0 -z-10 h-full w-full stroke-gray-400/30 dark:stroke-gray-800/30"
//         aria-hidden="true"
//       >
//         <defs>
//           <pattern
//             id="grid-pattern"
//             width="40"
//             height="40"
//             patternUnits="userSpaceOnUse"
//           >
//             <path d="M 0 40 L 40 40 40 0" fill="none" strokeWidth="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//       </svg>
//       {children}
//     </div>
//   );
// };
// export default GridBackground;

