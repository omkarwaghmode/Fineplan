import React from 'react'
import './css/Navbar.css';
function home() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light " >
  <div className="container-fluid">
    <a className="navbar-brand"  href="/">Fineplan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home
          ">Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Loginu
          ">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AboutUs
          ">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default home