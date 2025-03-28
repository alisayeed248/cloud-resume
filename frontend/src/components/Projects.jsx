import React from "react";
import resumeArchImage from "../assets/cloud_resume_architecture.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Serverless Cloud Resume",
      description:
        "A portfolio website built with React, Tailwind, and AWS. This project shows the end-to-end development of a serverless Resume website, using S3 to host the bucket, API Gateway and Lambda to handle the blog, Terraform and GitHub Actions for CI/CD, and more. Check it out!",
      image: resumeArchImage,
    },
    {
      id: 2,
      title: "Music Playlister",
      description:
        "A tool made in C# and .NET to grab YouTube videos from their link using the YouTube API and being able to convert and download them as MP3s or MP4s, repeat favorite sections with a slider, and keep a customized profile of songs you liked.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left">
        PROJECTS
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="md:w-1/2 w-full bg-gray-800 rounded-xl p-6 sm:p-8 overflow-hidden"
          >
            <div className="w-full mb-4 rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <button className="text-blue-300 font-medium hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
