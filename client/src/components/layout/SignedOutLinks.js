import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const SignedOutLinks = () => {
    return (
        <>
        <li className="aher sidenav-close"><Link className="navlink" to='/aboutus'>About Us</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/contactus'>Contact Us</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/login'>Login</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/register'>Register</Link></li>
        </>
    )
}

export default SignedOutLinks