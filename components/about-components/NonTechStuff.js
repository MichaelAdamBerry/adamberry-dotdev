import React from "react";
import PhotoGrid from "./PhotoGrid";
import { Card, FlexList } from "./Card";
const NonTechStuff = () => {
  const data = [
    { css: "/static/wedding-1.png", height: 250 },
    { css: "/static/bones.png", height: 400 },
    { css: "/static/red.png", height: 400 },
    { css: "/static/marathon.png", height: 270 },
    { css: "/static/tetons.png", height: 350 },
    { css: "/static/dancin.png", height: 270 },
    { css: "/static/adam-emily-1.png", height: 270 },
    { css: "/static/indian-lights.png", height: 300 }
  ];

  return (
    <section>
      <Card>
        <FlexList>
          <h3>passions & hobbies</h3>
          <ul>
            <li>👫 Fam</li>
            <li>👟 Running</li>
            <li>🥾 Hiking</li>
            <li>🍷 Fine Wines</li>
            <li>🍕 Fine Foods</li>
            <li>🐶 Fine Pups</li>
          </ul>
        </FlexList>

        <div className="footer">
          <PhotoGrid data={data} />
        </div>
      </Card>
    </section>
  );
};

export default NonTechStuff;
