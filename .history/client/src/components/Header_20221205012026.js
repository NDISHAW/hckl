import React from 'react'

export default function Header() {
  return (
    <div>    
    <div class="top-nav" id="home">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-auto">
            <p><i class="bx bxs-envelope"></i> inspection.app@gmail.com</p>
            <p><i class="bx bxs-phone-call"></i> (+254) 555-0114</p>
          </div>
          <div class="col-auto social-icons">
            <a href="#"><i class="bx bxl-facebook"></i></a>
            <a href="#"><i class="bx bxl-twitter"></i></a>
            <a href="#"><i class="bx bxl-instagram"></i></a>
            <a href="#"><i class="bx bxl-pinterest"></i></a>
          </div>
        </div>
      </div>
    </div>

    {/* // <!-- BOTTOM NAV --> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div class="container">
        <a class="navbar-brand" href="home.html"
          >Inspection App<span class="dot">.</span></a
        >
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
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reviews">Reviews</a>
            </li>
          </ul>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-brand ms-lg-3"/>
          <a
            href="signIn.html"
            class="btn btn-brand ms-lg-6"
            >Log In
            </a>
          <a href="admnLogin.html" class="btn btn-brand ms-lg-6">Admn</a>
        </div>
      </div>
    </nav>
</div>    
  )
}
