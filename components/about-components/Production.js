import React from "react";
import PhotoGrid from "./PhotoGrid";

const Production = () => {
  return (
    <>
      <div className="intro">
        <h2>Live Event Production</h2>
        <p>
          I have helped produce live events in New York City in roles ranging
          from scenic carpentry to associate project manager.
        </p>
      </div>

      <div className="examples">
        <h3>Notable past events include:</h3>
        <ul>
          <li>New York Fashion Week</li>
          <li>The Frieze Art Fair</li>
          <li>The US Open (tennis)</li>
          <li>Lincoln Center Out of Doors Festival</li>
        </ul>
      </div>
      <style jsx>{`
        .examples {
          padding: 1rem 0;
        }

        h2,
        h3 {
          color: var(--purp);
        }

        p,
        li {
          color: var(--blueish);
        }
      `}</style>
    </>
  );
};

export default Production;
