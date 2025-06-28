import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <li className="navbar bg-primary text-primary-content">
        <Link to="/" className=" text-xl text-neutral-content">
          Invoice Builder
        </Link>
        <h1 className="text-xl text-neutral-content"></h1>
      </li>
    </nav>
  );
};

export default NavBar;
