import React from "react";

const AboutMe = () => {
  return (
    <div className="flex-1 w-full 
      pl-16 sm:pl-20 md:pl-72 lg:pl-80 
      pr-4 sm:pr-6 md:pr-8 lg:pr-14
      pt-8 sm:pt-12 md:pt-16 lg:pt-20
    ">
      <div className="max-w-5xl w-full">
        <div className="text-white text-center md:text-left">
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
                description: "3+ years in web development",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-3 sm:p-4 rounded-lg"
              >
                <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

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
    </div>
  );
};

export default AboutMe;