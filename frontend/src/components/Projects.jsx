import React, { useState, useEffect } from "react";
import resumeArchImage from "../assets/cloud_resume_architecture.png";
import weatherStreamingArchImage from "../assets/weather_streaming_architecture.png";

const Projects = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10px 0px' }
    );

    const cards = document.querySelectorAll('#projects .card-float');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Serverless Cloud Resume",
      description:
        "A portfolio website built with React, Tailwind, and AWS. This project shows the end-to-end development of a serverless Resume website, using S3 to host the bucket, API Gateway and Lambda to handle the blog, Terraform and GitHub Actions for CI/CD, and more. Check it out!",
      image: resumeArchImage,
      color: "blue",
      demoType: "current",
      demoMessage:
        "You're experiencing it right now! This entire website is the live demo.",
    },
    {
      id: 2,
      title: "WeatherStream Pipeline",
      description:
        "A production-ready weather data processing pipeline built with Spring Boot, Kafka, and PostgreSQL. Features dynamic city scheduling, real-time data streaming, and a CLI interface for easy management. Continuously ingests weather data from OpenWeatherMap API, processes it through Kafka topics, and stores historical data for querying.",
      image: weatherStreamingArchImage,
      color: "green",
      demoType: "video",
      demoMessage: "Watch the WeatherStream Pipeline in action:",
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

  const handleLiveDemo = (project) => {
    setSelectedProject(project);
    setShowVideoModal(true);
  };

  return (
    <section id="projects">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left">
          PROJECTS
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className="card-float bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-colors duration-200"
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
                    <h3
                      className={`text-xl sm:text-2xl font-semibold ${colorClasses.title} mb-4`}
                    >
                      {project.title}
                    </h3>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setShowComingSoon(true)}
                        className={`${colorClasses.button} font-medium hover:underline bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200`}
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleLiveDemo(project)}
                        className={`${colorClasses.button} font-medium hover:underline bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200`}
                      >
                        Live Demo
                      </button>
                      <button
                        className={`${colorClasses.button} font-medium hover:underline bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200`}
                      >
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Modal */}
        {showComingSoon && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-900 border border-white/20 rounded-xl p-8 max-w-md mx-4">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Coming Soon!
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Detailed project breakdown will be available in an upcoming blog
                post. In the meantime, try Live Demo.
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Video/Demo Modal */}
        {showVideoModal && selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-white/20 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title} - Live Demo
                </h3>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Demo Content */}
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  {selectedProject.demoMessage}
                </p>

                {selectedProject.demoType === "current" ? (
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                    <div className="text-4xl mb-4">🎉</div>
                    <p className="text-blue-300 text-lg">
                      You're already experiencing the live demo!
                    </p>
                  </div>
                ) : selectedProject.demoType === "video" ? (
                  selectedProject.demoUrl ? (
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <img
                        src={selectedProject.demoUrl}
                        alt={`${selectedProject.title} demo`}
                        className="w-full max-w-3xl mx-auto rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                      <div className="text-4xl mb-4">🎬</div>
                      <p className="text-yellow-300">
                        Demo video coming soon! Currently preparing the
                        demonstration.
                      </p>
                    </div>
                  )
                ) : null}
              </div>

              {/* Close Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;