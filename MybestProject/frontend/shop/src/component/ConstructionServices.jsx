import React from "react";
import { motion } from "framer-motion";
import GridBackground from "../background/GridBackground";

const materialCategories = [
  {
    title: "Cement & Concrete",
    description: "Premium quality cement for construction",
    products: [
      {
        name: "OPC Cement",
        features: ["43 & 53 Grade", "High Strength", "Quick Setting"],
        brands: ["Ultratech", "JK", "ACC", "Ambuja"],
      },
      {
        name: "PPC Cement",
        features: ["Low Heat", "Eco Friendly", "Durable"],
        brands: ["Bangur", "Birla", "Shree"],
      },
    ],
    icon: "🏗️",
  },
  {
    title: "Aggregates",
    description: "Quality materials for foundation work",
    products: [
      {
        name: "Rodi Aggregates",
        features: ["10mm", "20mm", "50mm"],
        types: ["Washed", "Graded"],
      },
      {
        name: "Sand & Soil",
        features: ["River Sand", "M-Sand", "Filtered Soil"],
        types: ["Coarse", "Fine"],
      },
    ],
    icon: "🧱",
  },
  {
    title: "Bricks",
    description: "Durable building blocks",
    products: [
      {
        name: "Clay Bricks",
        features: ["1st Quality", "2nd Quality"],
        types: ["Red", "Wirecut"],
      },
      {
        name: "Fly Ash Bricks",
        features: ["Lightweight", "Eco-Friendly"],
        types: ["Standard", "AAC"],
      },
    ],
    icon: "🧱",
  },
  {
    title: "Equipment Rental",
    description: "Tools and machinery",
    products: [
      {
        name: "Machinery",
        features: ["Tractor", "Loader"],
        rental: ["Hourly", "Daily"],
      },
      {
        name: "Tools",
        features: ["Chalna", "Jali"],
        rental: ["Manual"],
      },
    ],
    icon: "🚜",
  },
];

const cardVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      delay: i * 0.08,
    },
  }),
  hover: {
    y: -3,
    transition: { type: "spring", stiffness: 400 },
  },
};

