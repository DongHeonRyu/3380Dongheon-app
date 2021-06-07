import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Img/logo.gif";
import ham_nav_menu from "../../Img/icon-burger-menu.svg";
import "../NavBar/navStyle.css";
import Ham_Btn from "../ham_btn/Ham_Btn";

function NavBar(props) {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Movie Logo" width="50" height="50" />
        <span>Don Movie Review App</span>
      </div>

      <div className="hamburger-menu">
        <button>
          <img
            src={ham_nav_menu}
            alt="menu"
            width="50"
            height="50"
            onClick={changeToggle}
          />
        </button>

        {toggle ? <Ham_Btn /> : <div />}
      </div>

      <div className="navbar-btn-container">
        <Link to="/" className="navbar-btn">
          Home
        </Link>

        <Link to="/favoritePage" className="navbar-btn">
          My M-List
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
