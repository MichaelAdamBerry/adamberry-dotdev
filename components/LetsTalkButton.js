import React, { useState } from "react";
import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";

const LetsTalkButton = ({ onClick, visibility }) => {
  const [isHovered, setHovered] = useState(false);

  const { color, backgroundColor } = useSpring({
    color: isHovered ? "white" : "black",
    backgroundColor: isHovered ? "#015463" : "white"
  });

  return (
    <BtnContainer
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}>
      <animated.button
        onClick={onClick}
        style={{
          color: color,
          backgroundColor: backgroundColor,
          visibility: visibility
        }}>
        Let's Talk
        <animated.svg
          style={{
            visibility: visibility,
            fill: backgroundColor,
            width: "60px",
            height: "18px",
            marginTop: "3px"
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="50 0 40 161.9">
          <title>mail-icon</title>
          <animated.path
            d="M226,146.5c-3.8,10.7-11.4,14.4-22.7,14.4q-89.9-.5-179.6,0C12.4,161,4.8,157.2,1,146.5V15.5C4.7,5,12,1,23.1,1q90.2.5,180.3,0C214.6.9,222.2,4.8,226,15.5ZM218.3,14.8l-5.5,4.6L127.7,93.5c-8.6,7.5-19.6,7.6-28.2.2L38.1,40.2,8.7,14.7c-.2,2.9-.6,4.8-.6,6.7V139.9c0,9.9,3.7,13.7,13.5,13.7H205.5c9.5,0,13.4-3.9,13.4-13.3V21.8C218.9,19.9,218.6,17.9,218.3,14.8ZM13.2,9,28.5,22.4l75,65.3c6.8,6,13.1,5.8,20.1,0l3-2.6,69.7-60.7L213.7,9Z"
            strokeMiterlimit="10"
            strokeWidth="5"
            stroke={color}
          />
        </animated.svg>
      </animated.button>
    </BtnContainer>
  );
};

const BtnContainer = styled.span`
  button {
    width: 208px;
    height: 58px;
    font-size: 18px;
    line-height: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 30px #2f2f2f;
    border-radius: 32px;
    border: none;
  }

  position: fixed;
  bottom: 100px;
  right: 50px;

  @media (max-width: 425px) {
    top: unset;
    bottom: 30px;
    right: 30px;
    button {
      width: 100px;
      border-radius: 20%;
      height: 100px;
    }
  }
`;
export default LetsTalkButton;
