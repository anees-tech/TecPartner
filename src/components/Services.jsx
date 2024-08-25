import React from "react";
import HeaderForPages from "./HeaderForPages";
import Footer from "./Footer";
import RenderBar from "./RenderBar";
import ServicesDetails from "./ServicesDetails";

const serviceData = [
  {
    title: "Our RPO Services:",
    imgSrc: "/images/rpo.png",
    imgAlt: "Recruitment Process Outsource",
    itemsHeading: [
      "CV Sourcing",
      "CV Formating",
      "Executive Search",
      "Database Management",
      "Staff Augmentation",
      "Hire a Recruiter",
    ],
    itemsDetials: [
      "Our expert recruiters leverage advanced sourcing techniques to identify and attract highly qualified candidates from diverse talent pools.",
      "We ensure that your candidates' resumes are formatted professionally and consistently, making them stand out in the application process.",
      "For critical leadership positions, our executive search team utilizes specialized methodologies to find exceptional talent who can drive your organization forward.",
      "We maintain a robust candidate database, allowing for efficient tracking and management of potential hires.",
      "Need to temporarily expand your team? Our staff augmentation services provide you with skilled professionals to meet your short-term needs.",
      "For dedicated recruitment support, our experienced recruiters can work as an extension of your HR team, providing personalized service and expertise.",
    ],
    animation: "fade-right",
    reverse: false,
  },
  {
    title: "Business Process Outsource",
    imgSrc: "/images/BPO.jpg",
    imgAlt: "Business Process Outsource",
    itemsHeading: [
      "Lead Generation",
      "Virtual Assistant",
      "Data Entry",
      "Customer Support",
      "CRM Administration",
      "Hire a Virtual Assistant",
    ],
    itemsDetials: [
      "Our skilled professionals can generate high-quality leads for your business, driving sales and growth.",
      "Our virtual assistants can handle a wide range of administrative tasks, freeing up your time to focus on core business activities.",
      "Our data entry experts can accurately and efficiently input data into your systems, ensuring data integrity and reliability",
      "Our customer support representatives can provide exceptional service to your customers, enhancing satisfaction and loyalty.",
      "We can manage your CRM system, ensuring that your customer data is organized and easily accessible.",
      "Need dedicated support? Our virtual assistants can work as an extension of your team, providing personalized service and expertise.",
    ],
    animation: "fade-left",
    reverse: true,
  },
  {
    title: "Information Technology Outsource",
    imgSrc: "/images/ito.png",
    imgAlt: "Information Technology Outsource",
    itemsHeading: [
      "Web Development",
      "App Development",
      "Custom Software Development",
      "UI/UX Designing",
      "Digital Marketing",
      "Staff Augmentation",
      "Hire a Developer",
    ],
    itemsDetials: [
      "Our skilled developers can create custom websites that are visually appealing, user-friendly, and optimized for search engines.",
      "We specialize in developing innovative mobile and web applications that meet your business objectives.",
      " Our team can design and build custom software solutions to streamline your operations and improve efficiency.",
      "We focus on creating intuitive and visually appealing user interfaces that enhance the user experience",
      "Our digital marketing experts can help you reach your target audience through effective online campaigns.",
      "Need to temporarily expand your IT team? Our staff augmentation services provide you with skilled professionals to meet your short-term needs.",
      "Our expert developers can bring your projects to life, ensuring high-quality, scalable solutions that align with your business goals.",
    ],
    animation: "fade-right",
    reverse: false,
  },
];

const Services = () => {
  return (
    <>
      <HeaderForPages
        heading="Our services"
        para="At TecPartner, we're dedicated to connecting exceptional talent with thriving organizations. As a leading recruiting and consulting firm, we understand that people are the cornerstone of business success. Our mission is to create meaningful partnerships between employers and job seekers, fostering a culture of growth and innovation."
      />

      {serviceData.map((service, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-4 ${
            service.reverse ? "bg-white" : "bg-gray-100"
          } 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-nowrap`}
        >
          {!service.reverse && (
            <img
              data-aos={service.animation}
              src={service.imgSrc}
              alt={service.imgAlt}
              className="w-2/5 h-auto rounded-3xl"
            />
          )}
          <section className="flex-1 h-full flex flex-col gap-6">
            <ServicesDetails
              h3={service.title}
              itemsHeading={service.itemsHeading}
              itemsDetails={service.itemsDetials}
            />
          </section>
          {service.reverse && (
            <img
              data-aos={service.animation}
              src={service.imgSrc}
              alt={service.imgAlt}
              className="w-2/5 h-auto rounded-3xl"
            />
          )}
        </div>
      ))}

      <RenderBar />
      <Footer />
    </>
  );
};

export default Services;
