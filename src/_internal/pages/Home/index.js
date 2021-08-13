// Globals
import "./styles.scss";
import React from "react";

// Components
import { Link } from "react-router-dom";

// Component
function Home() {
  return (
    <div className="aura-home aura-page">
      <h1>Aura Code Challenge</h1>

      <div className="aura-home-cards">
        <Link to="/timer">
          <div className="aura-home-card">
            <h2>Part I</h2>
            React Timer
          </div>
        </Link>
        <Link to="/records">
          <div className="aura-home-card">
            <h2>Part II</h2>
            Global Records
          </div>
        </Link>
      </div>
    </div>
  );
}

export { Home };
