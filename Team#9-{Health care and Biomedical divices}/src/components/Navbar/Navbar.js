import React from 'react';

import { NavLink } from "react-router-dom";

import './Navbar.css';

const  Navbar = () => {
  
    return ( 
      <div class="topnav">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        </div>
    )
  }


export default Navbar;