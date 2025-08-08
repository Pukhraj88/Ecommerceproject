
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-12 px-1 sm:px-2  owncontainer font-sans">
            {/* <div className="mt-10 sm:mt-0"></div> */}
      <div className="text-center mb-1 sm:mb-4 pt-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          How It <span className="text-yellow-500">Works</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
          With simple building construction steps, we ensure transparent and basic free experience during your home construction. Book-Track & Monitor - Settle.
        </p>
      </div>

      <div className="relative max-w-full mx-auto pr-0 pt-0 pb-[1px] pl-5 sm:p-1">
        {/* Dotted timeline line - mobile version */}
        <div className="block sm:hidden absolute left-7  top-0 bottom-2
        border-l-4 border-dotted border-yellow-500 z-20"></div>
        
        {/* Dotted timeline line - desktop version */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dotted border-yellow-500 transform -translate-x-1/2 z-50"></div>

        <div className="space-y-6 sm:space-y-8 md:space-y-16 m-2">
          {[
            {
              id: 1,
              title: 'Technical Consultation',
              desc: 'Share your vision for your dream home with our experienced architects. Leveraging advanced technology and extensive...',
              img: 'timeline-pic-1.png',
              icon: '📐',
            },
            {
              id: 2,
              title: 'Booking',
              desc: 'Secure your building construction project with us by paying a nominal booking fee of just 0.5% of the total construction cost...',
              img: 'timeline-pic-2.png',
              icon: '📅',
            },
            {
              id: 3,
              title: 'Design and Planning',
              desc: 'Collaborate with our highly skilled architects to design your home that reflects your personal style and functional needs...',
              img: 'timeline-pic3.png',
              icon: '✏️',
            },
            {
              id: 4,
              title: 'Home Construction',
              desc: 'Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards...',
              img: 'timeline-pic4.png',
              icon: '🏗️',
            },
          ].map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 1 ? 'sm:flex-row-reverse' : ''
              } gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 relative z-10 bg-white`}
            >
              {/* Mobile number circle with emoji */}
              <div className="sm:hidden absolute left-0 top-0 transform -translate-x-1/2 w-9 h-9 bg-yellow-500 text-white rounded-full z-10 flex items-center justify-center font-bold shadow-md text-sm">
                {step.id}
              </div>

              {/* Desktop number circle */}
              <div className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-500 text-white rounded-full z-10 items-center justify-center font-bold shadow-lg">
                {step.id.toString().padStart(2, '0')}
              </div>

              {/* Text section */}
              <div className={`flex items-start gap-3 sm:gap-4 sm:w-1/2 ${index % 2 === 1 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                <div className="hidden sm:block text-2xl mr-2 lg:pt-6">{step.icon}</div>
                <div className='lg:pt-5'>
                  <h3 className="lg:text-xl xl:text-2xl lg:font-sans text-lg sm:text-xl  font-semibold text-gray-800 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="lg:text-xl lg:font-sans text-xs sm:text-sm  text-gray-600">
                    {step.desc} <span className="text-yellow-500 font-medium cursor-pointer hover:underline">read more</span>
                  </p>
                </div>
              </div>
              {/* Image section */}
              <div className={`sm:w-1/2 ${index % 2 === 1 ? 'sm:pr-8' : 'sm:pl-8'} flex-shrink-0`}>
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-auto max-h-32 sm:max-h-40 md:max-h-48 object-contain mx-auto animate-slideDown"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};
export default HowItWorks;








// import React from 'react';


// const HowItWorks = () => {
//   return (
//     <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-20 owncontainer font-[Ubuntu]">
//             {/* <div className="mt-10 sm:mt-0"></div> */}
//       <div className="text-center mb-1 sm:mb-4 pt-5">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//           How It <span className="text-yellow-500">Works</span>
//         </h2>
//         <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
//           With simple building construction steps, we ensure transparent and basic free experience during your home construction. Book-Track & Monitor - Settle.
//         </p>
//       </div>

//       <div className="relative max-w-full mx-auto p-5 sm:p-1">
//         {/* Dotted timeline line - mobile version */}
//         <div className="block sm:hidden absolute left-7  top-0 bottom-0 
//         border-l-4 border-dotted border-yellow-500 z-20"></div>
        
//         {/* Dotted timeline line - desktop version */}
//         <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dotted border-yellow-500 transform -translate-x-1/2 z-50"></div>

//         <div className="space-y-6 sm:space-y-8 md:space-y-16 m-2">
//           {[
//             {
//               id: 1,
//               title: 'Technical Consultation',
//               desc: 'Share your vision for your dream home with our experienced architects. Leveraging advanced technology and extensive...',
//               img: 'timeline-pic-1.png',
//               icon: '📐',
//             },
//             {
//               id: 2,
//               title: 'Booking',
//               desc: 'Secure your building construction project with us by paying a nominal booking fee of just 0.5% of the total construction cost...',
//               img: 'timeline-pic-2.png',
//               icon: '📅',
//             },
//             {
//               id: 3,
//               title: 'Design and Planning',
//               desc: 'Collaborate with our highly skilled architects to design your home that reflects your personal style and functional needs...',
//               img: 'timeline-pic3.png',
//               icon: '✏️',
//             },
//             {
//               id: 4,
//               title: 'Home Construction',
//               desc: 'Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards...',
//               img: 'timeline-pic4.png',
//               icon: '🏗️',
//             },
//           ].map((step, index) => (
//             <div
//               key={step.id}
//               className={`flex flex-col sm:flex-row ${
//                 index % 2 === 1 ? 'sm:flex-row-reverse' : ''
//               } gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 relative z-10 bg-white`}
//             >
//               {/* Mobile number circle with emoji */}
//               <div className="sm:hidden absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 bg-yellow-500 text-white rounded-full z-10 flex items-center justify-center font-bold shadow-md text-sm">
//                 {step.id}
//               </div>

//               {/* Desktop number circle */}
//               <div className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-500 text-white rounded-full z-10 items-center justify-center font-bold shadow-lg">
//                 {step.id.toString().padStart(2, '0')}
//               </div>

//               {/* Text section */}
//               <div className={`flex items-start gap-3 sm:gap-4 sm:w-1/2 ${index % 2 === 1 ? 'sm:pl-8' : 'sm:pr-8'}`}>
//                 <div className="hidden sm:block text-2xl mr-2 lg:pt-6">{step.icon}</div>
//                 <div className='lg:pt-5'>
//                   <h3 className="lg:text-xl xl:text-2xl lg:font-sans text-lg sm:text-xl  font-semibold text-gray-800 mb-1 sm:mb-2">{step.title}</h3>
//                   <p className="lg:text-xl lg:font-sans text-xs sm:text-sm  text-gray-600">
//                     {step.desc} <span className="text-yellow-500 font-medium cursor-pointer hover:underline">read more</span>
//                   </p>
//                 </div>
//               </div>
//               {/* Image section */}
//               <div className={`sm:w-1/2 ${index % 2 === 1 ? 'sm:pr-8' : 'sm:pl-8'} flex-shrink-0`}>
//                 <img
//                   src={step.img}
//                   alt={step.title}
//                   className="w-full h-auto max-h-32 sm:max-h-40 md:max-h-48 object-contain mx-auto animate-slideDown"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </section>
//   );
// };
// export default HowItWorks;




