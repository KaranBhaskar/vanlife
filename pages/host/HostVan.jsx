import React from "react";
import { Link } from "react-router-dom";
import "./HostVan.css";

export default function HostVan() {
  const [vans, setVans] = React.useState([]);

  const location = "/api/host/vans";

  React.useEffect(() => {
    fetch(location)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
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
      <h2>Your listed vans</h2>
      {vansElement}
    </>
  );
}
