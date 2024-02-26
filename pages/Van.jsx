import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAVan } from "../api";
import "./van.css";

export default function Van() {
  const [van, setVan] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const id = useParams().id;
  // console.log(id);
  React.useEffect(() => {
    setLoading(true);
    getAVan(id)
      .then((data) => setVan(data.vans))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  let classes = "tag";
  if (van["type"] === "rugged") {
    classes += " green";
  } else if (van["type"] === "luxury") {
    classes += " black";
  }

  return (
    <>
      {error ? (
        <h1 style={{ textAlign: "center", color: "red" }}>
          {error.status} {error.message}
        </h1>
      ) : !loading ? (
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
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading.....</h1>
      )}
    </>
  );
}
