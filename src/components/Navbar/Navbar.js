import React from 'react';
import './Navbar.css';

const  Navbar = () => {
  
    return ( 
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        {/* <div class="topnav-right">
          <a href="#search">DoctorSignIn</a>
          <a href="#about">PatientSignIn</a>
        </div> */}
      </div>
    )
  }


export default Navbar;