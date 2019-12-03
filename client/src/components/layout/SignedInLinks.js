import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../../actions'
import "./Navbar.css";


const SignedInLinks = (props) => {
    return (
        <>
        <li className="aher"><Link to='/'>Home Page</Link></li>
        <li className="aher"><Link to='/login' onClick={props.signOut}>Logout</Link></li>
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