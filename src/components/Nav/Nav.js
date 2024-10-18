import { Link } from "react-router-dom";
import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bg" style={{backgroundColor: '#282c34', color: 'white'}}>
  <div className="container-fluid">
    <b>
    <Link className="navbar-brand" to="/">Tik
    <span style={{color: 'blue'}}>Save</span>
    </Link>
    </b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tiktok-slides-downloader">Tiktok Slide Downloader</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tiktok-mp3-downloader">Tiktok Mp3 Downloader</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
