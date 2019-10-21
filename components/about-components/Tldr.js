import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { useSpring, animated, interpolate, config } from "react-spring";
import { useInterval } from "../../hooks/useInterval";

const Tldr = () => {
  const [update, setUpdate] = useState(false);

  const { xyz, opacity, d } = useSpring({
    config: { duration: 1800 },

    from: { xyz: [0, -90, 1], opacity: 0.8 },
    to: [
      { xyz: [0, -60, 1.6], opacity: 1 },

      // { xyz: [15, 20, 1.8], opacity: 1 },
      { xyz: [30, 10, 2], opacity: 1 },
      { xyz: [30, 10, 2.4], opacity: 0 }
    ]
  });

  useInterval(() => {
    setUpdate(true);
  }, 5000);

  return (
    <>
      <Container>
        <h2>Tl;Dr</h2>
        <h3>Front End Ninja, Creative Type, Swell Guy</h3>

        <div className="animated-container">
          {!update ? (
            <div className="img-container">
              <animated.img
                style={{
                  width: "300px",
                  height: "auto",
                  opacity: opacity,
                  transform: xyz.interpolate(
                    (x, y, z) =>
                      `translate3d(${x * -1}px, ${y}px, ${0}px) scale(${z})`
                  )
                }}
                className="left"
                alt="Me and My Pup"
                src="../static/mewithbones.png"
              />
            </div>
          ) : (
            <>
              <ul className="about-list">
                <li>📚 Lifelong learner of new things</li>
                <li>🎨 Inventor of creative solutions</li>
                <li>🖥 Maker of web applications</li>
                <li>🙌🏼 Advocate for an open and inclusive internet</li>
              </ul>
              <div className="footer">
                <p style={{ paddingLeft: "2rem" }}>📍 Brooklyn, NY</p>
              </div>
            </>
          )}
        </div>
      </Container>
      <style jsx>{`
        .img-container {
          width: 300px;
          height: 300px;
          margin: auto;
          overflow: hidden;
        }
        .footer {
          text-align: left;
        }

        .animated-container {
          transform: translate3d(0, 40px, 0);
        }

        @media (max-width: 425px) {
          .animated-container {
            transform: translate3d(0, 0, 0);
          }

          .footer {
            text-align: right;
          }
        }
      `}</style>
    </>
  );
};

export default Tldr;
