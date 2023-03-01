import React from "react";
import "./Haircuts.css";

function Haircuts() {
  return (
    <div className="haircuts-container">
      <h1 className="haircuts-title">Haircut Services</h1>
      <div className="haircuts-list">
        <div className="haircuts-item">
          <h2>Classic Haircut</h2>
          <p>A timeless haircut, perfect for any occasion.</p>
          <p>Price: $30</p>
        </div>
        <div className="haircuts-item">
          <h2>Beard Trim & Haircut</h2>
          <p>Get a fresh haircut and beard trim all in one visit.</p>
          <p>Price: $40</p>
        </div>
        <div className="haircuts-item">
          <h2>Kid's Haircut</h2>
          <p>A basic haircut for children under 12 years old.</p>
          <p>Price: $20</p>
        </div>
      </div>
    </div>
  );
}

export default Haircuts;
