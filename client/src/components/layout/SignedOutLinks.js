import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
        <li><Link to='/'>About Us</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        </>
    )
}

export default SignedOutLinks