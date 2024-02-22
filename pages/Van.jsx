import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./van.css";

export default function Van() {
  const [van, setVan] = React.useState({});

  const location = "/api" + useLocation().pathname;
  React.useEffect(() => {
    fetch(location)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  let classes = "tag";
  if (van["type"] === "rugged") {
    classes += " green";
  } else if (van["type"] === "luxury") {
    classes += " black";
  }
  return (
    <div className="van">
      <Link className="nav-style" to="/vans">
        Back to all vans
      </Link>
      <img src={van.imageUrl} alt="image of the van" />
      <p className={classes}>{van.type}</p>
      <h2>{van.name}</h2>
      <p>
        ${van.price}
        <span className="price-span">/day</span>
      </p>
      <p className="desc">{van.description}</p>
      <Link className="btn-og" to="/">
        Rent this Van
      </Link>
    </div>
  );
}
