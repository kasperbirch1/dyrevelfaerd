import React from 'react'
import Header from './header'
import Footer from './footer'
import Modal from 'react-modal'


Modal.setAppElement('#___gatsby');

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
