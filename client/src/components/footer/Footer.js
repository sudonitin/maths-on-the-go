import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faGoogle, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer(){
    return(
        <footer id="footer" className="page-footer black wrapper">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text" id="brand">MTG</h5>
              <p className="grey-text text-lighten-4">A fun game for all.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Follow us</h5>
              <a className="grey-text text-lighten-3 icons" id="fb" href="#!"><FontAwesomeIcon icon={faFacebook} /> </a>
              <a className="grey-text text-lighten-3 icons" id="insta" href="#!"><FontAwesomeIcon icon={faInstagram} /> </a>
              <a className="grey-text text-lighten-3 icons" id="yt" href="#!"><FontAwesomeIcon icon={faYoutube} /> </a>
              <a className="grey-text text-lighten-3 icons" id="in" href="#!"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
              <a className="grey-text text-lighten-3 icons" id="twitter" href="#!"><FontAwesomeIcon icon={faTwitter} /> </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright MTG
            <h6 className="white-text" style={{textAlign: "right"}}>Our Creators</h6>
            <a className="grey-text text-lighten-4 right cr" href="https://github.com/globefire">Nitin</a>
            <a className="grey-text text-lighten-4 right cr" href="https://github.com/rehasantiago">Reha| </a>
          </div>
        </div>
      </footer>
          
    )
}

export default Footer
