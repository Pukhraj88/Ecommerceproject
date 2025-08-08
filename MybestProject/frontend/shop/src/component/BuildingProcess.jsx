import React from 'react';

const steps = [
  ['/11.svg', 'Meet our experts', 'Discuss your ideas and goals. We’ll help plan your budget and design preferences.'],
  ['/2.svg', 'Design your custom home', 'See detailed 3D renderings that let you visualise your home before construction begins.'],
  ['/13.svg', 'Track the construction', 'Stay informed with regular updates on progress and quality checks at every stage.'],
  ['/14.svg', 'Move in to your home', 'A pre-delivery inspection ensures everything is in place before handover.'],
];

export const BuildingProcess = () => {
  return (
    <>
{/* <GridBackground className='owncontainer'> */}
    <section className="font-sans !p-2">
    {/* mobile view  */}
    <div className='block min-[410px]:hidden'>
      <div className="text-start mb-2 ">
        <h2 className="text-xl font-bold text-[#000] ">
          A Glimpse Into Our Building Process.
        </h2>
        <p className="mt-1 text-[#5f5f5f] text-sm">
          Explore our step-by-step process of building your dream home.
        </p>
      </div>
      <div className="border-l-[3px] border-gray-300 border-dashed">
        {steps.map(([img,text,des], index) => (
          <div key={index} className="p-2 flex items-start">
           <div className="pt-2 mr-2 w-14">
              <img src={img} alt="" className="w-8 h-8" />
            </div> 
            <div className="">
              <h3 className="font-bold text-[16px]">{text}</h3>
              <p className="text-justify text-[14px]">{des}</p>
            </div>
          </div>
        ))}
      </div>
  </div>

 {/* desktiop view  */}
    <div className='block max-[411px]:hidden'>

 <div className="text-center mb-2 pt-6">
        <h2 className="text-2xl font-bold text-[#000] pt-6">
          A Glimpse Into Our Building Process.
        </h2>
        <p className="pt-3 text-[#5f5f5f] text-2xl pb-3">
          Explore our step-by-step process of building your dream home.
        </p>
      </div>


    {/* <div className=''> */}
      <div className="grid sm:grid-cols-[_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-1 sm:gap-1">
        {steps.map(([img,text,des], index) => (
          <div key={index} className="border border-gray-600 bg-white p-2 rounded-[4px]">
          {/* <div key={index} className="border bg-white p-2 rounded-[4px]"> */}
           <div className="">
              <img src={img} alt="" className="w-6 md:w-8 lg:w-10 m-auto" />
            </div> 
            <div className="">
              <h3 className="font-bold text-[14px] lg:text-[16px] flex justify-center">{text}</h3>
              <p className="text-[9px] lg:text-[12px] flex justify-center sm:px-2 lg:sm:px-4 lg:pb-2">{des}</p>
            </div>
          </div>
        ))}
      </div>
  </div>


    </section>
    {/* </GridBackground> */}
    </>
  );
};


















// import React from 'react';

// const steps = [
//   {
//     icon: '/11.svg',
//     title: 'Meet our experts',
//     desc: 'Discuss your ideas and goals. We’ll help plan your budget and design preferences.',
//   },
//   {
//     icon: '/2.svg',
//     title: 'Design your custom home',
//     desc: 'See detailed 3D renderings that let you visualise your home before construction begins.',
//   },
//   {
//     icon: '/13.svg',
//     title: 'Track the construction',
//     desc: 'Stay informed with regular updates on progress and quality checks at every stage.',
//   },
//   {
//     icon: '/14.svg',
//     title: 'Move in to your home',
//     desc: 'A pre-delivery inspection ensures everything is in place before handover.',
//   },
// ];

// // const steps = [
// //   ['/11.svg', 'Meet our experts', 'Discuss your ideas and goals. We’ll help plan your budget and design preferences.'],
// //   ['/2.svg', 'Design your custom home', 'See detailed 3D renderings that let you visualise your home before construction begins.'],
// //   ['/13.svg', 'Track the construction', 'Stay informed with regular updates on progress and quality checks at every stage.'],
// //   ['/14.svg', 'Move in to your home', 'A pre-delivery inspection ensures everything is in place before handover.'],
// // ];

// export const BuildingProcess = () => {
//   return (
//     <section className="py-16 px-4 sm:px-10 md:px-24 font-sans">

//       <div className="text-start mb-2 sm:mb-6 ">
//         <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#000] italic">
//           A glimpse into our building process.
//         </h2>
//         <p className="mt-2 text-[#5f5f5f] text-sm md:text-lg">
//           Explore our step-by-step process of building your dream home.
//         </p>
//       </div>


//       {/* Vertical Timeline for Mobile */}
//       <div className="relative pl-10 border-l-2 border-dashed border-gray-300">
//         {steps.map((step, index) => (
//           <div key={index} className="flex items-start mb-10 relative">
//             {/* Icon */}
//             <div className="absolute -left-[26px] top-5 sm:top-3 w-10 h-10 bg-[#fcfbf9]">
//               <img src={step.icon} alt="" className="w-8 h-8" />
//             </div>


//             {/* Text */}
//             <div className="ml-4">
//               <h3 className="font-semibold text-base sm:text-lg mb-1">{step.title}</h3>
//               <p className="text-sm text-gray-600">{step.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>


//     </section>
//   );
// };

