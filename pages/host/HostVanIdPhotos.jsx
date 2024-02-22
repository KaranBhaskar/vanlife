import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanIdPhotos() {
  const van = useOutletContext();
  return (
    <img
      className="profile-img"
      src={van.imageUrl}
      alt="current uploaded van pic"
    />
  );
}
