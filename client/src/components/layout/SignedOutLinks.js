import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>About Us</NavLink></li>
            <li><NavLink to='/'>Contact Us</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
            <li><NavLink to='/'>Register</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks