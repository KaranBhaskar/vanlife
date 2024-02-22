import React from "react";
import { Link } from "react-router-dom";
import "./Vans.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data["vans"]));
  }, []);

  const vansCard = vans.map((van) => {
    let classes = "tag";
    if (van["type"] === "rugged") {
      classes += " green";
    } else if (van["type"] === "luxury") {
      classes += " black";
    }
    return (
      <div key={van["id"]} className="vans-info">
        <Link to={`/vans/${van.id}`}>
          <img src={van["imageUrl"]} alt="image of van" />
          <p className="van-price">
            {van["name"]} {<span>${van["price"]}</span>}
            {<span className="van--price-day">/day</span>}
          </p>
          <p className={classes}>{van["type"]}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="vans">
      <h1>Explore Our van options</h1>
      <div className="vans-cards">{vansCard}</div>
    </div>
  );
}
