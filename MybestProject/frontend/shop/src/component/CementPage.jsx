
import React from "react";
import { motion } from "framer-motion";
import GridBackground from "../background/GridBackground";

export const CementPage = () => (
  <GridBackground className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Decorative Motion Elements */}
      <div className="relative mb-16">
        <motion.div
          className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-blue-100 opacity-30 blur-xl"
          animate={{ scale: [1, 1.1, 1], x: [0, 5, 0], y: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-amber-100 opacity-30 blur-xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -5, 0], y: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Cement Overview CTA */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 text-center rounded-xl border border-blue-100 shadow relative overflow-hidden mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Explore Our <span className="text-blue-600">Cement Solutions</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Durable, high-performance cement for residential, commercial, and infrastructure projects.
        </p>
      </motion.div>

      {/* Storage Best Practices */}
      <motion.div
        className="bg-white rounded-xl border border-gray-200 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-blue-600 px-6 py-4 rounded-t-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Cement Storage & Handling Best Practices
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {[
            { icon: "🏗️", title: "Storage Conditions", tips: ["Elevated wooden platforms", "Dry, ventilated space", "Away from walls", "Cover with tarpaulin"] },
            { icon: "⏱️", title: "Shelf Life", tips: ["Use within 3 months", "First-in-first-out", "Check manufacturing date", "Test if stored >6 months"] },
            { icon: "🚛", title: "Transport", tips: ["Covered vehicles", "Avoid damaged bags", "Stack properly", "Protect from rain"] },
            { icon: "⚠️", title: "Precautions", tips: ["No direct ground contact", "Avoid stacking >10 bags", "Separate by type/grade", "Watch for lumps"] }
          ].map(({ icon, title, tips }, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4">
              <div className="text-2xl mb-2">{icon}</div>
              <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
              <ul className="space-y-1">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 mr-2" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Technical Guidance CTA */}
      <motion.div
        className="mt-16 bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl border border-blue-100 p-8 text-center shadow relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Need <span className="text-blue-600">Technical Guidance</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Our certified cement consultants are ready to recommend the ideal mix based on your project goals.
        </p>
        <motion.button
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Schedule Consultation
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  </GridBackground>
);
