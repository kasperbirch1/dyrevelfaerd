import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { loginState } from '../Globalstates/Atoms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby');

const Layout = ({ children }) => {
  const setLoginStatus = useSetRecoilState(loginState)

  useEffect(() => {
    if (window.localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", window.localStorage.getItem("theme"))
    }
    if (window.sessionStorage.getItem("UserInfo") === "undefined" || !window.sessionStorage.getItem("UserInfo")) {
      setLoginStatus(false)
    } else {
      setLoginStatus(true)
    }
  }, [setLoginStatus])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
