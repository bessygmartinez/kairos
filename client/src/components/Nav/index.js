import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" className="navbar-brand">
      <img src="/img/kairos_logo.png" alt="kairos logo" className="d-inline-block" width="250vw"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarmenu"
      aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarmenu">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Link</Link>
      </li>
    </ul>
  </div>
    </nav>
  );
}

export default Nav;
