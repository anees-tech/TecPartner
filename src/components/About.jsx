import React from 'react'
import HeaderForPages from './HeaderForPages'
import Footer from './Footer'
import RenderBar from './RenderBar'

const About = () => {
  return (
    <>
      <HeaderForPages heading={"About us"} para={"At TecPartner, we are dedicated to forging the perfect match between talented individuals and their dream careers. Our passion lies in creating meaningful connections that fuel the success of organizations. As a premier recruiting and consulting firm, we go above and beyond to provide exceptional services to both employers and job seekers. With a focus on people, we understand the pivotal role they play in any thriving company. Let us guide you on your journey to finding the right fit and unlocking your full potential."} />



      <div className='flex items-center p-20 gap-8 justify-center bg-gray-100'>
        <div className='w-1/2'>
          <img src="images/1.png" alt="About Us Section" className='w-full h-auto rounded-3xl'/>
        </div>
        <div className='w-1/2 p-4'>
          <h3 className='text-2xl font-bold mb-4'>Why us</h3>
          <p className='w-full'>TecPartner dedication revolves around creating the ideal bridge between talented individuals and their envisioned careers, fostering impactful connections that drive organizational success. As a premier recruitment and consulting firm, we go the extra mile to deliver exceptional services to both employers and job seekers. Our people-centric approach recognizes the pivotal role individuals play in thriving companies, and we're here to guide you on the path to discovering the perfect fit that unlocks your true potential. Join us at TecPartner and embark on a transformative journey towards meaningful career connections.</p>
        </div>
      </div>

      <RenderBar />
      <Footer />
    </>
  )
}

export default About