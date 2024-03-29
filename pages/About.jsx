import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div
        className="hero-img"
        role="img"
        aria-label="hero image for the website"
      ></div>
      <div className="about-info">
        <h2>Don't squeeze in a sedan when you could relax in a van</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="about-info-card">
          <h3>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h3>
          <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
}
