import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-sm nav-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
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
            <div className="nav-links container">
              <Link to='/' className="my-link mx-4">Home</Link>
              <Link to='/projects' className="my-link mx-4">Projects</Link>
              <Link to='/experience' className="my-link mx-4">Experience</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
