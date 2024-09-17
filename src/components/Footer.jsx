import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  let color = "black";
  let width = 1.5;
  let heightAndWidth = 24;
  return (
    <footer className="bg-white">
      <div className="container px-6 py-12 pb-6 mx-auto">
        <div className="lg:flex lg:gap-16">
          <div className="w-auto -mx-6">
            <div className="px-6">
              <Link to="/">
                <img src="images/logo.png" alt="logo" className="h-24 w-24 " />
              </Link>

              <SocialLinks color={color} width={width} heightAndWidth={heightAndWidth}/>
              
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
                  <h3 className="text-gray-700 uppercase font-bold">UAE</h3>
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
                    +61 410 686 748
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase font-bold">USA</h3>
                  <span className="block mt-2 text-sm text-gray-600 hover:underline">
                    +1 719 374 8482
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
