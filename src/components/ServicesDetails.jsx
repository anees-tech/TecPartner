import React from "react";

const ServicesDetails = ({ h3, li1, li2, li3, li4, li5, li6 }) => {
  return (
    <>
      <h3 className="text-2xl text-violet-800 font-bold cursor-pointer">{h3}</h3>
      <ul className="flex flex-col gap-3 text-gray-500 font-semibold cursor-pointer">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
        {li6 && <li>{li6}</li>}
      </ul>
    </>
  );
};

export default ServicesDetails;
