import React from 'react'
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialMediaLiLinks = () => {
    return (
        <>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebookSquare /></a></li>
            <li><a href="https://twitter.com/?lang=da" target="_blank" rel="noreferrer" aria-label="twitter"><FaTwitter /></a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="youtube"><FaYoutube /></a></li>
        </>
    )
}

export default SocialMediaLiLinks
