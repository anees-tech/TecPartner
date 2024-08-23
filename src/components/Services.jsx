import React from "react";
import HeaderForPages from "./HeaderForPages";
import Footer from "./Footer";
import RenderBar from "./RenderBar";
import ServicesDetails from "./ServicesDetails";

const Services = () => {
  return (
    <>
      <HeaderForPages
        heading={"Our services"}
        para={
          "TecPartner is a recruiting and consulting firm passionate about connecting talented individuals with their dream careers. Easetalent understands that people are at the heart of every successful organization, and we strive to create meaningful connections between employers and job seekers by providing exceptional recruiting and consultation services."
        }
      />

      <div className="flex items-center bg-gray-100 justify-between 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-wrap">
        <img
          data-aos="fade-right"
          src="/images/rpo.png"
          alt="Recruitment Process Outsource"
          className="w-2/5 h-auto rounded-3xl"
        />
        <section className="h-full flex flex-col gap-6">
          <ServicesDetails
            h3="Recruitment Process Outsource"
            li1="CV Sourcing"
            li2="CV Formating"
            li3="Executive Search"
            li4="Database Management"
            li5="Staff Augmentation"
            li6="Hire a Recruiter"
          />
        </section>
      </div>

      <div className="flex items-center bg-white justify-between gap-4 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-wrap">
        <section className="h-full flex flex-col gap-6">
          <ServicesDetails
            h3="Business Process Outsource"
            li1="Lead Generation"
            li2="Virtual Assistant"
            li3="Data Entry"
            li4="Customer Support"
            li5="CRM Administration"
            li6="Hire a Virtual Assistant"
          />
        </section>
        <img
          data-aos="fade-left"
          src="/images/BPO.jpg"
          alt="Business Process Outsource"
          className="w-2/5 h-auto rounded-3xl"
        />
      </div>

      <div className="flex items-center bg-gray-100 justify-between gap-4 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-wrap">
        <img
          data-aos="fade-right"
          src="/images/ito.png"
          alt="Information Technology Outsource"
          className="w-2/5 h-auto rounded-3xl"
        />
        <section className="h-full flex flex-col gap-6">
          <ServicesDetails
            h3="Information Technology Outsource"
            li1="Web Development"
            li2="App Development"
            li3="Custom Software Development"
            li4="UI/UX Designing"
            li5="Digital Marketing"
            li6="Staff Augmentation"
            li7="Hire a Developer"
          />
        </section>
      </div>

      <RenderBar />
      <Footer />
    </>
  );
};

export default Services;
