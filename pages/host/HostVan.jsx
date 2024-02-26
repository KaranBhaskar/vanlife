import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";
import "./HostVan.css";

export default function HostVan() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data.vans))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  const vansElement = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} className="vansElement" key={van.id}>
      <img src={van.imageUrl} alt="Image of van" />
      <div className="text">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
    </Link>
  ));
  return (
    <>
      {error ? (
        <h1 style={{ textAlign: "center", color: "red" }}>
          {error.status}: {error.message}
        </h1>
      ) : (
        <>
          <h2>Your listed vans</h2>
          {loading ? <h3>Loading</h3> : vansElement}
        </>
      )}
    </>
  );
}
