import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MindEase
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/psychological">
                Psychological
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/physical">
                Physical
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academic">
                Academic
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emotional">
                Emotional
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mood">
                Mood
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/socialProblems">
                Social Problems
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
