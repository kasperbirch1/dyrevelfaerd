import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby');

const Layout = ({ children }) => {

  useEffect(() => {
    if (window.localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", window.localStorage.getItem("theme"))
    }
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
