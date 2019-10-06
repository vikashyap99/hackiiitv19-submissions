import React from 'react';

import { NavLink } from "react-router-dom";

import './Navbar.css';

const  Navbar = () => {
  
    return ( 
      <div className="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
    )
  }


export default Navbar;