import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WORK EXPERIENCE
        </motion.h2>

        {/* Software Engineer - CISDD */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 mb-6 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  Software Engineer
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Research Foundation CUNY
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Manhattan, NY
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Aug 2023 - Present
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <ul className="text-gray-300 text-sm sm:text-base space-y-3">
                <li className="flex">
                  <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Built an automated service to deliver monthly reports directly to CUNY executives, analyzing annual energy expenditures of upwards of $25+ million.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Analyzed the NYC Marriage Bureau's legacy document processing system and architected an AWS migration strategy to convert thousands of physical records into PDFs for cloud storage. Provided technical specifications and recommendations to the NYC Office of Technology and Innovation development team, including networking architecture, cloud migration pathways, and AWS-based solutions to address system challenges and workflow bottlenecks.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Resolved multiple critical bugs for case management systems and other internal tooling for employees at the NYC Marriage Bureau using Python, Flask, and PHP.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Configured networking, DHCP, and domain controller services for all marriage bureau
                    machines, applications, and servers. Automated virtual machine tasks with shell scripting in Linux.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Mentored and onboarded SWE intern cohorts. Led training sessions, created onboarding documentation, assisted in accessing dev and production environments, and provided first issues.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Machine Learning Engineer Intern - Rad AI */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 mb-6 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  Machine Learning Engineer Intern
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Open Avenues: Rad AI
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Remote
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Sep 2023 - Nov 2023
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <ul className="text-gray-300 text-sm sm:text-base space-y-3">
                <li className="flex">
                  <span className="text-green-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Analyzed thousands of radiology reports for Rad AI using Python to discover patterns
                    among patient reports and to categorize them into their most likely diagnostic criteria.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-green-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Applied machine learning algorithms to minimize high-dimensional data into
                    easy-to-read graphs.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-green-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Utilized TF-IDF methodologies to transform radiology text into
                    machine-learning-friendly formats.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Software Engineer Intern - Lob */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  Software Engineer Intern
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Open Avenues: Lob
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Remote
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Jan 2023 - Mar 2023
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <ul className="text-gray-300 text-sm sm:text-base space-y-3">
                <li className="flex">
                  <span className="text-purple-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Used Node.js and React to build a microservice to automate mail dispatch processes for Lob.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Implemented fault-tolerant backend endpoints with REST APIs to interact with
                    PostgreSQL queries.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-400 mr-3 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Successfully deployed the final product as a widget using Heroku for use by Lob's API users.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;