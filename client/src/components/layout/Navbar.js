import React,{ Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
const isEmpty = require('is-empty');


class Navbar extends Component{
  componentDidMount(){
    var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
  }
  render(){
    const links = isEmpty(JSON.parse(localStorage.getItem('user')))?<SignedOutLinks/>:<SignedInLinks/>;
    return (
      <div>
        <nav className="nav-wrapper navlink blue fixed" style={{backgroundColor: "rgba(0,0,0,0)"}}>
          <div className="container">
            <Link to='/' className="brand-logo">MTG</Link>
            <Link className="sidenav-trigger navlink" data-target="mobile-links"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down">
                {links}
              </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          {links}
        </ul>
      </div>
    )
  }
}

export default Navbar;