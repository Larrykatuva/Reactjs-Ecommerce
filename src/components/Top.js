import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FiPhone,FiLinkedin } from 'react-icons/fi';
import {TiSocialGooglePlus} from 'react-icons/ti'

const Top = () => {
    return (
        <div id='header-top'>
            <div id="header-top-left">
                <p><FiPhone id='phone' />+254 720460519</p>
                <p>info@domain.com</p>
            </div>
            <ul id="header-top-right">
                <li id="header-item"><FaFacebookF/></li>
                <li id="header-item"><FaTwitter/></li>
                <li id="header-item"><FiLinkedin/></li>
                <li id="header-item"><TiSocialGooglePlus/></li>
                
            </ul>
        </div>
    )
}

export default Top
