import React from "react";

const Experience = () => {
  return (
    <div className="flex-1 w-full 
      pl-16 sm:pl-20 md:pl-72 lg:pl-80 
      pr-4 sm:pr-6 md:pr-8 lg:pr-14
      pt-8 sm:pt-12 md:pt-16 lg:pt-20
    ">
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
          WORK EXPERIENCE
        </h2>

        <div className="bg-gray-800 rounded-xl p-6 sm:p-8 mb-6">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  Software Engineer
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  CUNY Institute for Software Design & Development
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Manhattan, NY
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                Aug 2023 - Present
              </p>
            </div>
            <ul className="text-gray-300 text-sm sm:text-base space-y-2">
              <li>
                <span className="text-blue-300">●</span> Developed searchable case management and financial reporting services for the NYC Marriage Bureau using Python and Django to store, sort, and retrieve marriage cases and cash reports.
              </li>
              <li>
                <span className="text-blue-300">●</span> Aggregated sensor data and analyzed energy usage patterns across CUNY to identify inefficiencies and optimize costs, examining multi-million dollar expenditures. Developed an automated email service using Java and Spring Boot to generate quarterly energy reports to CUNY leadership.
              </li>
              <li>
                <span className="text-blue-300">●</span> Designed and implemented a full-scale ETL solution using Talend to digitize and streamline NYC Marriage Bureau's document processing workflow, converting thousands of physical marriage records into PDFs. Extracted, transformed, and loaded structured metadata into SQL Server.
              </li>
              <li>
                <span className="text-blue-300">●</span> Configured networking, DHCP, and domain controller services for all marriage bureau machines, applications, and servers. Automated virtual machine tasks with shell scripting in Linux.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 sm:p-8 mb-6">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  Machine Learning Engineer Intern
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Open Avenues: Rad AI
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Remote
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                Sep 2023 - Nov 2023
              </p>
            </div>
            <ul className="text-gray-300 text-sm sm:text-base space-y-2">
              <li>
                <span className="text-blue-300">●</span> Analyzed thousands of radiology reports for Rad AI using Python to discover patterns among patient reports and to categorize them into their most likely diagnostic criteria.
              </li>
              <li>
                <span className="text-blue-300">●</span> Applied machine learning algorithms to minimize high-dimensional data into easy-to-read graphs.
              </li>
              <li>
                <span className="text-blue-300">●</span> Utilized TF-IDF methodologies to transform radiology text into machine-learning-friendly formats.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 sm:p-8">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  Software Engineer Intern
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Open Avenues: Lob
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Remote
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                Jan 2023 - Mar 2023
              </p>
            </div>
            <ul className="text-gray-300 text-sm sm:text-base space-y-2">
              <li>
                <span className="text-blue-300">●</span> Used Node.js and React to build a microservice to automate mail dispatch processes for Lob.
              </li>
              <li>
                <span className="text-blue-300">●</span> Implemented fault-tolerant backend endpoints with REST APIs to interact with PostgreSQL queries.
              </li>
              <li>
                <span className="text-blue-300">●</span> Successfully deployed the final product as a widget using Heroku for use by Lob's API users.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;