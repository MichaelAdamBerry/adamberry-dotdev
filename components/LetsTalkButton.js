import React, { useState } from "react";
import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";

export const SkipAnimationButton = ({ onClick, display }) => {
  return (
    <>
      {display && (
        <BtnContainer>
          <button
            onClick={onClick}
            style={{
              color: "var(--dark-color-text-default)",
              backgroundImage: "var(--purp-gradient)"
            }}>
            Skip Animation
          </button>
        </BtnContainer>
      )}
    </>
  );
};

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
    border: 5px solid var(--dark-color-border);
  }

  position: fixed;
  bottom: 50px;
  right: 50px;

  @media (max-width: 425px) {
    top: unset;
    bottom: 30px;
    right: calc(50vw - 69px);
    left: initial;
    button {
      width: 138px;
      height: 50px;
      border: none;
    }
    p {
      margin-bottom: 0.5rem;
    }
  }
`;
export default LetsTalkButton;
