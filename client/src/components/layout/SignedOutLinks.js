import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const SignedOutLinks = () => {
    return (
        <>
        <li className="aher"><Link to='/'>About Us</Link></li>
        <li className="aher"><Link to='/'>Contact Us</Link></li>
        <li className="aher"><Link to='/login'>Login</Link></li>
        <li className="aher"><Link to='/register'>Register</Link></li>
        </>
    )
}

export default SignedOutLinks