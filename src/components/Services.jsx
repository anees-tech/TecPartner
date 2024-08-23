import React from "react";
import HeaderForPages from "./HeaderForPages";
import Footer from "./Footer";
import RenderBar from "./RenderBar";
import ServicesDetails from "./ServicesDetails";

const serviceData = [
  {
    title: "Recruitment Process Outsource",
    imgSrc: "/images/rpo.png",
    imgAlt: "Recruitment Process Outsource",
    items: [
      "CV Sourcing",
      "CV Formating",
      "Executive Search",
      "Database Management",
      "Staff Augmentation",
      "Hire a Recruiter",
    ],
    animation: "fade-right",
    reverse: false,
  },
  {
    title: "Business Process Outsource",
    imgSrc: "/images/BPO.jpg",
    imgAlt: "Business Process Outsource",
    items: [
      "Lead Generation",
      "Virtual Assistant",
      "Data Entry",
      "Customer Support",
      "CRM Administration",
      "Hire a Virtual Assistant",
    ],
    animation: "fade-left",
    reverse: true,
  },
  {
    title: "Information Technology Outsource",
    imgSrc: "/images/ito.png",
    imgAlt: "Information Technology Outsource",
    items: [
      "Web Development",
      "App Development",
      "Custom Software Development",
      "UI/UX Designing",
      "Digital Marketing",
      "Staff Augmentation",
      "Hire a Developer",
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
        para="TecPartner is a recruiting and consulting firm passionate about connecting talented individuals with their dream careers. Easetalent understands that people are at the heart of every successful organization, and we strive to create meaningful connections between employers and job seekers by providing exceptional recruiting and consultation services."
      />

      {serviceData.map((service, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-4 ${
            service.reverse ? "bg-white" : "bg-gray-100"
          } 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-wrap`}
        >
          {!service.reverse && (
            <img
              data-aos={service.animation}
              src={service.imgSrc}
              alt={service.imgAlt}
              className="w-2/5 h-auto rounded-3xl"
            />
          )}
          <section className="h-full flex flex-col gap-6">
            <ServicesDetails h3={service.title} items={service.items} />
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
