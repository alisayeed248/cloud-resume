import React from "react";

const AboutMe = () => {
  return (
    <div className="flex-1 flex items-start justify-center md:justify-start p-14">
      <div className="text-white text-left max-w-5xl w-full">
        <h2 className="text-6xl font-bold mb-4">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Sayeed Ali
          </span>
        </h2>
        <p className="text-2xl">
          ... a passionate web developer currently building this resume
          serverless on AWS. I'm working with a variety of modern technologies
          including Terraform, S3, DynamoDB, API Gateway, Lambda, GitHub
          Actions, React, and Tailwind to create an efficient application. I
          would love for you to check it out and see how these tools come
          together to power my personal website. In my free time, I enjoy
          learning new programming concepts and continually improving my skills.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
