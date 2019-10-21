import React from "react";
import styled from "@emotion/styled";
import { animated, useTrail, config } from "react-spring";

const Logos = ({ data }) => {
  const trail = useTrail(data.length, {
    from: {
      xyz: [50, 0, 0],
      opacity: 0
    },
    opacity: 1,
    xyz: [0, -1, 1],
    config: config.stiff
  });

  return (
    <LogoBar length={data.length}>
      {trail.map(({ xyz, opacity, ...rest }, indx) => (
        <animated.div
          key={indx}
          style={{
            ...rest,
            width: "50px",
            height: "50px",

            backgroundColor: "var(--dark-color-base)",
            borderRadius: "50%",
            boxShadow: "0 5px 10px #2f2f2f",
            transform: xyz.interpolate(
              (x, y, z) => `translate3d(${x}rem, ${y}rem, ${z}px )`
            )
          }}>
          <img src={data[indx].url} alt={data[indx].alt} />
        </animated.div>
      ))}
    </LogoBar>
  );
};

const LogoBar = styled.div`
  width: ${props => (props.length < 3 ? "60%" : "100%")};
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  img {
    width: 40px;
    height: auto;
    margin-left: 5px;
    margin-top: 5px;
  }
  @media (max-width: 425px) {
    margin: auto;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
`;

export default Logos;
