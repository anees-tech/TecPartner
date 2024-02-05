import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <h3 className="w-auto h-7 font-bold text-[16px]">ABOUT TECPARTNER</h3>
              </a>

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400"><span className='text-gray-500 font-semibold'>TecPartner</span> is a recruiting and consulting firm passionate about connecting talented individuals with their dream careers. <span className='text-gray-500 font-semibold'>TecPartner</span> understands that people are at the heart of every successful organization, and we strive to create meaningful connections between employers and job seekers by providing exceptional recruiting and consultation services.</p>

            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase font-bold">Quick Links</h3>
                <div className='flex flex-col my-2 text-gray-500'>
                  <Link to="/" className='hover:underline'>Home</Link>
                  <Link to="/AboutUs" className='hover:underline'>About Us</Link>
                  <Link to="/Services" className='hover:underline'>Services</Link>
                  <Link to="/Career" className='hover:underline'>Career</Link>
                  <Link to="/ContactUs" className='hover:underline'>Contact Us</Link>
                </div>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase font-bold">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 hover:underline">+92 300 0000000</span>
                <span className="block mt-2 text-sm text-gray-600 hover:underline">example@gmail.com</span>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase font-bold">Social Media</h3>
                <div className='flex flex-col my-2 gap-2 text-gray-500'>

                  <a href="#" className='hover:text-gray-700 hover:underline flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg><h4>Gmail</h4></a>
                    
                    <a href="#" className='hover:text-gray-700 hover:underline flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    <h5>LinkedIn</h5></a>

                  <a href="#" className='hover:text-gray-700 hover:underline flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  <h5>FaceBook</h5></a>

                  <a href="#" className='hover:text-gray-700 hover:underline flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                 <h5>Instagram</h5></a>

                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">© TechPartner - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
