import React from "react";
import { useSpring, animated, config } from "react-spring";

const Title = ({ name }) => {
  const { opacity, xyz } = useSpring({
    from: {
      xyz: [0, -50, 0],
      opacity: 0
    },
    opacity: 1,
    xyz: [0, -1, 1],
    config: config.wobbly
  });
  return (
    <>
      <div className="name">
        <h1>{name}</h1>
        <animated.h1
          style={{
            display: "flex",
            margin: "1rem 0",
            boxShadow: `5px, 5px 10px black`,
            transform: xyz.interpolate(
              (x, y, z) => `translate3d(${x}rem, ${y}rem, ${z}px )`
            )
          }}>
          <span>.</span>
        </animated.h1>
      </div>
      <style jsx>{`
        .name {
          grid-column: 1/3;
          grid-row: 1/2;
          justify-self: center;
          align-self: center;
          color: white;
          display: flex;
          margin: 1rem 0;
          opacity: 0.99;
          z-index: 20;
        }

        .name h1 {
          margin: 1rem 0;
          font-family: "Nunito", sans-serif;
        }

        .name span {
          font-size: 3rem;
          margin: 0;
        }

        .name span {
          color: #f6d327;
        }
      `}</style>
    </>
  );
};

export default Title;
