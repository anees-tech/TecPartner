import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);


  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className=" mirror h-18 bg-white border-gray-200 scroll-smooth focus:scroll-auto shadow-lg	 fixed w-full z-30 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span className=" h-16 w-28 p-4 self-center text-2xl font-semibold whitespace-nowrap text-white flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/">
            <img src="images/logo.png" alt="logo" />
          </Link>
        </span>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-[#15307c] focus:outline-none focus:ring-2 focus:ring-[#9eafd6] "
          aria-controls="navbar-multi-level"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#9eafd6] rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="block py-2 text-[#15307c] hover:text-[#728bc5]  duration-500 rounded"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {/* about */}
            <li>
              <Link
                to="/AboutUs"
                className="block py-2 text-[#15307c] hover:text-[#728bc5] duration-500 rounded"
              >
                About Us
              </Link>
            </li>
            {/* Services */}
            <li>
              <Link
                to="/Services"
                className="block py-2 text-[#15307c] hover:text-[#728bc5] duration-500 rounded"
              >
                Services
              </Link>
            </li>
            {/* Career */}
            <li>
              <Link
                to="/Career"
                className="block py-2 text-[#15307c] hover:text-[#728bc5] duration-500 rounded"
              >
                Career
              </Link>
            </li>
            {/* Contact */}
            <li>
              <Link
                to="/ContactUs"
                className="block py-2 text-[#15307c] hover:text-[#728bc5] duration-500 rounded"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
