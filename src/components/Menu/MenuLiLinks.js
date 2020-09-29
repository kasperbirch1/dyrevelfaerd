import React from 'react'
import { useRecoilValue } from 'recoil'
import { loginState } from '../../Globalstates/Atoms'
import { Link } from "gatsby"

const MenuLiLinks = ({ setMenuIsOpen }) => {
    const loginStatus = useRecoilValue(loginState);

    return (
        <>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Home</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/app" >app</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/app/1" >app1</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/app/fejl" >appfejl</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/gallery" >gallery</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/contact" >contact us</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/login" >{loginStatus ? "logout" : "login"}</Link></li>
        </>
    )
}

export default MenuLiLinks
