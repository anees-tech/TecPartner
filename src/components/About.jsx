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
        para="TecPartner is a leading provider of comprehensive outsourcing solutions, specializing in Recruitment Process Outsourcing (RPO), Business Process Outsourcing (BPO), and Information Technology Outsourcing (ITO). Our mission is to empower businesses by streamlining their operations, reducing costs, and enhancing efficiency."
      />

      <AboutSection
        title="Why Choose TecPartner?"
        content="TecPartner offers a team of industry experts with a proven track record of delivering 
        <strong>successful outsourcing solutions</strong>. Our <strong>expertise and experience</strong> 
        allow us to provide <strong>customized outsourcing services</strong> that are tailored to meet your unique business needs and objectives. 
        We ensure the <strong>quality and efficiency</strong> of our operations, helping you maintain high standards while optimizing processes. 
        Our <strong>cost-effective outsourcing solutions</strong> are designed to reduce your business expenses and improve your bottom line. 
        With a strong commitment to <strong>customer satisfaction</strong>, we focus on building long-lasting partnerships that drive business success. 
        Partner with TecPartner to streamline your operations, reduce costs, and focus on what you do best while achieving your business goals."
        imgSrc="images/about.svg"
        imgAlt="About Us Section"
        reverse={false}
      />

      <AboutSection
        title="Our Story"
        content="TecPartner was founded with a deep passion for technology, starting as a small group of enthusiasts with a shared vision: to bridge the gap between people and technology. Over the years, we have evolved into a trusted technology partner, offering innovative solutions that empower businesses to thrive in the digital age. Our commitment to bridging technology and business has made us a reliable resource for companies looking to excel in today’s tech-driven world."
        imgSrc="images/OurStory.svg"
        imgAlt="Our Story Section"
        reverse={true}
      />

      <AboutSection
        title="Our Vision"
        content="To be a global leader in outsourcing solutions, empowering businesses to achieve their full potential through innovative and efficient services. We strive to create lasting partnerships, foster a culture of excellence, and drive continuous improvement in all aspects of our operations."
        imgSrc="images/Vision.svg"
        imgAlt="Our Vision Section"
        reverse={false}
      />

      <AboutSection
        title="Our Mission"
        content="To provide exceptional outsourcing solutions that deliver tangible value to our clients. We are committed to exceeding expectations, fostering a culture of innovation, and contributing to the success of our partners and communities."
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
