import React from "react";
import PhotoGrid from "./PhotoGrid";
const NonTechStuff = () => {
  const data = [
    { css: "/static/bones.png", height: 400 },
    { css: "/static/indian-lights.png", height: 300 },
    { css: "/static/wedding-1.png", height: 400 },
    { css: "/static/red.png", height: 400 },
    { css: "/static/marathon.png", height: 300 },
    { css: "/static/tetons.png", height: 400 },
    { css: "/static/dancin.png", height: 300 },
    { css: "/static/adam-emily-1.png", height: 300 }
  ];

  return (
    <>
      <h2>Real Life</h2>
      <p>
        Aside from coding - I enjoy running, hiking, being unsucessful at
        curbing my twitter addiction, and most importanty spending time with my
        wife and our two children who happen to be dogs.
      </p>
      <PhotoGrid data={data} />

      <style jsx>{`
        h2 {
          color: var(--purp);
        }
        p {
          color: var(--blueish);
        }
        .posts-container {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default NonTechStuff;
