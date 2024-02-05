import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);


  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-indigo-500 h-18 border-gray-200 scroll-behavior: smooth fixed w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white flex items-center space-x-3 rtl:space-x-reverse">
            <Link to="/">TECPARTNER</Link>
          </span>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
            isNavbarOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {/* Home */}
            <li>
              <Link to="/" className="block py-2 text-white hover:text-slate-300 duration-500 rounded" aria-current="page">Home</Link>
            </li>
            {/* about */}
            <li>
            <Link to="/AboutUs" className="block py-2 text-white hover:text-slate-300 duration-500 rounded">About Us</Link>
            </li>
            {/* Services */}
            <li>
            <Link to="/Services" className="block py-2 text-white hover:text-slate-300 duration-500 rounded">Services</Link>
            </li>
            {/* Career */}
            <li>
            <Link to="/Career" className="block py-2 text-white hover:text-slate-300 duration-500 rounded">Career</Link>
            </li>
            {/* Contact */}
            <li>
              <Link to="/ContactUs" className="block py-2 text-white hover:text-slate-300 duration-500 rounded">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
