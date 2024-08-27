import React from "react";
import { useParams } from "react-router-dom";
import HeaderForPages from "./HeaderForPages";
import { serviceData } from "./Services";
import Footer from "./Footer";
import RenderBar from "./RenderBar";

const serviceDetails = {
  rpo: {
    heading: "Recruitment Process Outsourcing (RPO)",
    subheading: "Recruitment Process Outsourcing (RPO): A Streamlined Solution",
    intro:
      "<strong>Are you overwhelmed by the complexities of recruiting top talent?</strong> Let our expert team at TecPartner handle your recruitment process outsourcing (RPO) needs.",
    process: [
      "<strong>Strategic Assessment:</strong> We begin by conducting a thorough assessment of your organization's recruitment requirements, including your company culture, hiring needs, and desired outcomes.",
      "<strong>Customized Recruitment Strategy:</strong> Based on our assessment, we develop a tailored RPO strategy that aligns with your specific goals and objectives.",
      "<strong>Talent Acquisition:</strong> Our experienced recruiters utilize cutting-edge sourcing techniques to identify and attract highly qualified candidates who meet your exact criteria.",
      "<strong>Candidate Screening and Assessment:</strong> We conduct rigorous screening processes, including interviews, assessments, and reference checks, to ensure that only the most suitable candidates proceed to the next stage.",
      "<strong>Onboarding and Integration:</strong> Once a candidate is selected, we assist with the onboarding process, ensuring a smooth transition into your organization.",
    ],
    benefits: [
      "<strong>Reduced Costs:</strong> Our RPO solutions can significantly reduce your recruitment expenses by streamlining processes and eliminating overhead costs.",
      "<strong>Improved Time-to-Hire:</strong> We expedite the hiring process, helping you fill critical positions more quickly.",
      "<strong>Enhanced Candidate Quality:</strong> Our expert recruiters source top talent, ensuring that you hire the best individuals for your organization.",
      "<strong>Scalability:</strong> Our RPO services can scale to meet your changing hiring needs, whether you're experiencing growth or downsizing.",
      "<strong>Focus on Core Business:</strong> By outsourcing your recruitment, you can free up your internal resources to focus on your core business objectives.",
    ],
    conclusion:
      "Partner with TecPartner for a Seamless RPO Experience. At TecPartner, we are committed to delivering exceptional RPO services that exceed your expectations. Contact us today to learn more about how we can help you streamline your recruitment process and attract top talent.",
  },
  bpo: {
    heading: "Business Process Outsourcing (BPO)",
    subheading:
      "Business Process Outsourcing (BPO): Streamlining Your Operations",
    intro:
      "<strong>Are you looking to optimize your business processes, reduce costs, and improve efficiency?</strong> Consider outsourcing your non-core business functions to TecPartner.",
    process: [
      "<strong>Process Assessment:</strong> We begin by carefully analyzing your existing business processes to identify areas for improvement and potential outsourcing opportunities.",
      "<strong>Customized BPO Solutions:</strong> Based on our assessment, we develop tailored BPO solutions that align with your specific goals and objectives.",
      "<strong>Resource Allocation:</strong> We leverage our global network of skilled professionals to provide the necessary resources to support your outsourced processes.",
      "<strong>Quality Assurance:</strong> We implement rigorous quality control measures to ensure that our services meet or exceed your expectations.",
      "<strong>Ongoing Optimization:</strong> We continuously monitor and evaluate our performance to identify opportunities for further improvement and optimization.",
    ],
    benefits: [
      "<strong>Cost Reduction:</strong> Outsourcing non-core functions can significantly reduce your operational costs by eliminating overhead expenses and leveraging economies of scale.",
      "<strong>Improved Efficiency:</strong> Our experienced team can streamline your processes, leading to increased productivity and faster turnaround times.",
      "<strong>Access to Expertise:</strong> By outsourcing to TecPartner, you gain access to specialized expertise in a wide range of industries and functions.",
      "<strong>Scalability:</strong> Our BPO services can scale to meet your changing business needs, whether you're experiencing growth or downsizing.",
      "<strong>Focus on Core Competencies:</strong> Outsourcing non-core functions allows you to focus on your core business activities and drive innovation.",
    ],
    conclusion:
      "Partner with TecPartner for a Seamless BPO Experience. At TecPartner, we are dedicated to providing high-quality BPO services that deliver tangible results. Contact us today to learn more about how we can help you streamline your operations and achieve your business objectives.",
  },
  ito: {
    heading: "Information Technology Outsourcing (ITO)",
    subheading:
      "Information Technology Outsourcing (ITO): Empowering Your Business",
    intro:
      "<strong>Are you struggling to keep up with the rapid pace of technological advancements?</strong> Consider outsourcing your IT functions to TecPartner.",
    process: [
      "<strong>IT Assessment:</strong> We begin by conducting a comprehensive assessment of your IT infrastructure, applications, and business requirements.",
      "<strong>Customized ITO Solutions:</strong> Based on our assessment, we develop tailored ITO solutions that address your specific needs and goals.",
      "<strong>IT Resource Allocation:</strong> We provide skilled IT professionals who can support your organization's IT operations, from infrastructure management to application development.",
      "<strong>Technology Implementation:</strong> Our experts can help you implement new technologies and systems to improve efficiency and drive innovation.",
      "<strong>Ongoing Support and Maintenance:</strong> We offer ongoing support and maintenance services to ensure the optimal performance of your IT infrastructure.",
    ],
    benefits: [
      "<strong>Cost Reduction:</strong> Outsourcing IT functions can significantly reduce your operational costs by eliminating overhead expenses and leveraging economies of scale.",
      "<strong>Improved Efficiency:</strong> Our experienced team can streamline your IT processes, leading to increased productivity and faster turnaround times.",
      "<strong>Access to Expertise:</strong> By outsourcing to TecPartner, you gain access to specialized expertise in a wide range of IT technologies and solutions.",
      "<strong>Scalability:</strong> Our ITO services can scale to meet your changing business needs, whether you're experiencing growth or downsizing.",
      "<strong>Focus on Core Competencies:</strong> Outsourcing IT functions allows you to focus on your core business activities and drive innovation.",
    ],
    conclusion:
      "Partner with TecPartner for a Seamless ITO Experience. At TecPartner, we are dedicated to providing comprehensive ITO services that empower your business. Contact us today to learn more about how we can help you optimize your IT operations and achieve your strategic objectives.",
  },
};

