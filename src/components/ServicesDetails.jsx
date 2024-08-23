import React from "react";

const ServicesDetails = ({ h3, li1, li2, li3, li4, li5, li6 }) => {
  return (
    <div data-aos="fade-up">
      <h3
        data-aos="fade-up"
        className="text-2xl delay-100 text-violet-800 font-bold cursor-pointer pb-4"
      >
        {h3}
      </h3>
      <ul
        data-aos="fade-up"
        className="flex flex-col gap-2 delay-300 text-gray-500 font-semibold cursor-pointer"
      >
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
        {li6 && <li>{li6}</li>}
      </ul>
    </div>
  );
};

export default ServicesDetails;
