import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RenderBar from './RenderBar'

const Career = () => {
  return (
    <>
      <Header />

      <div className='flex items-center p-20 gap-8 justify-center bg-gray-100'>
        <div className='w-1/2'>
          <img src="images/underConstruction.svg" alt="Page Under Construction" className='w-full h-auto rounded-3xl' />
        </div>
        <div className='w-1/2 p-4'>
        <div className="text-center">
  <h3 className="text-4xl font-bold text-indigo-600 mb-4">🚧 Oops! This Page is Under Construction</h3>
  <p className="text-gray-700">
    We're working hard to bring you something amazing! This page is currently in the workshop and will be ready for you soon. In the meantime, if you have any inquiries about available jobs, feel free to reach out to us at{" "}
    <a href="mailto:support@tecpartner.co" className="text-indigo-600 underline">support@tecpartner.co</a> or connect with us on LinkedIn. You can also send us a message through the Contact section.
  </p>
</div>


        </div>
      </div>

      <RenderBar />
      <Footer />
    </>
  )
}

export default Career