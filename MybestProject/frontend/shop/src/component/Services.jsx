import React from 'react';
import { motion } from 'framer-motion';
import GridBackground from '../background/GridBackground';

const services = [
  { title: 'Cement (OPC & PPC)', description: 'Premium brands for strong, lasting structures', features: ['OPC 43/53', 'PPC Variants', 'Bulk Supply'], color: 'from-blue-500 to-blue-600', icon: '🏗️' },
  { title: 'Construction Soil', description: 'Engineered soil for foundation stability', features: ['Tested Quality', 'Proper Grading', 'Moisture Control'], color: 'from-emerald-500 to-emerald-600', icon: '🏔️' },
  { title: 'Bricks', description: 'High-density, durable construction bricks', features: ['Clay & Fly Ash', 'Weather Resistant', 'High Strength'], color: 'from-amber-500 to-amber-600', icon: '🧱' },
  { title: 'Rodi Aggregates', description: 'Crushed stone for concrete & roads', features: ['10-20mm Sizes', 'Washed', 'High Density'], color: 'from-rose-500 to-rose-600', icon: '⛰️' },
  { title: 'Sand & Gravel', description: 'Clean materials for all builds', features: ['River Sand', 'Pit Sand', 'Graded'], color: 'from-violet-500 to-violet-600', icon: '🏝️' },
  { title: 'Transport', description: 'Reliable logistics support', features: ['Timely', 'Bulk Transport', 'GPS Tracked'], color: 'from-indigo-500 to-indigo-600', icon: '🚛' },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: i => ({
    y: 0, opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 15, delay: i * 0.05 }
  }),
  hover: { y: -4, transition: { type: "spring", stiffness: 400 } }
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="relative rounded-[4px] border border-gray-300 shadow-xs hover:shadow-sm overflow-hidden"
    variants={cardVariants}
    custom={index}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <div className={`h-1 bg-gradient-to-r ${service.color}`} />
    <div className="p-4">
      <div className="flex items-start gap-3 mb-3">
        <motion.div
          className={`text-2xl p-2 rounded-lg bg-gradient-to-br ${service.color} text-white`}
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
        >
          {service.icon}
        </motion.div>
        <div>
          <h3 className="font-bold text-gray-800">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 border-t border-gray-100 pt-3">
        {service.features.map((f, i) => (
          <motion.li
            key={i}
            className="text-xs font-medium px-2 py-1 bg-gray-50 rounded-md text-gray-700"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.05 + i * 0.03 }}
          >
            {f}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export const Services = () => (
  <GridBackground className="">

  <div className="relative py-8 sm:py-12 ">
    <div className="absolute inset-0 -z-10 opacity-10" />

    <div className="max-w-full mx-auto px-1 sm:px-2">
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <motion.div className="text-xs font-semibold tracking-wider text-amber-500 uppercase mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          Construction Solutions
        </motion.div>
        <motion.h1 className="text-3xl font-bold text-gray-900 mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Quality <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Materials</span>
        </motion.h1>
        <motion.p className="text-gray-600 max-w-2xl mx-auto text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Trusted building materials with reliable service
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
      </div>

      <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <motion.button
          className="text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-xs hover:shadow-sm transition-all"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Quote →
        </motion.button>
      </motion.div>
    </div>
  </div>
  </GridBackground>
);







