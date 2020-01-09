import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../../actions'
import "./Navbar.css";


const SignedInLinks = (props) => {
    return (
        <>
        <li className="aher sidenav-close"><Link className="navlink" to='/'>Home Page</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/dashboard'>Dashboard</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/aboutus'>About Us</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/contactus'>Contact Us</Link></li>
        <li className="aher sidenav-close"><Link className="navlink" to='/login' onClick={props.signOut}>Logout</Link></li>
        </>
    )
}

function mapDispatchToProps(dispatch){
    return{
        signOut:() => dispatch(logout())
    }
}

export default connect(null,
    mapDispatchToProps
  )(SignedInLinks);