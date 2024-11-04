import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RenderBar from './RenderBar'
import CareerCards from './CareerSection/CareerAccordion'
const Career = () => {
  return (
    <>
      <Header />
      <CareerCards />
      <RenderBar />
      <Footer />
    </>
  );
}

export default Career