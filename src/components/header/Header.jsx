import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/exchanges"}>Exchanges</Link>
      <Link to={"/coins"}>Conis</Link>
    </nav>
  );
};

export default Header;
