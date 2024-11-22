import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  let color = "black";
  let width = 1.5;
  let heightAndWidth = 24;
  return (
    <footer className="footer overflow-hidden">
      <div className="container px-6 py-12 pb-0 mx-auto flex flex-col items-center justify-center">
        <div className="lg:flex lg:gap-48 border-b border-solid border-gray-500 pb-4">
          <div className="w-auto -mx-6">
            <div className="px-6 flex flex-col items-center justify-center flex-1">
              <Link to="/">
                <img src="/images/logo.png" alt="logo" className="h-24 w-24 " />
              </Link>

              <SocialLinks color={color} width={width} heightAndWidth={heightAndWidth}/>
              
            </div>
          </div>

          <div className="second mt-6 lg:mt-0 lg:flex-1">
            <div className="flex gap-12 items-center justify-center">
              <div className="flex flex-col sm:flex-row p-6 gap-6  justify-center">

              <div>
                <h3 className="text-black uppercase font-bold">
                  Quick Links
                </h3>
                <div className="flex flex-col my-2 text-gray-800">
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
                <h3 className="text-black uppercase font-bold">SERVICES</h3>
                <Link to="/Services">
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    RPO
                  </span>
                </Link>
                <Link to="/Services">
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    BPO
                  </span>
                </Link>
                <Link to="/Services">
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    ITO
                  </span>
                </Link>
              </div>

              </div>


              <div className="flex gap-6 flex-wrap justify-center items-center">
                {/* first half */}
                <div className="space-y-6">

                <div>
                  <h3 className="text-black uppercase font-bold">
                    PAKISTAN
                  </h3>
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    +92 333 5535234
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-800 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                <div>
                  <h3 className="text-black uppercase font-bold">UAE</h3>
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    +971 50 344 9802
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-800 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                </div>

                {/* first half */}

                <div className="space-y-6">

                <div>
                  <h3 className="text-black uppercase font-bold">
                    AUSTRALIA
                  </h3>
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    +61 410 686 748
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-800 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                <div>
                  <h3 className="text-black uppercase font-bold">USA</h3>
                  <span className="block mt-2 text-sm text-gray-800 hover:underline">
                    +1 719 374 8482
                  </span>
                  <a
                    href="mailto:info@tecpartner.net"
                    className="block mt-2 text-sm text-gray-800 hover:underline"
                  >
                    info@tecpartner.net
                  </a>
                </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 pt-3">
          <p className="text-center text-gray-900 dark:text-gray-900">
            © TecPartner - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
