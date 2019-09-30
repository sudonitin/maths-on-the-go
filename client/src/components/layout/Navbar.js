import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import M from 'materialize-css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component{
  constructor(){
    super();
    this.M = window.M;
  }
  componentDidMount(){
    M.AutoInit();
    $(document).ready(function(){
      $('.sidenav').this.M.Sidenav();
    })
  }
  render(){
    return (
      <div>
        <nav className="nav-wrapper indigo">
          <div className="container">
            <Link className="brand-logo">MTG</Link>
            <Link className="sidenav-trigger" data-target="mobile-links"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/'>Register</Link></li>
              </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/'>Contact Us</Link></li>
          <li><Link to='/'>Login</Link></li>
          <li><Link to='/'>Register</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;