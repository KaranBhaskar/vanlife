import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>You got the travel plans, we got the travel vans</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement.
          <br /> Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="./about">Find you van</Link>
      </div>
    </div>
  );
}
