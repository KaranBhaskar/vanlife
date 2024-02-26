import React from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import "./HostVanId.css";

export default function HostVanId() {
  const [van, setVan] = React.useState({});
  const { id } = useParams();
  const serverLocation = "/api/host/vans/" + id;

  React.useEffect(() => {
    fetch(serverLocation)
      .then((resp) => resp.json())
      .then((data) => setVan(data.vans[0]));
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
      {Object.keys(van).length != 0 && (
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
    </div>
  );
}
