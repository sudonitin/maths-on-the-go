import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../../actions'


const SignedInLinks = (props) => {
    return (
        <>
        <li><Link to='/'>Home Page</Link></li>
        <li><Link to='/login' onClick={props.signOut}>Logout</Link></li>
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