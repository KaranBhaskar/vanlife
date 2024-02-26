import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

export default function Nav() {
  function handleLocalStorage() {
    console.log("worked");
    localStorage.removeItem("logged");
  }
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
        <li>
          <NavLink to="login">
            <FaRegUserCircle />
          </NavLink>
        </li>
        <li>
          <GiCrossedBones onClick={handleLocalStorage} />
        </li>
      </ul>
    </div>
  );
}
