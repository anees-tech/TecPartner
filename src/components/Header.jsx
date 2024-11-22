import React from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";


const Header = () => {
  const [text] = useTypewriter({
    words: [
      "TALENT PARTNER",
      "BUSINESS PARTNER",
      "IT PARTNER",
    ],
    loop: true,
    deleteSpeed: 50,
  });

  return (
    <div data-aos="fade-up">
      <Navbar />
      <div className="h-[30rem] bg-[#15307c] flex flex-col justify-end items-center pb-12 md:pb-28 gap-8">
        <h1
          data-aos="fade-up"
          className="text-5xl delay-100 font-bold flex flex-wrap text-white"
        >
          YOUR <span>&nbsp;{text}</span>
          <Cursor />
        </h1>
        <Link to="/Services">
          <button
            data-aos="fade-up"
            className="bg-white delay-300 p-4 rounded-full text-[#15307c]"
          >
            SEE OUR SERVICES
          </button>
        </Link>
      </div>
      <svg
        className="fill-[#15307c] "
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg>
    </div>
  );
};

export default Header;
