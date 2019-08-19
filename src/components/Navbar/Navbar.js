import React from 'react'

import logo from "./cooker1.png";

import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="title-name">pantrychef</h1><img className="chef-logo" src={logo}/>
        </nav>
    )
}

export default Navbar