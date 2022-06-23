import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li class="index-link">
          <Link to="/">Index</Link>
        </li>
        <li class="home-link">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/notFound">Not Found Component</Link>
        </li>
      </ul>
    </nav>
  );
};
