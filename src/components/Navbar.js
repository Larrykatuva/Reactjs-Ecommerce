import React from 'react'
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineStar, AiOutlineLogin} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {TiTickOutline} from 'react-icons/ti'

const Navbar = () => {
    return (
        <navbar>
            <div id="nav-left">
                <h3 id="nav-brand">
                    <span id="yellow">THERICH</span>-SHOP
                </h3>
            </div>
            <div id="nav-right">
                <ul id="nav-list">
                    <li id="nav-item"><VscAccount className='icon'/>Account</li>
                    <li id="nav-item"><AiOutlineStar className='icon'/>Whislist</li>
                    <li id="nav-item"><FiShoppingCart className='icon'/>Cart</li>
                    <li id="nav-item"><TiTickOutline className='icon'/>Checkout</li>
                    <li id="nav-item"><AiOutlineLogin className='icon'/>Login</li>
                </ul>
            </div>   
        </navbar>
    )
}

export default Navbar
