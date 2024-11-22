import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RenderBar from "./RenderBar";
import CareerCards from "./CareerSection/CareerAccordion";
import HeaderForPages from "./HeaderForPages";

const Career = () => {

  return (
    <>
      <HeaderForPages heading={"Career Section"} />
      <section className="py-16 px-6 mt-20 flex flex-col justify-center items-center">
        <h3 className="text-4xl font-semibold text-[#15307c] mb-6 text-center">
          Current Openings
        </h3>
        <CareerCards />
      </section>
      {/* Career Intro Section */}
      <section className="bg-white text-[#15307c] h-screen flex flex-col justify-center items-center py-16 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Your Future Starts Here</h2>
        <p className="text-xl font-light max-w-2xl mx-auto">
          Take the first step toward a luxurious career that values excellence, innovation, and sophistication. We are committed to providing a platform where your skills can shine and contribute to a world-class legacy.
        </p>
      </section>

      {/* Vision Statement */}
      <section className="bg-gradient-to-b from-[#15307c] to-[#1c439f] text-white h-screen flex flex-col justify-center items-center py-16 px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-semibold mb-6">Our Vision for Excellence</h3>
          <p className="text-lg mb-4">
            At our company, we believe in fostering an environment where innovation meets luxury. We're looking for talented individuals who are not only experts in their fields but are also passionate about making an impact on the world stage.
          </p>
          <p className="text-lg">
            Every opportunity here is designed to help you grow professionally and personally, while contributing to a legacy of excellence and prestige. Join us and elevate your career to new heights.
          </p>
        </div>
      </section>

      {/* Why Join Us? */}
      <section className="bg-gradient-to-b from-[#f1f1f1] to-[#d7d7d7] py-16 px-6 h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-4xl font-semibold text-[#15307c] mb-6">
            Why Choose Us?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            As a member of our team, you’ll be working alongside the best minds in the industry. Our culture is built on the principles of growth, respect, and luxury. We offer:
          </p>
          <ul className="text-lg text-gray-600 space-y-3">
            <li>💼 Premium Benefits & Compensation Packages</li>
            <li>🌍 Global Exposure and Opportunities</li>
            <li>🎓 Continuous Learning and Development</li>
            <li>🤝 Collaborative Work Environment</li>
            <li>🏆 A Chance to Work with Elite Professionals</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#15307c] text-white py-16 px-6 text-center h-screen flex flex-col justify-center items-center">
        <h3 className="text-4xl font-semibold mb-6">Ready to Make an Impact?</h3>
        <p className="text-lg mb-8">
          Join our team and experience the world of luxury and innovation. Apply now and be part of something extraordinary.
        </p>
        <a
          href="#career-cards"
          className="bg-white text-[#15307c] py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Explore Openings
        </a>
      </section>
      <div id="career-cards"></div>
      {/* Career Cards Section */}


      {/* RenderBar */}
      <RenderBar />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Career;
