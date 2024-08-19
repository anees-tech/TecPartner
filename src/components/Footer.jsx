import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:gap-16">
          <div className="w-auto -mx-6">
            <div className="px-6">
              <Link to="/">
                <img src="images/logo.png" alt="logo" className="h-24 w-24 " />
              </Link>

              <div>
                <div className="flex my-4 gap-4 text-gray-500">
                  <a
                    href="#"
                    className="hover:text-gray-700 hover:underline flex gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="hover:text-gray-700 hover:underline flex gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="hover:text-gray-700 hover:underline flex gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="hover:text-gray-700 hover:underline flex gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="flex  gap-12 ">
              <div>
                <h3 className="text-gray-700 uppercase font-bold">
                  Quick Links
                </h3>
                <div className="flex flex-col my-2 text-gray-500">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                  <Link to="/AboutUs" className="hover:underline">
                    About Us
                  </Link>
                  <Link to="/Services" className="hover:underline">
                    Services
                  </Link>
                  <Link to="/Career" className="hover:underline">
                    Career
                  </Link>
                  <Link to="/ContactUs" className="hover:underline">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase font-bold">SERVICES</h3>
                <Link to="/Services">
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    RPO
                  </span>
                </Link>
                <Link to="/Services">
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    BPO
                  </span>
                </Link>
                <Link to="/Services">
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    ITO
                  </span>
                </Link>
              </div>

              <div className="flex gap-12 flex-wrap">
                <div>
                  <h3 className="text-gray-700 uppercase font-bold">
                    PAKISTAN
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    +92 333 5535234
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase font-bold">
                    UAE
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    +971 50 344 9802
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase font-bold">
                    AUSTRALIA
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    +61 410 383 547
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase font-bold">
                    USA
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    +1 908 897 3145
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © TecPartner - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
