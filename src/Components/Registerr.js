import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Components/FontAwesomeIcons/index'


import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { create, savedata, savefeedback } from "../services/UserApiService";
import { Link } from "react-router-dom";
// import {proDetailsmain} from './Products/proDetailsmain';

export function Registerr()  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [username, setUname] = useState("");

    const UserData = {
        "name": name,
        "username":username,
        "phoneno": phoneno,
        "email": email,
        "pass":pass
        
      };
      const saveTutorial = (e) => {
        e.preventDefault();
    
        savedata(UserData);
        console.log(UserData);
        alert("Registered Successfully done");
      };

        return (
            <>
                <div>
                    <div className="container" id="Register">
                        <div className="row">
                            <div className="col-md-5" id="side1" style={{ backgroundColor: 'black' }}>
                                <h3 className="text-center" style={{ color: 'white' }}>Register</h3>
                            </div>
                            <div className="col-md-7" id="side3">
                                <h3 className="text-center" style={{ color: 'black' }}>Create Account</h3>
                                <div className="container-fluid">
                                    <div className="row">
                                        <form className="row g-3 needs-validation" onSubmit={saveTutorial}>
                                            {/* action="user_reg_controller.jsp" method="post" */}
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-6 col-md-9 text-center input2">
                                                    <div className="input-group has-validation">
                                                        {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                                                        <input type="text" name="name" onChange={(event) => {
                        setName(event.target.value);
                      }} placeholder="Name" className="form-control" id="validationCustomUsername" maxLength={30} aria-describedby="inputGroupPrepend"  required />
                                                        
                                                        <div className="invalid-feedback">
                                                            Please enter a Name.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-6 col-md-9  text-center input2">
                                                    {/* <label for="validationCustomUsername" class="form-label">Password</label> */}
                                                    <div className="input-group has-validation">
                                                        <input type="text" name="username" onChange={(event) => setUname(event.target.value)} placeholder="UserName" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" maxLength={12}  required />
                                                        <div className="invalid-feedback">
                                                            Please enter a username.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-6 col-md-9  text-center input2">
                                                    {/* <label for="validationCustomUsername" class="form-label">Password</label> */}
                                                    <div className="input-group has-validation">
                                                        <input type="tel" name="phoneno"  onChange={(event) => setPhoneno(event.target.value)} placeholder="PhoneNumber" min={0} maxLength={10} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" pattern="[7-9]{1}[0-9]{9}" required />
                                                        <div className="invalid-feedback">
                                                            Please enter a number.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-6 col-md-9  text-center input2">
                                                    {/* <label for="validationCustomUsername" class="form-label">Password</label> */}
                                                    <div className="input-group has-validation">
                                                        <input type="email" name="email"   onChange={(event) => setEmail(event.target.value)} placeholder="E-Mail" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]]" required />
                                                        <div className="invalid-feedback">
                                                            Please enter a email.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-6 col-md-9  text-center input2">
                                                    {/* <label for="validationCustomUsername" class="form-label">Password</label> */}
                                                    <div className="input-group has-validation">
                                                        <input type="password" name="pass"  onChange={(event) => setPass(event.target.value)} placeholder="Password" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" maxLength={12} required />
                                                        <div className="invalid-feedback">
                                                            Please enter a password.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex col-12" style={{ justifyContent: 'center' }}>
                                                <button className="btn btn-warning text-center" type="submit" >SIGN UP</button>
                                            </div >
                                            <span className="d-flex col-12" style={{ justifyContent: 'center' }}>Already have an Account? <Link to={"/Loginn"}> Login</Link></span>
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