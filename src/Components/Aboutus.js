import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Components/FontAwesomeIcons/index'

import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
// import {proDetailsmain} from './Products/proDetailsmain';

export class Aboutus extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <section className="home" style={{ backgroundColor: 'white' }} >
                    <div className="content">
                        <h1> <span style={{ fontSize: '32px', color: 'black' }}>Making Laundry Easier At</span>
                            <span id="span2" style={{ fontSize: '40px' }}><br></br> Mr Laundry
                            </span>
                        </h1>
                        <p>An average human spends between 12000 hours of their adult life in cleaning and managing their clothes. We have all grown up
                            on a heavy dose of detergent commercials propagating the idea of ‘whiter the better’.<br></br>But none of these commercials talked about the hours of hard work required to get that blinding whiteness. Do the words ‘enzyme soak’, hot water cleaning’, ‘bluing’ ring a bell? How we wish maintaining ourwhite clothes was easy as watching those commercials. With MrLaundry, it is Easier!

                        </p>
                    </div>
                    <div className="img">
                        <img src="aboutimg.jpg" alt="" />
                    </div>
                </section>

        <div className="container mb-4 " id="product-cards">
          <h1 className="text-center">Our Promises</h1>
          <div className="row" style={{marginTop: '30px'}}>
            <div className="col-md-4 ">
              <div className="card ">
                <img className="cardimg mt-4 " src="quality.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>QUALITY</h3>
                  <p className="text-center">Expert professionals handling your clothes with utmost care. </p>
                  <br></br><br></br>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="cardimg  mt-4" src="trans.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>TRANSPARENCY</h3>
                  <p className="text-center">Neighbourhood live laundry stores offering service as you please.</p>
                  <br /><br />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="cardimg  mt-4" src="speed.png" alt="" />
                <div className="card-body">
                  <h3 className="text-center" style={{fontWeight: 'bold'}}>SPEED</h3>
                  <p className="text-center">Shorter turnaround times, delivery
within24 hours of pick up. </p>
<br></br><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>

            </>












        );

    }
}