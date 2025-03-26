import React from "react";

const AboutMe = () => {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start justify-center min-h-screen p-6 sm:p-10 md:p-14 w-full">
      <div className="max-w-5xl w-full px-4 sm:px-6 md:px-14">
        <div className="text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Sayeed Ali
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
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

        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Technologies & Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                description: "3+ years in web development",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Download Resume & Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 sm:py-4 rounded-xl shadow-lg text-base sm:text-lg"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/alisayeed248"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white text-center py-3 sm:py-4 rounded-xl shadow-lg text-base sm:text-lg"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 mt-12"></div>
    </div>
  );
};

export default AboutMe;
