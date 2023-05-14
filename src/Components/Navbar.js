import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Components/FontAwesomeIcons/index'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";

// import {proDetailsmain} from './Products/proDetailsmain';

export class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>

        <div>
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'black' }} id="navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="home.jsp" id="logo"><span id="span1" style={{ fontFamily: 'Brush Script MT', fontSize: '50px' }} >Mr.</span>Laundry<span id="span2">Shop</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                <span><img src="menu.png" alt="" width="30px" /></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">

                    <Link id="Home" className="nav-link active" aria-current="page" to="/"> Home </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/PricingListt"> Pricing </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/"> About </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: '10px' }}>
                    <Link className="nav-link" to="/AddLaundry"> Add Laundry </Link>
                  </li>

                </ul>

                <div className="icons" id="icon1">

                </div>
                <div className="dropdown" style={{ color: '#ffc800' }} >
                  <button className="btn btn dropdown-toggle mx-1" style={{ color: '#ffc800' }} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Register/Login
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2" style={{ padding: '10px', backgroundColor: 'black' }} >
                    <li className="m-2" > <Link to={"/Loginn"}><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{ color: "#ffc800" }} />  Login</Link></li>
                    <li className="m-2"><Link to={"/Registerr"} ><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{ color: "#ffc800" }} />  Register</Link></li>
                    <li className="m-2"><Link to={"/Loginn"} ><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{ color: "#ffc800" }} />  Logout</Link></li>
                  </ul>
                </div>


              </div>
            </div>
          </nav>

        </div >



      </>
    );

  }
}