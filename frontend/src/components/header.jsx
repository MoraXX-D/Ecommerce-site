import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BheekLele.com</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to="categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to="checkout">My Cart(4)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to="checkout">New Orders(9)</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="customer/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="customer/login">Login</Link></li>
                <li><Link className="dropdown-item" to="customer/register">Register</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Log Out</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Seller Panel
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Log Out</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Header;

