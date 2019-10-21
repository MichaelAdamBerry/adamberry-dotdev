import React, { useState } from "react";
import styled from "@emotion/styled";
import { useInterval } from "../hooks/useInterval";

const TitleAnimation = ({ isCompleted, isCancelled }) => {
  return (
    <>
      <Title isCancelled={isCancelled} isCompleted={isCompleted}>
        Front End Web Development
      </Title>
      <Animation>
        {!isCompleted && (
          <svg
            className="svg"
            viewBox="0 0 250 170"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                @import
                url("https://fonts.googleapis.com/css?family=BenchNine&display=swap")
              </style>
            </defs>
            <rect className="bg" x="0" y="0" width="250" height="170"></rect>
            <rect className="flash" x="0" y="0" width="250" height="170"></rect>

            <text className="off first" x="80" y="100">
              HTML
            </text>
            <text className="off second" x="80" y="100">
              CSS
            </text>
            <text className="off third" x="15" y="100">
              JAVASCRIPT
            </text>
            <text className="off fourth" x="65" y="100">
              REACT
            </text>
            <text className="long off fifth" x="30" y="100">
              SVG ANIMATIONS
            </text>
            <text className="long off sixth" x="0" y="100">
              DATA VISUALIZATIONS
            </text>
            <text className="long off seventh" x="23" y="100">
              UI DEVELOPMENT
            </text>
            <text className="off eighth" x="10" y="75">
              <tspan>E-COMMERCE</tspan>{" "}
              <tspan className="long" x="20" y="125">
                SHOPIFY
              </tspan>
              <tspan className="long" x="120">
                {" "}
                ||{" "}
              </tspan>
              <tspan x="144" className="long">
                STRIPE
              </tspan>
            </text>
            <text className="ninth off long" x="30" y="100">
              NODE || EXPRESS
            </text>
            <text className="tenth long jam off" x="50" y="75">
              JAM STACK
            </text>
            <text className="eleventh long jam off" x="0" y="125">
              GATSBY.js <tspan x="130">||</tspan> <tspan x="163">NEXT.js</tspan>
            </text>
            <text className="off" x="0" y="100"></text>
            <text className="off" x="0" y="100">
              CSS
            </text>
          </svg>
        )}
      </Animation>
    </>
  );
};

export default TitleAnimation;

const Title = styled.h2`
  grid-column: 2/4;
  grid-row: 1/3;
  justify-self: start;
  align-self: center;
  color: var(--dark-purp);
  opacity: ${props => (props.isCompleted ? 1 : 0)};
  transform-origin: left;
  font-size: 2rem;
  transform: ${props => props.isCancelled && "rotate(90deg)"};
  @media (max-width: 425px) {
    display: none;
  }
  & {
    animation: ${props =>
      !props.isCancelled &&
      "fallDown 200ms cubic-bezier(0, 1, 0.5, 1) 11s 1 normal forwards running"};
  }
  @keyframes fallDown {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
      opacity: 1;
    }
  }
`;

const Animation = styled.div`
  grid-row: 2/6;
  grid-column: 1/6;
  width: 100%;
  height: 100%;
  min-height: calc(100vh * 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;

  .container {
    width: 500px;
    height: 500px;
    min-height: 500px;
  }

  .bg {
    fill: var(--dark-color-base);
  }

  .flash {
    fill: var(--dark-color-text-default);
    opacity: 0;
  }

  text {
    font-family: BenchNine;
    font-size: 60px;
    fill: rgba(237, 48, 159, 1);
    stroke: rgba(237, 48, 159, 1);
  }

  text.long {
    font-size: 39px;
  }

  tspan.long {
    font-size: 39px;
  }

  .off {
    opacity: 0;
  }
  /*on element animation: name duration timing-function delay iteration-count direction fill-mode play-state;
 */

  text.first {
    animation: slideDown 1s ease 1s 1 normal none running;
  }

  text.second {
    animation: slideRight 1s ease 2s 1 normal none running;
  }
  text.third {
    animation: slideUp 1s ease 3s 1 normal none running;
  }
  text.fourth {
    animation: slideLeft 1s ease 4s 1 normal none running;
  }

  text.fifth {
    animation: slideDown 1s ease 5s 1 normal none running;
  }

  text.sixth {
    animation: slideRight 1s ease 6s 1 normal none running;
  }

  text.seventh {
    animation: slideUp 1s ease 7s 1 normal none running;
  }

  text.eighth {
    animation: slideLeft 1s ease 8s 1 normal none running;
  }

  text.ninth {
    animation: slideDown 1s ease 9s 1 normal none running;
  }

  text.tenth {
    animation: slideLeft 1s ease 10s 1 normal none running;
  }
  text.eleventh {
    animation: slideRight 1s ease 10s 1 normal none running;
  }

  rect.flash {
    animation: flash 1s ease 1s 10 normal none running;
  }
  @-webkit-keyframes slideUp {
    0% {
      transform: translate(0px, 150px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(0px, -170px);
    }
  }

  @keyframes slideUp {
    0% {
      transform: translate(0px, 170px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 10px rgba(237, 48, 159, 0.8),
        5px -5px 10px rgba(237, 48, 159, 0.8),
        5px 5px 10px rgba(237, 48, 159, 0.8),
        -5px 5px 10px rgba(237, 48, 159, 0.8);
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(0px, -170px);
    }
  }

  @-webkit-keyframes slideDown {
    0% {
      transform: translate(0px, -150px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 50px rgba(237, 48, 159, 0.8),
        5px -5px 50px rgba(237, 48, 159, 0.8),
        5px 5px 50px rgba(237, 48, 159, 0.8),
        -5px 5px 50px rgba(237, 48, 159, 0.8);
    }
    30% {
      text-shadow: none;
    }

    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(0px, 170px);
    }
  }

  @keyframes slideDown {
    0% {
      transform: translate(0px, -150px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(0px, 170px);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translate(-270px, 0px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(270px, 0px);
    }
  }

  @-webkit-keyframes slideRight {
    0% {
      transform: translate(-270px, 0px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(270px, 0px);
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translate(270px, 0px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-270px, 0px);
    }
  }

  @-webkit-keyframes slideLeft {
    0% {
      transform: translate(270px, 0px);
      opacity: 1;
    }
    20% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    35% {
      text-shadow: none;
    }
    80% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-270px, 0px);
    }
  }

  @keyframes flash {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 0.3;
    }
    30% {
      opacity: 0;
    }
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 0.3;
    }
    30% {
      opacity: 0;
    }
  }
`;
