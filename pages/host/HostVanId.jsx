import React, { useState } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import { getHostVans } from "../../api";
import "./HostVanId.css";

export default function HostVanId() {
  const [van, setVan] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    getHostVans(id)
      .then((data) => {
        setVan(data.vans[0]);
      })
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
    <div className="host-van">
      <Link className="nav-style" to=".." relative="path">
        Back to all vans
      </Link>
      {error ? (
        <h2 style={{ textAlign: "center", color: "red" }}>
          {error.status}: {error.message}
        </h2>
      ) : (
        <>
          {loading ? (
            <h2>Loading....</h2>
          ) : (
            <div className="host-van-detail">
              <div className="host-van-details">
                <img src={van.imageUrl} alt="Photo of van" />
                <div className="host-van-text">
                  <p className={classes}>{van.type}</p>
                  <h2>{van.name}</h2>
                  <p>
                    ${van.price}
                    <span>/day</span>
                  </p>
                </div>
              </div>
              <div className="hostVanNav hostnav nav">
                <ul>
                  <li>
                    <NavLink
                      to={`/host/vans/${van.id}`}
                      end
                      className={({ isActive }) =>
                        isActive ? "line selected" : "line"
                      }
                    >
                      Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/host/vans/${van.id}/pricing`}
                      className={({ isActive }) =>
                        isActive ? "line selected" : "line"
                      }
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/host/vans/${van.id}/photos`}
                      className={({ isActive }) =>
                        isActive ? "line selected" : "line"
                      }
                    >
                      Photos
                    </NavLink>
                  </li>
                </ul>
              </div>
              <Outlet context={van} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
