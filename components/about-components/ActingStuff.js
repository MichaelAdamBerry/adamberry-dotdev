import React from "react";
import PhotoGrid from "./PhotoGrid";
import { Card, Description } from "./Card";

const ActingStuff = () => {
  const data = [
    { css: "/static/private-romeo-1.jpg", height: 300 },
    { css: "/static/old-headshot.jpg", height: 400 },
    { css: "/static/common-enemy.jpg", height: 400 },
    { css: "/static/short-film.png", height: 400 },
    { css: "/static/vampire.png", height: 300 },
    { css: "/static/london.jpg", height: 400 }
  ];

  return (
    <Card>
      <Description>
        <h3>Acting</h3>
        <p>
          Before I began programming, I worked as an actor based in New York
          working primarily in independent films and theatre. <br />
          You can check out some of my credits on{" "}
          <a href="https://www.imdb.com/name/nm2291542/">IMDB</a>.
        </p>
      </Description>
      <div className="footer">
        <PhotoGrid data={data} />
      </div>
    </Card>
  );
};

export default ActingStuff;
