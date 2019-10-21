import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "@emotion/styled";
import { useInterval } from "../hooks/useInterval";

const WordCloud = ({ darkMode = true }) => {
  const [count, setCount] = useState(0);
  const [currentClass, setCurrentClass] = useState("txt-1");
  const [animationDone, setAnimation] = useState(false);

  const length = 5;

  const bgColor = darkMode ? "#38444c" : "#fff";
  const txtColor = darkMode ? "#f0f2f3;" : "#2f2f2f";

  useInterval(() => {
    setCount(count > length || 0 ? 0 : count + 1);
    setCurrentClass(`txt-${count}`);
    if (count > length) {
      setAnimation(true);
    }
  }, 1500);

  const { fillOpacity } = useSpring({
    config: config.molasses,
    from: {
      opacity: 1
    },
    opacity: 0
  });
  return (
    <Cloud txtColor={txtColor}>
      {!animationDone && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 170">
          <title>word-cloud</title>
          <defs>
            <style>
              @import
              url("https://fonts.googleapis.com/css?family=BenchNine&display=swap")
            </style>
          </defs>
          <rect width="250" height="170" fill={bgColor} />
          <animated.text
            transform="translate(122 126.7)"
            fontSize="18"
            fill={txtColor}
            fillOpacity=".8x"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-1" ? "blink" : ""}>
            html
          </animated.text>
          <animated.text
            transform="translate(79.6 82.9)"
            fontSize="18"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-1" ? "blink" : ""}>
            javascript
          </animated.text>
          <animated.text
            transform="translate(61.7 113.6)"
            fontSize="21"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-2" ? "blink" : ""}>
            react
          </animated.text>
          <animated.text
            transform="translate(93.2 52.7)"
            fontSize="18"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-1" ? "blink" : ""}>
            css
          </animated.text>
          <animated.text
            transform="translate(163.5 99)"
            fontSize="14"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-2" ? "blink" : ""}>
            express
          </animated.text>
          <animated.text
            transform="translate(180.3 125)"
            fontSize="14"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-2" ? "blink" : ""}>
            node
          </animated.text>
          <animated.text
            transform="translate(188.4 45.4)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-3" ? "blink" : ""}>
            d3.js
          </animated.text>
          <animated.text
            transform="translate(135.6 59.4)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-3" ? "blink" : ""}>
            data viz
          </animated.text>
          <animated.text
            transform="translate(176 76.4)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-3" ? "blink" : ""}>
            accessiblity
          </animated.text>
          <animated.text
            transform="translate(44.5 143.4)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-4" ? "blink" : ""}>
            e-commerce
          </animated.text>
          <animated.text
            transform="translate(9.3 91.6)"
            fontSize="14"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-5" ? "blink" : ""}>
            jam stack
          </animated.text>
          <animated.text
            transform="translate(31.2 61.8)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-5" ? "blink" : ""}>
            next.js
          </animated.text>
          <animated.text
            transform="translate(50.8 27.6)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-5" ? "blink" : ""}>
            gatsby.js
          </animated.text>
          <animated.text
            transform="translate(122.2 28)"
            fontSize="12"
            fill={txtColor}
            fillOpacity=".8"
            fontFamily={`'BenchNine', sans-serif`}
            className={currentClass === "txt-4" ? "blink" : ""}>
            svg animations
          </animated.text>
        </svg>
      )}
    </Cloud>
  );
};

const Cloud = styled.div`
  grid-row: 2/5;
  grid-column: 2/5;
  width: 100%;
  height: 100%;
  max-width: 600px;
  min-height: calc(100vh * 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;

  svg text {
    fill: white;
  }
  svg text.blink {
    animation: blink 2s ease-out;
  }

  @keyframes blink {
    0% {
      text-shadow: 0 0 20px rgba(237, 48, 159, 0);
    }
    20% {
      fill: rgba(237, 48, 159, 1);
      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }

    30% {
      fill: rgba(237, 48, 159, 1);

      text-shadow: -5px -5px 20px rgba(237, 48, 159, 0.8),
        5px -5px 20px rgba(237, 48, 159, 0.8),
        5px 5px 20px rgba(237, 48, 159, 0.8),
        -5px 5px 20px rgba(237, 48, 159, 0.8);
    }

    70% {
      fill: rgba(237, 48, 159, 0.07);
    }
    100% {
      text-shadow: 0 0 20px rgba(237, 48, 159, 0);
    }
  }

  @media (max-width: 425px) {
    grid-row: 2/4;
    grid-column: 1/6;
  }
`;

export default WordCloud;
