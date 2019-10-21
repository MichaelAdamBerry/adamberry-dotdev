import React from "react";
import { useSpring, animated, config } from "react-spring";

const Title = ({ name, subtitle, suffix }) => {
  const { opacity, xyz } = useSpring({
    from: {
      xyz: [0, -50, 0],
      opacity: 0
    },
    opacity: 1,
    xyz: [0, -1, 1],
    config: config.wobbly,
    delay: subtitle ? 11000 : 1000
  });
  return (
    <>
      <div className="name">
        <h1>{name}</h1>

        <animated.p
          style={{
            display: "flex",
            margin: "0",
            boxShadow: `5px, 5px 10px black`,
            transform: xyz.interpolate(
              (x, y, z) => `translate3d(${x}rem, ${y}rem, ${z}px )`
            )
          }}>
          {!suffix ? (
            <span>.</span>
          ) : (
            <>
              <span>.</span>
              <span>dev</span>
            </>
          )}
        </animated.p>
      </div>

      <style jsx>{`
        .name {
          grid-column: 2/4;
          grid-row: 1/2;
          justify-self: start;
          align-self: center;
          color: var(--dark-color-text-default);
          display: flex;
          margin-top: 1rem;
          opacity: 0.99;
          z-index: 20;
          transform: translate3d(0.5rem, 0px, 0px);
        }

        .name h1,
        p,
        h2 {
          font-size: 32px;
          font-family: "Nunito", sans-serif;
        }

        .name span {
          color: var(--blueish);
          padding-top: 2rem;
        }

        .name span:first-of-type {
          padding-top: 0;
          margin: 0;
          font-size: 3rem;
        }

        @media (max-width: 800px) {
          .name,
          h2 {
            grid-column: 1/5;
            justify-self: left;
            margin-left: 40px;
            transform: none;
          }
          .name h1,
          h2 {
            font-size: 1.7rem;
          }
          .name span {
            font-size: 2rem;
            margin-top: 0.8rem;
          }
        }

        @media (max-width: 425px) {
          h1 {
            margin-top: 2rem;
          }
          .name,
          h2 {
            grid-column: 1/6;
            justify-self: center;
            align-self: end;
            margin-left: 0;
            font-size: 1rem;
          }

          .name p {
            margin-top: -0.7rem;
          }

          .name span:first-of-type {
            margin-top: 1.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default Title;
