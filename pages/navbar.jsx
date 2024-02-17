import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation().pathname;
  return (
    <div className="nav">
      <h1>
        <Link to=".">#vanlife</Link>
      </h1>
      <ul>
        <li>
          <span className={location == "/about" ? "line selected" : "line"}>
            <Link to="/about">About</Link>
          </span>
        </li>
        <li>
          <span className="line">Vans</span>
        </li>
      </ul>
    </div>
  );
}
