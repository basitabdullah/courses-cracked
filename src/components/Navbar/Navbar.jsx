import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { LiaDonateSolid } from "react-icons/lia";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <div className="text">
          <span className="one">Courses</span>
          <span className="two">Cracked</span>
        </div>
        <img src="/cracked-alien-skull-svgrepo-com.svg" alt="" />
      </Link>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/youtube">YOUTUBE BLUEPRINT COURSE</Link>
        <Link to="/chatgtp">CHATGPT COURSE</Link>
        <Link to="/time">TIME MANAGEMENT COURSE</Link>
        <Link className="btn" to="/donate">
          <LiaDonateSolid />
          <span>Donate</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
