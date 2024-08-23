import React from "react";
import HeaderForPages from "./HeaderForPages";
import Footer from "./Footer";
import RenderBar from "./RenderBar";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <>
      <HeaderForPages
        heading="About us"
        para="At TecPartner, we are dedicated to forging the perfect match between talented individuals and their dream careers. Our passion lies in creating meaningful connections that fuel the success of organizations. As a premier recruiting and consulting firm, we go above and beyond to provide exceptional services to both employers and job seekers. With a focus on people, we understand the pivotal role they play in any thriving company. Let us guide you on your journey to finding the right fit and unlocking your full potential."
      />

      <AboutSection
        title="Why Us"
        content="TecPartner dedication revolves around creating the ideal bridge between talented individuals and their envisioned careers, fostering impactful connections that drive organizational success. As a premier recruitment and consulting firm, we go the extra mile to deliver exceptional services to both employers and job seekers. Our people-centric approach recognizes the pivotal role individuals play in thriving companies, and we're here to guide you on the path to discovering the perfect fit that unlocks your true potential. Join us at TecPartner and embark on a transformative journey towards meaningful career connections."
        imgSrc="images/about.svg"
        imgAlt="About Us Section"
        reverse={false}
      />

      <AboutSection
        title="Our Story"
        content="Founded with a passion for technology, TecPartner began as a small group of enthusiasts driven by a shared vision: to bridge the gap between people and technology. Over the years, we've grown into a trusted partner, offering innovative solutions that empower businesses to thrive in the digital age."
        imgSrc="images/OurStory.svg"
        imgAlt="Our Story Section"
        reverse={true}
      />

      <AboutSection
        title="Our Vision"
        content="To be a leader in technology solutions, enabling businesses of all sizes to harness the power of innovation. We envision a future where technology is accessible, reliable, and enhances every aspect of life and work."
        imgSrc="images/Vision.svg"
        imgAlt="Our Vision Section"
        reverse={false}
      />

      <AboutSection
        title="Our Mission"
        content="To deliver cutting-edge technology services that meet the evolving needs of our clients. We are committed to excellence, continuous learning, and building lasting relationships with our customers by providing tailored solutions that drive success."
        imgSrc="images/Mission.svg"
        imgAlt="Our Mission Section"
        reverse={true}
      />

      <RenderBar />
      <Footer />
    </>
  );
};

export default About;
