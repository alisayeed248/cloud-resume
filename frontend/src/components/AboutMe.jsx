import React from "react";
import awsIcon from "../assets/aws-icon.png";
import javaIcon from "../assets/java-icon.png";
import reactIcon from "../assets/react-icon.png";
import terraformIcon from "../assets/terraform-icon.png";
import dockerIcon from "../assets/docker-icon.png";
import experienceIcon from "../assets/experience-icon.png";
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
            ... a passionate software developer with over a year of professional
            experience who loves working with cloud technologies and building
            scalable applications. This entire website was built completely
            serverless on AWS - feel free to check out my projects section to
            see how it was architected, along with exciting projects I'm working
            on! When I'm not coding, you can find me reading books, travelling
            to new places, and pushing the boundaries of my tech skills.
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
                title: "AWS Cloud",
                description: "Lambda, S3, API Gateway, DynamoDB, EC2",
                icon: awsIcon,
                underlineColor: "bg-orange-400",
                hoverBorderColor: "hover:border-orange-400/30",
              },
              {
                title: "Java & Spring Boot",
                description:
                  "Enterprise applications, REST APIs, microservices",
                icon: javaIcon,
                underlineColor: "bg-red-500",
                hoverBorderColor: "hover:border-red-500/30",
              },
              {
                title: "React & Frontend",
                description: "Modern web apps, responsive design, TypeScript",
                icon: reactIcon,
                underlineColor: "bg-cyan-400",
                hoverBorderColor: "hover:border-cyan-400/30",
              },
              {
                title: "Terraform",
                description: "Infrastructure as Code, cloud automation",
                icon: terraformIcon,
                underlineColor: "bg-purple-500",
                hoverBorderColor: "hover:border-purple-500/30",
              },
              {
                title: "Docker & DevOps",
                description: "Containerization, CI/CD, GitHub Actions",
                icon: dockerIcon,
                underlineColor: "bg-blue-500",
                hoverBorderColor: "hover:border-blue-500/30",
              },
              {
                title: "2+ Years Experience",
                description: "Professional development, problem solving",
                icon: experienceIcon,
                underlineColor: "bg-green-500",
                hoverBorderColor: "hover:border-green-500/30",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-lg hover:bg-white/10 hover:border-orange-400/30 transition-all duration-150 cursor-default"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.15 }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-blue-400 relative flex items-center">
                  <span className="relative">
                    {item.title}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-0.5 ${item.underlineColor}`}
                      variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </span>
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 ml-2"
                    variants={{
                      rest: { opacity: 0, scale: 0, x: -10 },
                      hover: { opacity: 1, scale: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact & Links */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center md:text-left">
            Let's Connect
          </h3>
          
          {/* Email Section */}
          <div className="mb-4 text-center md:text-left">
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              Reach out to me at:
            </p>
            <a
              href="mailto:alisayeed248@gmail.com"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm sm:text-base font-medium">
                alisayeed248@gmail.com
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            {/* GitHub Button */}
            <a
              href="https://github.com/alisayeed248"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              title="GitHub Profile"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/sayeedali248/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              title="LinkedIn Profile"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-blue-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;