import React from "react";

const AboutSection = ({ title, content, imgSrc, imgAlt, reverse }) => {
  return (
    <div
      data-aos="fade-up"
      className={`flex items-center p-20 gap-8 justify-center ${
        reverse ? "bg-white" : "bg-gray-100"
      }`}
    >
      {!reverse && (
        <div data-aos="fade-right" className="w-1/2">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      )}
      <div data-aos="fade-up" className="w-1/2 p-4">
        <h3 data-aos="fade-up" className="text-2xl delay-200 font-bold mb-4">
          {title}
        </h3>
        <p data-aos="fade-up" className="w-full delay-300">
          {content}
        </p>
      </div>
      {reverse && (
        <div data-aos="fade-left" className="w-1/2">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      )}
    </div>
  );
};

export default AboutSection;
