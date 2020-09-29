import React from 'react'
import { Link } from "gatsby"

const MenuLiLinks = ({ setMenuIsOpen }) => {
    return (
        <>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Hjem</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Om os</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Bliv frivillig</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Dyr i nød</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Adopter et dyr</Link></li>
        </>
    )
}

export default MenuLiLinks