const IndivisualSecvice = () => {
  const { serviceType } = useParams();
  const service = serviceDetails[serviceType] || {};

  const filteredServiceData = serviceData.filter(
    (ser) => ser.serviceType === serviceType
  );
  console.log(filteredServiceData);
  return (
    <div className="bg-gray-100 text-gray-500">
      <HeaderForPages heading={service.heading || "Service not found."} />
      <div className="p-10">
        {service.heading ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-gray-600 text-center">
              {service.subheading}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: service.intro }}></p>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-600">
              How Our Services Work:
            </h3>
            <ol className="list-decimal pl-6 mb-6">
              {service.process?.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }}></li>
              ))}
            </ol>
            <h3 className="text-xl font-semibold mb-2 text-gray-600">
              Benefits:
            </h3>
            <ul className="list-disc pl-6 mb-6">
              {service.benefits?.map((benefit, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: benefit }}
                ></li>
              ))}
            </ul>

            {filteredServiceData.map((ser, index) => (
              <div key={service} className="pb-8">
                <h3 className="text-2xl delay-100 text-[#15307c] font-bold pb-4">
                  {ser.title}
                </h3>

                <ul className="flex flex-col gap-2 delay-300 text-gray-500 font-semibold cursor-pointer">
                  {ser.itemsHeading.map((heading, index) => (
                    <li key={index} className="text-justify">
                      <strong>{heading}:</strong> {ser.itemsDetails[index]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="border-y-[1px] border-gray-400 py-4 border-solid">
              {service.conclusion}
            </p>
          </>
        ) : (
          <p>Service not found.</p>
        )}
      </div>
      <RenderBar/>
      <Footer />
    </div>
  );
};

export default IndivisualSecvice;
