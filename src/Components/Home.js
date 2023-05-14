import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Components/FontAwesomeIcons/index'

import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
// import {proDetailsmain} from './Products/proDetailsmain';

export class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
              
              <div>
             
{/*               
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'black'}} id="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="home.jsp" id="logo"><span id="span1" style={{fontFamily:'Brush Script MT',fontSize:'50px'}} >Mr.</span>Laundry<span id="span2">Shop</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              <span><img src="menu.png" alt="" width="30px" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id="Home" className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/PricingListt"> Pricing </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item" style={{marginRight: '10px'}}>
                  <a className="nav-link" href="AddLaundry">Add Laundry</a>
                </li>
              </ul>
              <div className="icons" id="icon1">
                <a href="login.jsp" style={{color: 'white', marginTop: '13px', marginRight: '15px'}}><i style={{padding: '5px'}}  /><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{color: "white"}}/><img src="register.png" alt="" width="18px" />Login</a>
                <a href="register.jsp" style={{color: 'white', marginTop: '13px', marginRight: '15px'}}><i style={{padding: '5px'}} /><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{color: "white"}}/><img src="register.png" alt="" width="18px" />Register</a>
                <a href="adminlogin.jsp" style={{color: 'white', marginTop: '13px', marginRight: '15px'}}><i style={{padding: '5px'}} /><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{color: "white"}}/><img src="register.png" alt="" width="18px" />Admin Login</a>
              </div>
            </div>
          </div>
        </nav> */}
        <section className="home">
          <div className="content">
            <h1> <span style={{fontSize: '43px', color: 'black'}}>Laundry &amp; Dry Cleaning <br></br>At your</span>
              <span id="span2" style={{fontSize: '43px'}}> Convenience</span> 
            </h1>
            <p style={{fontSize: '25px'}}>
              <br /> We <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>collect</span>, <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>clean</span>,<span style={{fontStyle: 'italic', fontWeight: 'bold'}}> pressed </span>and <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>deliver </span>directly to your doorstep.
              <br />
            </p><ul>
              <li>
                Free Collection and delivery.
              </li>
              <li>
                Expert Service Any day of the week. 
              </li>
              <li>
                Late evening Collection &amp; Delivery.
              </li>
              <li>
                From as little as 10$.
              </li>
            </ul>
            <p />
            <div className="btn"><button>Order Now</button></div>
          </div>
          <div className="img">
            <img src="homee.png" alt="" />
          </div>
        </section>
        <div className="container mb-4 " id="product-cards">
          <h1 className="text-center">Our Services</h1>
          <div className="row" style={{marginTop: '30px'}}>
            <div className="col-md-3">
              <div className="card">
                <img className="cardimg" src="dry_cleaning.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>Dry Cleaning</h3>
                  <p className="text-center">Clothes are Air-dried in anti-bacterial stainless-steel dryers </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="cardimg" src="laundry_cleaning.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>Laundry By KG</h3>
                  <p className="text-center">Wash &amp; Iron | Wash &amp; Fold </p>
                  <br /><br />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="cardimg" src="premium_laundry_cleaning.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>Premium Laundry</h3>
                  <p className="text-center">Our team of dedicated experts are well-trained to take care of varied garments </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="card">
                <img className="cardimg" src="steam_ironing.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>Steam Ironing</h3>
                  <p className="text-center">Sanitized &amp; Smoothed <br /><br /></p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home">
          <div className="content ">
            <br />
            <div className="container float-left mb-5 ">
              <h1 className="mb-5"> <span style={{fontSize: '43px', color: 'black'}}>Laundry</span></h1>
              <p className="me-5">
                The laundry process at <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>MrLaundry </span>begins by sorting the clothes.After sorting, similar clothes are washed together. The best detergent brands are used for washing clothes.The washing machine is then loaded by adjusting the right setting for your clothes. The freshwater rinse during the process helps in eliminating the dirt and stains from the clothes. We air-dry your clothes in anti-bacterial stainless-steel air-dryers that eliminate Direct UV rays from the sun which react with the colour pigments of your clothes and create bleaching effect.After the laundry cycle ends,High pressure vacuum steam iron is done for that perfect finishing .
              </p>
            </div>
          </div>
          <div className="img">
            <img src="service_main_image.png" alt="" />
          </div>
        </section>
        <div className="container mb-5 " id="cont1">
          <h1 className="text-center">Why Choose Us</h1>
          <div className="row">
            <div className="col">
              <h2><FontAwesomeIcon icon="fa-solid fa-lightbulb" />&nbsp;  Personalized Experience </h2>
              <div className="container">
                <p>We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.
                </p>
              </div>
            </div>
            <div className="col">
              <h2><FontAwesomeIcon icon="fa-solid fa-tags" />&nbsp;Affordable Pricing
              </h2>
              <div className="container">
                <p>Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.
                </p>
              </div>
            </div>
            <div className="col">
              <h2><FontAwesomeIcon icon="fa-solid fa-hand-peace" />&nbsp;
                Convenience
              </h2>
              <div className="container">
                <p>With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="cont1">
          <div className="row">
            <div className="col">
              <h2><FontAwesomeIcon icon="fa-solid fa-ranking-star" />&nbsp;
                Quality
              </h2>
              <div className="container">
                <p>We use the best in class products, to assure that your favorite clothes are always there for you to wear.
                </p>
              </div>
            </div>
            <div className="col">
              <h2><FontAwesomeIcon icon="fa-solid fa-truck-fast" />&nbsp;
                Express Delivery
              </h2>
              <div className="container">
                <p>Forgot to wash your clothes for interview/business meeting, never mind. With our super express delivery, we would get your laundry done in less than 8 hours.
                </p>
              </div>
            </div>
            <div className="col">
              <h2> <FontAwesomeIcon icon="fa-solid fa-file-pen" />&nbsp;Instant Order Update
              </h2>
              <div className="container">
                <p>Regular updates of your order, to help you keep a track of your laundry and plan accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
  
  



            </>
   
            










        );

    }
}