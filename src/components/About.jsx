import React from "react";
import HeaderForPages from "./HeaderForPages";
import Footer from "./Footer";
import RenderBar from "./RenderBar";

const About = () => {
  return (
    <>
      <HeaderForPages
        heading={"About us"}
        para={
          "At TecPartner, we are dedicated to forging the perfect match between talented individuals and their dream careers. Our passion lies in creating meaningful connections that fuel the success of organizations. As a premier recruiting and consulting firm, we go above and beyond to provide exceptional services to both employers and job seekers. With a focus on people, we understand the pivotal role they play in any thriving company. Let us guide you on your journey to finding the right fit and unlocking your full potential."
        }
      />

      {/* why us */}
      <div
        data-aos="fade-up"
        className="flex items-center p-20 gap-8 justify-center bg-gray-100"
      >
        <div data-aos="fade-right" className="w-1/2">
          <img
            src="images/1.png"
            alt="About Us Section"
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div data-aos="fade-up" className="w-1/2 p-4">
          <h3 data-aos="fade-up" className="text-2xl delay-200 font-bold mb-4">Why us</h3>
          <p data-aos="fade-up" className="w-full delay-300">
            TecPartner dedication revolves around creating the ideal bridge
            between talented individuals and their envisioned careers, fostering
            impactful connections that drive organizational success. As a
            premier recruitment and consulting firm, we go the extra mile to
            deliver exceptional services to both employers and job seekers. Our
            people-centric approach recognizes the pivotal role individuals play
            in thriving companies, and we're here to guide you on the path to
            discovering the perfect fit that unlocks your true potential. Join
            us at TecPartner and embark on a transformative journey towards
            meaningful career connections.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div
        data-aos="fade-up"
        className="flex items-center p-20 gap-8 justify-center bg-white"
      >
        <div data-aos="fade-up" className="w-1/2 p-4">
          <h3 data-aos="fade-up" className="text-2xl delay-200 font-bold mb-4">Our Story</h3>
          <p data-aos="fade-up" className="w-full delay-300">
            Founded with a passion for technology, TecPartner began as a small
            group of enthusiasts driven by a shared vision: to bridge the gap
            between people and technology. Over the years, we've grown into a
            trusted partner, offering innovative solutions that empower
            businesses to thrive in the digital age.
          </p>
        </div>
        <div data-aos="fade-left" className="w-1/2">
          <img
            src="images/OurStory.svg"
            alt="About Us Section"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div
        data-aos="fade-up"
        className="flex items-center p-20 gap-8 justify-center bg-gray-100"
      >
        <div data-aos="fade-left" className="w-1/2">
          <img
            src="images/Vision.svg"
            alt="About Us Section"
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div data-aos="fade-up" className="w-1/2 p-4">
          <h3 data-aos="fade-up" className="text-2xl delay-200 font-bold mb-4">Our Vision</h3>
          <p data-aos="fade-up" className="w-full delay-300">
            To be a leader in technology solutions, enabling businesses of all
            sizes to harness the power of innovation. We envision a future where
            technology is accessible, reliable, and enhances every aspect of
            life and work.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div
        data-aos="fade-up"
        className="flex items-center p-20 gap-8 justify-center bg-white"
      >
        <div data-aos="fade-up" className="w-1/2 p-4">
          <h3 data-aos="fade-up" className="text-2xl delay-200 font-bold mb-4">Our Mission</h3>
          <p data-aos="fade-up" className="w-full delay-300">
            To deliver cutting-edge technology services that meet the evolving
            needs of our clients. We are committed to excellence, continuous
            learning, and building lasting relationships with our customers by
            providing tailored solutions that drive success.
          </p>
        </div>
        <div data-aos="fade-up" className="w-1/2 p-4">
          <img
            src="images/Mission.svg"
            alt="About Us Section"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      <RenderBar />
      <Footer />
    </>
  );
};

export default About;
