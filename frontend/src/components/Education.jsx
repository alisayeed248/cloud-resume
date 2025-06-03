import React from "react";
import { motion } from "framer-motion";
import cunyLogo from "../assets/cuny-logo.png";
import qcLogo from "../assets/qc-logo.png";
import solutionsArchitectIcon from "../assets/solutions-architect-pro-icon.png";

const Education = () => {
  return (
    <section id="education">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          EDUCATION
        </motion.h2>

        {/* Queens College Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Logos - Top Right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex space-x-3">
            <img
              src={qcLogo}
              alt="Queens College Logo"
              className="w-24 h-16 sm:w-24 sm:h-20 opacity-60"
            />
            <img
              src={cunyLogo}
              alt="CUNY Logo"
              className="w-24 h-16 sm:w-24 sm:h-20 opacity-60"
            />
          </div>

          {/* University Name and Location */}
          <div className="mb-8 pr-20 sm:pr-28">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2 font-mono">
              Queens College, CUNY
            </h3>
            <div className="flex items-center text-gray-300 text-sm italic">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Queens, New York
            </div>
          </div>

          {/* Bachelor's Degrees */}
          <div className="mb-8">
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold text-blue-300">
                  Bachelor of Arts in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text font-bold">Computer Science</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2021 - 2023
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-blue-300">
                  Bachelor of Arts in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text font-bold">Biology</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2019 - 2021
                </div>
              </div>
            </div>
          </div>

          {/* Coursework & Achievements - Card within card */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="text-lg font-medium text-white mb-3">
              Coursework & Achievements
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex">
                <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                <span className="text-sm leading-relaxed">
                  Data Structures, Algorithms, Operating Systems, Database
                  Systems, Computer Networks, Machine Learning and NLP, Web
                  Development, Cloud Computing
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                <span className="text-sm">
                  <a
                    href="https://www.qc.cuny.edu/academics/bio/wp-content/uploads/sites/117/2022/09/BIO_Currents_2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-gray-300 transition-colors"
                  >
                    Lancefield Prize
                  </a>
                  <span className="text-gray-400 font-mono ml-2">(2021)</span>
                  <span className="text-gray-400 italic ml-2">
                    - Awarded to the biology student with the highest GPA
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Card */}
        {/* Certifications Card */}
        <motion.div
          className="mt-6 sm:mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-white mb-4">
            Professional Certifications
          </h4>
          <div>
            <motion.div
              className="inline-block"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div className="text-lg font-semibold text-orange-400 relative flex items-center cursor-default">
                <span className="relative">
                  AWS Solutions Architect Professional
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-orange-400"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </span>
                <motion.img
                  src={solutionsArchitectIcon}
                  alt="AWS Solutions Architect Professional"
                  className="absolute w-24 h-24 left-full ml-2 -top-8" // Positioned absolutely
                  variants={{
                    rest: { opacity: 0, scale: 0, x: -10 },
                    hover: { opacity: 1, scale: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              </motion.div>
            </motion.div>
            <div className="flex items-center text-gray-400 text-sm mt-1">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              March 2025
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
