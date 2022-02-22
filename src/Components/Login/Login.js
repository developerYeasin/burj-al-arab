import React, { useContext } from "react";
import "./Login.css";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase-config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";


const app = initializeApp(firebaseConfig);


const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const {from } = location.state || { state: {pathName: '/'}}
  

  const auth = getAuth();

  const googleSign = () => {
    const googleProvider = new GoogleAuthProvider(); 
    signInWithPopup(auth, googleProvider)
    .then(res => {
      const user = res.user;
      setLoggedInUser(user)
      storeAuthToken();
      
    })
    .catch(err => {
      const code = err.code;
      const message = err.message;
    })
  }

  const storeAuthToken = () => {
    auth.currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        navigate(from, { replace: true });
      })
      .catch(function (error) {
        // Handle error
      });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 m-auto p-100">
          <div className="d-flex mb-1 space-between">
          <button onClick={googleSign} className="login-btn-google login-btn">Login with Google</button>
          <button className="login-btn-facebook login-btn">Login with Facebook</button>
          </div>
          <form action="#" className="login-form">
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
  );
};

export default Login;
