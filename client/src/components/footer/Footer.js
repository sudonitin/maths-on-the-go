import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faGoogle, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer(){
    return(
        <footer id="footer" class="page-footer black wrapper">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text" id="brand">MTG</h5>
              <p class="grey-text text-lighten-4">A fun game for all.</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Follow us</h5>
              <a class="grey-text text-lighten-3" id="fb" href="#!"><FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
              <a class="grey-text text-lighten-3" id="insta" href="#!"><FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
              <a class="grey-text text-lighten-3" id="yt" href="#!"><FontAwesomeIcon icon={faYoutube} size="2x" /> </a>
              <a class="grey-text text-lighten-3" id="git" href="#!"><FontAwesomeIcon icon={faGithub} size="2x" /> </a>
              <a class="grey-text text-lighten-3" id="in" href="#!"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /> </a>
              <a class="grey-text text-lighten-3" id="twitter" href="#!"><FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2019 Copyright MTG
            <h6 class="white-text" style={{textAlign: "right"}}>Our Creators</h6>
            <a class="grey-text text-lighten-4 right" href="#!">Nitin</a>
            <a class="grey-text text-lighten-4 right" href="#!">Reha| </a>
          </div>
        </div>
      </footer>
          
    )
}

export default Footer
