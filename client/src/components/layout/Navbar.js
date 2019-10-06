import React,{ Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component{
  
  componentDidMount(){
    var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
  }
  render(){
    return (
      <div>
        <nav className="nav-wrapper black fixed">
          <div className="container">
            <Link className="brand-logo">MTG</Link>
            <Link className="sidenav-trigger" data-target="mobile-links"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
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