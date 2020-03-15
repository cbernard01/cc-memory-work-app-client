import React from "react";
import {Link} from "react-router-dom";
import "./common.css";

const Header = () => {
  return (
    <div className="ui secondary pointing menu" id={"nav-header"}>
      <Link to={"/"} className={"item"}>Memory Work</Link>
      <div className="right menu">
        <Link to={"/tasks"} className={"item"}>Schedule</Link>
      </div>
    </div>
  )
};

export default Header;
