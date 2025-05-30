import React from "react";
import awsIcon from "../assets/aws-icon.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="aboutme" className="scroll-mt-8">
      <div className="min-h-screen w-full p-6 md:p-8 lg:p-10 flex flex-col justify-center">
        {/* Intro */}
        <div className="text-white text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Sayeed Ali
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            ... a passionate web developer currently building this resume
            serverless on AWS. I'm working with a variety of modern technologies
            including Terraform, S3, DynamoDB, API Gateway, Lambda, GitHub
            Actions, React, and Tailwind to create an efficient application. I
            would love for you to check it out and see how these tools come
            together to power my personal website. In my free time, I enjoy
            learning new programming concepts and continually improving my
            skills.
          </p>
        </div>

        {/* Technologies & Experience */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center md:text-left">
            Technologies & Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                title: "AWS",
                description: "Serverless, S3, Lambda, API Gateway",
              },
              { title: "Terraform", description: "Infrastructure as Code" },
              {
                title: "React & Tailwind",
                description: "Modern frontend development",
              },
              { title: "CI/CD", description: "GitHub Actions & automation" },
              { title: "Backend", description: "DynamoDB, Node.js, APIs" },
              {
                title: "Experience",
                description: "2 years in web development",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-lg hover:bg-white/10 hover:scale-105 hover:border-orange-400/30 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                {item.title === "AWS" ? (
                  <motion.h4
                    className="text-base sm:text-lg font-semibold text-blue-400 relative flex items-center"
                    whileHover="hover"
                    initial="initial"
                    variants={{ initial: {}, hover: {} }}
                  >
                    <span className="relative">
                      AWS
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-orange-400"
                        variants={{
                          initial: { width: 0 },
                          hover: { width: "100%" },
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    </span>
                    <motion.img
                      src={awsIcon}
                      alt="AWS"
                      className="w-6 h-6 ml-2"
                      variants={{
                        initial: { opacity: 0, scale: 0, x: -10 },
                        hover: { opacity: 1, scale: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                  </motion.h4>
                ) : (
                  <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                    {item.title}
                  </h4>
                )}
                <p className="text-xs sm:text-sm text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume & Links */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center md:text-left">
            Download Resume & Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 sm:py-3 rounded-lg text-sm sm:text-base"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/alisayeed248"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white text-center py-2 sm:py-3 rounded-lg text-sm sm:text-base"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
