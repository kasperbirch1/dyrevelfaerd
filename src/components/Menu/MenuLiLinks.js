import React from 'react'
import { Link } from "gatsby"


const MenuLiLinks = ({ setMenuIsOpen }) => {
    return (
        <>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Hjem</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/#Abouts-Section" >Om os</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/#Volunteers-Section">Bliv frivillig</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/#AnimalsInNeed-Section" >Dyr i nød</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/vores-dyr" >Adopter et dyr</Link></li>

        </>
    )
}

export default MenuLiLinks
