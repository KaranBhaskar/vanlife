import React from "react";
import "./HostVanIdDetails.css";
import { useOutletContext } from "react-router-dom";

export default function HostVanIdDetails() {
  const van = useOutletContext();
  console.log(van);
  return (
    <p>
      <span className="question">Name:</span>
      <span className="answer">{van.name}</span>
      <br />
      <span className="question">Category:</span>
      <span className="answer">{van.type}</span>
      <br />
      <span className="question">Description:</span>
      <span className="answer">{van.description}</span>
      <br />
      <span className="question">Visibilty:</span>
      <span className="answer">Public</span>
    </p>
  );
}
