import { useState } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import styled from "@emotion/styled";

export default ({ cardObj }) => {
  const [hovered, setHovered] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const { title, img, description, row, col } = cardObj;

  const { x } = useSpring({
    x: hovered ? 0.8 : 0
  });
  const [show, set] = useState(true);
  const transitions = useTransition(show, null, {
    from: {
      transform: `translate3d(${row === 1 ? "300px" : "-300px"} ,${
        col === 1 ? "100px" : "-100px"
      }, 100px)`,
      opacity: 0
    },
    enter: { transform: "translate3d(0,0px,0) ", opacity: 1 },
    leave: { transform: "translate3d(0,-40px,0)" }
  });

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <>
          <animated.div key={key} style={props}>
            <Project>
              <div
                className="card-container"
                onClick={() => {
                  setSelected(!isSelected);
                }}
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <div className="img-container">
                  <img alt={title} src={img} />
                </div>
                <div className="text">
                  <animated.div
                    style={{
                      minHeight: "100%",
                      backgroundColor: "black",
                      opacity: x.interpolate(x => x)
                    }}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </animated.div>
                </div>
              </div>
            </Project>
          </animated.div>
        </>
      )
  );
};

const Project = styled.div`
  width: 275px;
  background-color: #2f2f2f85;
  box-shadow: 10px 10px 20px #2f2f2f85;
  cursor: pointer;
  justify-self: center;
  align-self: center;

  .card-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .text,
  .img-container {
    grid-row: 1/4;
    grid-column: 1/4;
  }

  .text {
    background-color: "black",
    paddingLeft: "1rem"
  }

  h3 {
    color: white;
    font-size: 1.1rem;
    margin-top: 0;
  }

  p {
    font-size: 0.8rem;
  }

  img {
    width: 100%;
    height: auto;
  }


  @media (max-width: 425px) {
 


  .text {
    display: none;
  }

  div.img-container {
    width: 100%;
  }
}
`;
