import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/home" className="nav-link active">Home</Link></li>
              <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
              <li className="nav-item"><Link to="/room" className="nav-link">Room</Link></li>
              <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
            </ul>
          </div>
          <div className="registration-btn navbar-btn"><Link to="/registration">registration</Link></div>
          <div className="nav-login-btn navbar-btn"><Link to="/login">Log In</Link></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
