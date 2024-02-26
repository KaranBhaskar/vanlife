import React from "react";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import "./Vans.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  const newvans = type
    ? vans.filter((van) => van.type.toLowerCase() === type)
    : vans;
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data["vans"]));
  }, []);

  const vansCard = newvans.map((van) => {
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

  function handleClick(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp}`;
  }

  function handleQuery(key, value) {
    setSearchParams((prvParam) => {
      if (value === null) {
        prvParam.delete(key);
      } else {
        prvParam.set(key, value);
      }
      return prvParam;
    });
  }
  return (
    <div className="vans">
      <h1>Explore Our van options</h1>
      <div className="filter-div">
        <NavLink
          to={handleClick("type", "simple")}
          className={({ isActive }) => (isActive ? "filter og" : "filter")}
        >
          Simple
        </NavLink>
        <button
          onClick={() => handleQuery("type", "rugged")}
          style={{ border: "none", padding: "6px 26px" }}
          className={"type green"}
        >
          Rugged
        </button>
        <NavLink
          to="?type=luxury"
          className={({ isActive }) => (isActive ? "filter black" : "filter")}
        >
          Luxury
        </NavLink>
        {searchParams.has("type") && (
          <button
            onClick={() => handleQuery("type", null)}
            className="nav-style clear-filter"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="vans-cards">{vansCard}</div>
    </div>
  );
}
