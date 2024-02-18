import React from 'react'
import Navbar from './Navbar'

const Header = () => {



  return (
    <div>
      <Navbar />
      <div className=" h-[30rem] bg-[#15307c] flex flex-col justify-end items-center  pb-12 gap-8">
        <h1 className="text-5xl font-bold flex flex-wrap text-white">
          ONE STOP BUSINESS SOLUTION
        </h1>
        <button className="bg-white p-4 rounded-full text-[#15307c]">
          SEE OUR SERVICES
        </button>
      </div>
      <svg
        className="fill-[#15307c] bg-gray-100"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg>
    </div>
  );
}

export default Header