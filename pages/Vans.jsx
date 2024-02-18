import React from "react";
import Van from "./Van";
import "./Vans.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [car, setCar] = React.useState({});

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data["vans"]));
  }, [car]);

  function handleClick(e, classes) {
    const van = vans.find((van) => van.id === e.target.parentNode.id);
    setCar({ ...van, class: classes });
  }

  const vansCard = vans.map((van) => {
    let classes = "tag";
    if (van["type"] === "rugged") {
      classes += " green";
    } else if (van["type"] === "luxury") {
      classes += " black";
    }
    return (
      <div
        onClick={(e) => handleClick(e, classes)}
        key={van["id"]}
        id={van["id"]}
        className="vans-info"
      >
        <img src={van["imageUrl"]} alt="image of van" />
        <p className="van-price">
          {van["name"]} {<span>${van["price"]}</span>}{" "}
          {<span className="van--price-day">/day</span>}
        </p>
        <p className={classes}>{van["type"]}</p>
      </div>
    );
  });

  return (
    <>
      {Object.keys(car).length === 0 ? (
        <div className="vans">
          <h1>Explore Our van options</h1>
          <div className="vans-cards">{vansCard}</div>
        </div>
      ) : (
        <Van handleClick={setCar}>{car}</Van>
      )}
    </>
  );
}
