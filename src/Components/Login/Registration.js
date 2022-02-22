import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto p-100">
            <div className="d-flex mb-1 space-between">
              <button className="login-btn-google login-btn">
                Login with Google
              </button>
              <button className="login-btn-facebook login-btn">
                Login with Facebook
              </button>
            </div>
            <form action="#" className="login-form">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control login-input-filed" placeholder="First name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control login-input-filed" placeholder="First Last name" />
                </div>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control login-input-filed"
              />    
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control login-input-filed"
              />
              <div className="text-center">
                <input type="submit" value="Log In" className="submit-login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
