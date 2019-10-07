import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <>
        <li><Link to='/'>Home Page</Link></li>
        <li><Link to='/login'>Logout</Link></li>
        </>
    )
}

export default SignedInLinks