import React from "react";
import propTypes from "prop-types"; //////////////////////////////////////  while imparting proptypes
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title} {/*  impart props  */}
        </Link>
         {/* <a className="navbar-brand" href="#">  */}
          {/* {props.title}  impart props */}
        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
              {/* <a className="nav-link active" aria-current="page" href="#"> Home </a> */}

             
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> About </Link>
              {/* <a className="nav-link" href="/about"> About </a> */}

             
            </li>
          </ul>

          {/* search */}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch me-auto ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              } d-flex`}
              htmlFor="flexSwitchCheckDefault"
            >
             Disable {props.mode} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propType = { title: propTypes.string.isRequired }; //// UDEMY ////  define proptype  here string.isRequired
/// NOT NECESSARY BUT BETTER TO INCLUDE
