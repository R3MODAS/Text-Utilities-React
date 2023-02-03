import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary text-center" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      <button  onClick={props.toggle} style={
        {
          backgroundColor : props.mode === 'dark' ? "#2b3035" : "#f8f9fa",
          color : props.mode === 'dark' ? "#f8f9fa" : "#2b3035"}
      } 
    className="border border-0"><i className="bi bi-palette mx-3"></i></button>
    </div>
  </div>
</nav>
  );
}
