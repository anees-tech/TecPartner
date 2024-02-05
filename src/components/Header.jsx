import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <Navbar />
      <div className='bg-indigo-500 h-[28rem] flex flex-col justify-end items-center  pb-12 gap-8'>
        <h1 className='text-5xl font-bold flex flex-wrap text-white'>
          Hub of Global Recruitment
        </h1>
        <button className='bg-white p-4 rounded-full text-indigo-500'>
          SEE OUR SERVICES
        </button>
      </div>
      <svg className="fill-indigo-500 bg-gray-100" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path></svg>
    </>
  )
}

export default Header