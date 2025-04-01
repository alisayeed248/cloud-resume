import React from "react";

const Education = () => {
  return (
    <section id="education">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left">
          EDUCATION
        </h2>

        <div className="bg-gray-800 rounded-xl p-6 sm:p-8">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
              Queens College, City University of New York
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Queens, New York
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg sm:text-xl font-medium text-white mb-2">
              Degrees
            </h4>
            <ul className="text-gray-300 text-sm sm:text-base space-y-2">
              <li>
                <span className="font-semibold">
                  Bachelor of Arts in Computer Science
                </span>
                <span className="text-gray-400 ml-2">(2021 - 2023)</span>
              </li>
              <li>
                <span className="font-semibold">
                  Bachelor of Arts in Biology
                </span>
                <span className="text-gray-400 ml-2">(2019 - 2021)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-medium text-white mb-2">
              Achievements
            </h4>
            <ul className="text-gray-300 text-sm sm:text-base space-y-2">
              <li>
                <span className="text-blue-300">● Lancefield Prize</span>
                <span className="text-gray-400 ml-2">(2021)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-gray-800 rounded-xl p-6 sm:p-8">
          <h4 className="text-lg sm:text-xl font-medium text-white mb-4">
            Relevant Coursework
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 text-sm sm:text-base">
            <ul className="space-y-2">
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Operating Systems</li>
            </ul>
            <ul className="space-y-2">
              <li>Database Systems</li>
              <li>Computer Networks</li>
              <li>Software Engineering</li>
            </ul>
            <ul className="space-y-2">
              <li>Machine Learning</li>
              <li>Web Development</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
