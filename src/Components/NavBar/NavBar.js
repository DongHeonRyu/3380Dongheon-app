import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.gif";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} width="50" height="50" alt="" />
        <div></div>

        <Link to="/" className="navbar-brand">
          {" "}
          <h1>Don's Movie Review</h1>
        </Link>

        <form className="d-flex">
          <button className="navbar-toggler" type="button">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </button>
          <button className="navbar-toggler" type="button">
          <Link to="/favoritePage" className="navbar-brand">
            My Rated Movie
            </Link>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
