import React from "react";
import { Link } from "react-router-dom";
import "./van.css";

export default function Van({ children, handleClick }) {
  return (
    <div className="van">
      <button className="nav-style" onClick={() => handleClick({})}>
        Back to all vans
      </button>
      <img src={children["imageUrl"]} alt="image" />
      <p className={children.class}>{children.type}</p>
      <h2>{children.name}</h2>
      <p>
        ${children.price}
        <span>/day</span>
      </p>
      <p className="desc">{children.description}</p>
      <Link className="btn-og" to=".">
        Rent this Van
      </Link>
    </div>
  );
}
