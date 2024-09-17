import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTopBar from "./HeaderTopBar";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavbarOpen]);

  const toggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  const linkClasses =
    "block py-2 text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-full px-4 duration-500";

  return (
    <nav className=" mirror  h-18 bg-white border-gray-200 scroll-smooth focus:scroll-auto shadow-lg	 fixed w-full z-30 ">
      <div className="hidden sm:block">
        <HeaderTopBar />
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span className=" h-16 w-28 p-4 self-center text-2xl font-semibold whitespace-nowrap text-white flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/">
            <img src="images/logo.png" alt="logo" />
          </Link>
        </span>
        <button
          onClick={toggleNavbar}
          type="button"
          aria-label="Toggle navigation menu"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#9eafd6] rounded-lg md:flex-row md:mt-0 md:border-0 space-x-3 rtl:space-x-4">
            {/* Home */}
            <li className="px-3">
              <Link to="/" className={linkClasses} aria-current="page">
                Home
              </Link>
            </li>
            {/* about */}
            <li>
              <Link to="/AboutUs" className={linkClasses}>
                About Us
              </Link>
            </li>
            {/* Services */}
            <li>
              <Link to="/services">
                <div className="dropdown dropdown-hover w-full">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex gap-2 items-center justify-start py-2 text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-full px-4 duration-500 border-transparent border-0"
                  >
                    <h3>Services</h3>
                    <svg
                      className="h-4 mt-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="#15307c"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box z-[1] w-52 p-2 bg-white shadow-lg shadow-[#15307c]"
                  >
                    <li className="text-[#15307c] hover:bg-[#15307c] hover:text-white rounded transition ease-in-out duration-500 focus:bg-[#15307c]">
                      <Link to="/service-detail/rpo">RPO</Link>
                    </li>
                    <li className="text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-lg transition ease-in-out duration-500">
                      <Link to="/service-detail/bpo">BPO</Link>
                    </li>
                    <li className="text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-lg transition ease-in-out duration-500">
                      <Link to="/service-detail/ito">ITO</Link>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            {/* Career */}
            <li>
              <Link to="/Career" className={linkClasses}>
                Careers
              </Link>
            </li>
            {/* Contact */}
            <li>
              <Link to="/ContactUs" className={linkClasses}>
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
