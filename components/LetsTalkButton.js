import React, { useState } from "react";
import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";

const LetsTalkButton = ({ onClick, isForm }) => {
  const [isHovered, setHovered] = useState(false);

  const { color, backgroundImage, opacity } = useSpring({
    color: isHovered
      ? "var(--dark-color-text-default)"
      : "var(--dark-color-base)",
    backgroundImage: isHovered
      ? "var(--purp-gradient)"
      : "var(--dark-color-text-default)"
  });

  return (
    <BtnContainer
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}>
      <animated.button
        onClick={onClick}
        style={{
          color: color,
          backgroundImage: backgroundImage,
          opacity: opacity
        }}>
        Get In Touch
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
    border: 5px solid var(--dark-color-border);
  }

  position: fixed;
  bottom: 100px;
  left: 50px;

  @media (max-width: 425px) {
    top: unset;
    bottom: 30px;
    right: calc((100vw - 138px) / 2);
    button {
      width: 138px;
      border-radius: 10%;
      height: 60px;
    }
    p {
      margin-bottom: 0.5rem;
    }
  }
`;
export default LetsTalkButton;
