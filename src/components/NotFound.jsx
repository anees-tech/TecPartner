import React from "react";
import { Link } from "react-router-dom";
import HeaderForPages from "./HeaderForPages";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
      <HeaderForPages
        heading="Page Not Found"
        para="Oops! The page you're looking for doesn't exist. It might have been moved or deleted. Try going back to the homepage or check the spelling of the URL."
      />
      <div className="flex items-center justify-center h-screen bg-gray-100 p-12">
        <div className="w-2/4 flex items-center justify-center">
          <img
            src="images/404.svg"
            alt="404 Not Found"
            className="w-3/4 mb-8 h-3/4 rounded-3xl"
            data-aos="fade-up"
          />
        </div>
        <div className="w-2/4 flex flex-col items-center justify-center">
          <h1
            className="text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
          >
            404 - Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8" data-aos="fade-up">
            Sorry, the page you're looking for cannot be found.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-violet-800 text-white rounded-full hover:bg-violet-700 transition-colors"
            data-aos="fade-up"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
