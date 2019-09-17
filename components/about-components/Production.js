import React from "react";
import { Card, Description, FlexList } from "./Card";
import PhotoGrid from "./PhotoGrid";

const Production = () => {
  return (
    <Card>
      <FlexList>
        <h3>live events</h3>
        <p>
          I have helped produce live events in New York City in roles ranging
          from scenic carpenter to associate project manager.
        </p>

        <h3>notable past events :</h3>
        <ul>
          <li>NY Fashion Week</li>
          <li>Frieze Art Fair</li>
          <li>The US Open</li>
          <li>Lincoln Center Out of Doors</li>
        </ul>
      </FlexList>
    </Card>
  );
};

export default Production;
