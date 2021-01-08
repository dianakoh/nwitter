import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <url>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </url>
  </nav>
);

export default Navigation;
