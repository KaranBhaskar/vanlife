import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h1>
        <Link to=".">#vanlife</Link>
      </h1>
      <ul>
        <li>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "line selected" : "line")}
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "line selected" : "line")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "line selected" : "line")}
          >
            Vans
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
