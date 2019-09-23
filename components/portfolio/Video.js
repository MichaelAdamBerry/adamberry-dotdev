import React from "react";
import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";

const Video = ({ isOpen, setVideoOpen, src, description, title }) => {
  const { x } = useSpring({
    x: isOpen ? 1 : 0
  });
  return (
    <animated.div
      className="featured-video"
      style={{
        opacity: x.interpolate(x => x),
        transform: x.interpolate(x => `scale(${x})`),
        justifySelf: "center",
        alignSelf: "center",
        zIndex: "100",
        borderRadius: "3%",
        boxShadow: "3rem 3rem 15rem #bb9d9d77",
        maxWidth: "100vw"
      }}>
      <FixedVideo>
        {isOpen && (
          <button
            className="close-container"
            onClick={() => setVideoOpen(false)}>
            <img alt="close btn" src="static/close-btn.svg" />
          </button>
        )}
        <h2>{title}</h2>
        <p>{description}</p>
        <video autoPlay loop muted playsInline key={src}>
          <source src={src} type="video/mp4" />
        </video>
      </FixedVideo>
    </animated.div>
  );
};

const FixedVideo = styled.div`
  position: fixed;
  top: 100px;
  left: 5%;
  width: 100vw;
  height: calc(100vh - 100px);

  button:focus {
    outline: none;
  }

  h2 {
    text-align: center;
  }
  p {
    color: white;
    max-width: 650px;
    margin: auto;
    padding: 0.5rem;
  }

  video {
    width: 90vw;
    height: auto;
    margin: auto;
  }

  .close-container {
    position: fixed;
    top: 100px;
    right: 50px;
    background-color: white;
    border-radius: 50%;
    width: 50px;
    min-height: 50px;
    z-index: 103;
    cursor: pointer;
    opacity: 0.99;
  }

  .close-container img {
    margin-top: 0.3rem;
    z-index: 102;
    opacity: 0.99;
  }
  @media (max-width: 425px) {
    top: 75px;
    height: calc(100vh - 75px);

    .close-container {
      top: 75px;
      width: 30px;
      min-height: unset;
      height: 30px;
    }

    p {
      max-width: unset;
    }

    h2 {
      text-align: left;
    }

    video {
      max-width: 90vw;
    }
  }
`;

export default Video;
