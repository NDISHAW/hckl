import React from 'react'
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";    
export default function Header() {
  return (
    <div>
      <div class="top-nav" id="home">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-auto">
              <p>
                <i class="bx bxs-envelope"></i> hckl.info@.co.ke
              </p>

              <p>
                <i class="bx bxs-phone-call"></i> (+254) (0)20 206-7969
              </p>
            </div>
            <div class="col-auto social-icons">
              <a href="#">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#">
                <i class="bx bxl-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- BOTTOM NAV --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container">
          <a class="navbar-brand" href="home.html">
            <img src="." alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
            </ul>
            <a href="signIn.html" class="btn btn-brand ms-lg-6">
              Log In
            </a>
            <a href="admnLogin.html" class="btn btn-brand ms-lg-6">
              Admn
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
