import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Components/FontAwesomeIcons/index'

import { Link, Navigate, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { fetchLogin } from "../services/UserApiService";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import {proDetailsmain} from './Products/proDetailsmain';

export function Loginn (){
  const [userinfo,setUserInfo]=useState([]);
  const[username,setUname]=useState("")
  const[pass,setPass]=useState("") 
  const[errmsg,seterror]=useState("")
  const navigate=useNavigate();

  const UserData = {
    "username":username,
   "pass":pass
    
  };

  async  function getUserData(){
    const response = await fetchLogin(UserData.username,UserData.pass);
    console.log(response.data);
    setUserInfo(response.data)
    console.log(userinfo)
    if(userinfo.length==0){
      
      seterror("Wrong Username or password");
    }
    else{
      console.log("welcome");
      seterror("welcome");
       navigate("/AddLaundry");
    //  history.push("/AddLaundry");
    }
  }
    const verify = (e) => {
      e.preventDefault();
      
     getUserData()
     
    };
    
    // setLaundryList(response.data);
  

        return (
            <>
              
              <div>
       
        <div className="container" id="login">
          <div className="row">
            <div className="col-md-5" id="side1">
              <h3 className="text-center" style={{color: 'white'}}>Welcome Back!</h3>
            </div>
            <div className="col-md-7" id="side2">
              <h3 className="text-center" style={{color: 'black'}}>Account login</h3>
              <div className="container-fluid">
                <div className="row">
                  <form className="row g-3 needs-validation" onSubmit={verify}>
                    <div className="row" style={{justifyContent: 'center'}}>
                      <div className="col-md-7 text-center input2">
                        <div className="input-group has-validation">
                          <input type="text" name="username" onChange={(event) => setUname(event.target.value)} placeholder="Username" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" maxLength={12}  required />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{justifyContent: 'center'}}>
                      <div className="col-md-7 text-center input2">
                        {/* <label for="validationCustomUsername" class="form-label">Password</label> */}
                        <div className="input-group has-validation">
                          <input type="password" name="pass" onChange={(event) => setPass(event.target.value)} placeholder="Password" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" maxLength={12} required />
                          <div className="invalid-feedback">
                            Please choose a Password.
                          </div>
                        </div>
                      </div>
                    </div>
                  

                    <div style={{color: 'red', marginLeft: '130px'}}>
                    <span >{errmsg}</span>
                    </div>
                    <div className="d-flex col-12 mt-3" style={{justifyContent: 'center'}}>
                      <button className="btn btn-warning text-center" type="submit">Login</button><br />
                    </div>
                    <div className="d-flex col-12" style={{justifyContent: 'center'}}>
                      {/* <p className="text-center">New User ?<button><Link to={'/Registerr'} ><h4>Register</h4></Link></button></p> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* &lt;%@include file="footer.jsp" %&gt; */}
      </div>
  
  
            </>
   
            


   );

    
}