const MaterialCategoryCard = ({ category, index }) => (
  <motion.div
    className="bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-sm overflow-hidden"
    variants={cardVariants}
    custom={index}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <div className="p-3 sm:p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl p-2 rounded-md bg-gray-50">
          {category.icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{category.title}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        {category.products.map((product, i) => (
          <div key={i} className="border-t border-gray-100 pt-3">
            <h4 className="font-medium text-gray-800 text-sm">
              {product.name}
            </h4>

            <div className="mt-1">
              <div className="flex flex-wrap gap-1">
                {product.features.map((feature, j) => (
                  <span
                    key={j}
                    className="text-xs bg-gray-50 px-2 py-0.5 rounded text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
export const ConstructionServices = () => (
  <GridBackground className="py-8 bg-gray-50">
    <div className="w-full mx-auto px-1 sm:px-2">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >

        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Best{" "}
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Quality Supplies
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-lg mx-auto text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Premium materials for durable construction projects
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {materialCategories.map((category, index) => (
          <MaterialCategoryCard key={index} category={category} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
      </motion.div>
    </div>
  </GridBackground>
);













// import React from 'react';
// import { motion } from 'framer-motion';
// import GridBackground from '../background/GridBackground';

// const materialCategories = [
//   {
//     title: 'Cement & Concrete',
//     description: 'Premium quality cement for construction',
//     products: [
//       {
//         name: 'OPC Cement',
//         features: ['43 & 53 Grade', 'High Strength', 'Quick Setting'],
//         brands: ['Ultratech', 'JK', 'ACC', 'Ambuja']
//       },
//       {
//         name: 'PPC Cement',
//         features: ['Low Heat', 'Eco Friendly', 'Durable'],
//         brands: ['Bangur', 'Birla', 'Shree']
//       }
//     ],
//     icon: '🏗️'
//   },
//   {
//     title: 'Aggregates',
//     description: 'Quality materials for foundation work',
//     products: [
//       {
//         name: 'Rodi Aggregates',
//         features: ['10mm', '20mm', '50mm'],
//         types: ['Washed', 'Graded']
//       },
//       {
//         name: 'Sand & Soil',
//         features: ['River Sand', 'M-Sand', 'Filtered Soil'],
//         types: ['Coarse', 'Fine']
//       }
//     ],
//     icon: '🪨'
//   },
//   {
//     title: 'Bricks',
//     description: 'Durable building blocks',
//     products: [
//       {
//         name: 'Clay Bricks',
//         features: ['1st Quality', '2nd Quality'],
//         types: ['Red', 'Wirecut']
//       },
//       {
//         name: 'Fly Ash Bricks',
//         features: ['Lightweight', 'Eco-Friendly'],
//         types: ['Standard', 'AAC']
//       }
//     ],
//     icon: '🧱'
//   },
//   {
//     title: 'Equipment Rental',
//     description: 'Tools and machinery',
//     products: [
//       {
//         name: 'Machinery',
//         features: ['Tractor', 'Loader'],
//         rental: ['Hourly', 'Daily']
//       },
//       {
//         name: 'Tools',
//         features: ['Chalna', 'Jali'],
//         rental: ['Manual']
//       }
//     ],
//     icon: '🚜'
//   }
// ];

// const cardVariants = {
//   hidden: { y: 15, opacity: 0 },
//   visible: i => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 12,
//       delay: i * 0.08
//     }
//   }),
//   hover: {
//     y: -3,
//     transition: { type: "spring", stiffness: 400 }
//   }
// };

// const MaterialCategoryCard = ({ category, index }) => (
//   <motion.div
//     className="bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm overflow-hidden"
//     variants={cardVariants}
//     custom={index}
//     initial="hidden"
//     animate="visible"
//     whileHover="hover"
//   >
//     <div className="p-4">
//       <div className="flex items-center gap-3 mb-3">
//         <div className="text-2xl p-2 rounded-md bg-gray-50">
//           {category.icon}
//         </div>
//         <div>
//           <h3 className="font-bold text-gray-800">{category.title}</h3>
//           <p className="text-sm text-gray-600">{category.description}</p>
//         </div>
//       </div>

//       <div className="space-y-3">
//         {category.products.map((product, i) => (
//           <div key={i} className="border-t border-gray-100 pt-3">
//             <h4 className="font-medium text-gray-800 text-sm">{product.name}</h4>

//             <div className="mt-1">
//               <div className="flex flex-wrap gap-1">
//                 {product.features.map((feature, j) => (
//                   <span key={j} className="text-xs bg-gray-50 px-2 py-0.5 rounded text-gray-700">
//                     {feature}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// export const ConstructionServices = () => (
//   <GridBackground className="py-8 bg-gray-50">
//     <div className="max-w-6xl mx-auto px-4 sm:px-5">
//       <motion.div
//         className="text-center mb-8"
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         <motion.div
//           className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.1 }}
//         >
//           Building Materials
//         </motion.div>
//         <motion.h2
//           className="text-2xl font-bold text-gray-900 mb-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           Quality <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Construction Supplies</span>
//         </motion.h2>
//         <motion.p
//           className="text-gray-600 max-w-lg mx-auto text-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Premium materials for durable construction projects
//         </motion.p>
//       </motion.div>

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.08,
//               delayChildren: 0.2
//             }
//           }
//         }}
//       >
//         {materialCategories.map((category, index) => (
//           <MaterialCategoryCard key={index} category={category} index={index} />
//         ))}
//       </motion.div>

//       <motion.div
//         className="mt-8 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         <motion.button
//           className="inline-flex items-center px-5 py-2 text-sm rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium shadow-sm hover:shadow transition-all"
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           Request Quote
//           <svg className="ml-1.5 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </motion.button>
//       </motion.div>
//     </div>
//   </GridBackground>
// );
