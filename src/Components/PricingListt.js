import { Component } from "react";
import { Footer } from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FontAwesomeIcons/index'
import { Link } from "react-router-dom";


export class PricingListt extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
               <div>
              
          
        <div className="container">   
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col">
              <div className="card h-100">
                <img src="shirtt.jpg" className="card-img-top" alt="..." style={{height: '400px'}} />
                <div className="card-body">
                  <h5 className="card-title">Shirts</h5>
                  <pre className="card-text" style={{fontSize: '20px'}}> Washing price{"       "}<span className="btn btn-outline-secondary" style={{fontSize: '30px'}}>₹ 50</span></pre>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height: '400px'}} />
                <div className="card-body">
                  <h5 className="card-title">Jeans</h5>
                  <pre className="card-text" style={{fontSize: '20px'}}> Washing price{"      "}<span className="btn btn-outline-secondary" style={{fontSize: '30px'}}>₹ 60</span></pre>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="pillow1.jpg" className="card-img-top" alt="..." style={{height: '400px'}} />
                <div className="card-body">
                  <h5 className="card-title">Pillow cover</h5>
                  <pre className="card-text" style={{fontSize: '20px'}}> Washing price{"        "}<span className="btn btn-outline-secondary" style={{fontSize: '30px'}}>₹ 30</span></pre>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4" style={{paddingTop: '20px'}}>
            <div className="col">
              <div className="card h-100">
                <img src="https://media.istockphoto.com/id/1201655009/photo/stack-of-folded-mens-pants.jpg?s=612x612&w=0&k=20&c=g4zx95cjM5VmJdVKO9ekKQCu5NXeOCXCJKr_b1bLVpY=" className="card-img-top" alt="..." style={{height: '400px'}} />
                <div className="card-body">
                  <h5 className="card-title">Pants</h5>
                  <pre className="card-text" style={{fontSize: '20px'}}> Washing price{"         "}<span className="btn btn-outline-secondary" style={{fontSize: '30px'}}>₹ 50</span></pre>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://images.unsplash.com/photo-1624536944351-297c180ff73d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="card-img-top" alt="..." style={{height: '400px'}} />
                <div className="card-body">
                  <h5 className="card-title">Towels</h5>
                  <pre className="card-text" style={{fontSize: '20px'}}> Washing price{"        "}<span className="btn btn-outline-secondary" style={{fontSize: '30px'}}>₹ 30</span></pre>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://t3.ftcdn.net/jpg/03/53/57/28/240_F_353572829_60l0dox4aQqDpsB0Byc5SDVrn0WNkxLg.jpg" className="card-img-top" alt="..." style={{height: '400px'}} />
                <div className="card-body">
                  <h5 className="card-title">Bed sheets</h5>
                  <pre className="card-text" style={{fontSize: '20px'}}> Washing price{"       "}<span className="btn btn-outline-secondary" style={{fontSize: '30px'}}>₹ 80</span></pre>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center  mt-4">
            <div className="card h-100">
              <img src="https://static.vecteezy.com/system/resources/previews/003/420/684/large_2x/clothes-stack-and-iron-vector.jpg" className="card-img-top" alt="..." style={{height: '400px'}} />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center "><b>Ironing FREE</b></h5>
                
              </div>
            </div>
          </div> 
        </div> 
        
      </div>


                  </>
                
        );
    }
}