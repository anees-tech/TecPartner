import React from 'react'
import HeaderForPages from './HeaderForPages'
import Footer from './Footer'
import RenderBar from './RenderBar'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <HeaderForPages heading={"Unlock a world of possibilities with us"} para={"Thank you for considering TecPartner as your premier recruiting and consultancy partner. Whether you're a skilled professional seeking new opportunities or an organization in need of exceptional talent, Easetalent is here to support you."} />
      <Form/>
      <RenderBar/>
      <Footer/>
    </>
  )
}

export default Contact