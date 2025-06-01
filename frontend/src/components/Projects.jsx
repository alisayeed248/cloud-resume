import React from "react";
import { motion } from "framer-motion";
import resumeArchImage from "../assets/cloud_resume_architecture.png";
import mediaServiceArchImage from "../assets/media-service-architecture.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Serverless Cloud Resume",
      description:
        "A portfolio website built with React, Tailwind, and AWS. This project shows the end-to-end development of a serverless Resume website, using S3 to host the bucket, API Gateway and Lambda to handle the blog, Terraform and GitHub Actions for CI/CD, and more. Check it out!",
      image: resumeArchImage,
      color: "blue",
    },
    {
      id: 2,
      title: "Music Playlister",
      description:
        "A tool made in C# and .NET to grab YouTube videos from their link using the YouTube API and being able to convert and download them as MP3s or MP4s, repeat favorite sections with a slider, and keep a customized profile of songs you liked.",
      image: mediaServiceArchImage,
      color: "green",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        title: "text-blue-400",
        bullet: "text-blue-400",
        button: "text-blue-300",
      },
      green: {
        title: "text-green-400", 
        bullet: "text-green-400",
        button: "text-green-300",
      },
      purple: {
        title: "text-purple-400",
        bullet: "text-purple-400", 
        button: "text-purple-300",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <motion.div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-colors duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h3 className={`text-xl sm:text-2xl font-semibold ${colorClasses.title} mb-4`}>
                      {project.title}
                    </h3>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <button className={`${colorClasses.button} font-medium hover:underline bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200`}>
                        View Details
                      </button>
                      <button className={`${colorClasses.button} font-medium hover:underline bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200`}>
                        Live Demo
                      </button>
                      <button className={`${colorClasses.button} font-medium hover:underline bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200`}>
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;