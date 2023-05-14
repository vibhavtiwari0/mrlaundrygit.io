import { Component } from "react";



export class Login extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
       <div className="container" id="login">
        <div className="row">
          <div className="col-md-5" id="side1">
            <h3 className="text-center">Welcome Back!</h3>
          </div>
          <div className="col-md-7" id="side2">
            <h3 className="text-center">Account login</h3>
            <div className="container-fluid">
              <div className="row">
                <form className="row g-3 needs-validation">
                  <div className="row" style={{justifyContent: 'center'}}>
                    <div className="col-md-7 text-center input2">
                      {/* <label for="validationCustomUsername" class="form-label">Username</label> */}
                      <div className="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                        <input type="text" placeholder="Username" className="form-control" id="validationCustomUsername1" aria-describedby="inputGroupPrepend" maxLength={12} required />
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
                        <input type="password" placeholder="Password" className="form-control" id="validationCustomUsername2" aria-describedby="inputGroupPrepend" maxLength={12} required />
                        <div className="invalid-feedback">
                          Please choose a Password.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex col-12" style={{justifyContent: 'center'}}>
                    <button className="btn btn-warning text-center" type="submit" >Login</button><br />
                  </div>
                  <div className="d-flex col-12" style={{justifyContent: 'center'}}>
                    <p className="text-center">Forgot Password ?<a href="#">Click here</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div></div></div>
                  </>
                
        );
    }
}