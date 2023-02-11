import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
    <button className='border border-0' style={{
        backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#2b3035',
        color : props.mode === 'light' ? '#2b3035' : '#f8f9fa',
        fontSize : "24px",
        marginRight : "10px"
    }} onClick={props.toggleBtn}><i className="bi bi-paint-bucket"></i></button>
    </div>
  </div>
</nav>
  )
}

export default Navbar

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
