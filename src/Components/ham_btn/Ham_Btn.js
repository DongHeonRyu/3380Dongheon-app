import React from "react";
import "../NavBar/navStyle.css";
import { Link } from "react-router-dom";

function Ham_Btn(props) {

 
  return (
    <div className="btn_container">
      <Link to="/" className="navbar-btn" onClick={props.changeToggle}>
        Home
      </Link>

      <Link to="/favoritePage" className="navbar-btn" onClick={props.changeToggle}>
        My M-List
      </Link>
    </div>
  );
}

export default Ham_Btn;
