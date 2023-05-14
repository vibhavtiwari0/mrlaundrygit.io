import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Components/FontAwesomeIcons/index'


export class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
     
          <footer id="footer" style={{backgroundColor: 'black'}}>
          <div className="footer-top" style={{backgroundColor: 'black'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-contact">
                  <h3>Mr Laundry Shop</h3>
                  <p>
                    Mumbai <br />
                    India <br />
                  </p>
                  <strong>Phone:</strong> +123456789 <br />
                  <strong>Email:</strong> mrlaundry@gmail.com <br />
                </div>
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Usefull Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                  <p>Connect with us ....</p>
                  <div className="socail-links mt-3">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-skype" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Mr Laundry Shop</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        );

    }
}