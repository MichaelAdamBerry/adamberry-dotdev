import React from "react";
import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";
//mp4, description, title, tech, url
const Video = ({
  isOpen,
  setVideoOpen,
  src,
  description,
  title,
  tech,
  url
}) => {
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
        <p className="link">{url != "" && <a href={url}>Go to Site</a>}</p>
        <video autoPlay loop muted playsInline key={src}>
          <source src={src} type="video/mp4" />
        </video>
        <div className="text">
          <h3>Tech Stack :</h3>
          <ul>
            {tech != undefined &&
              tech.map((d, i) => {
                return <li key={i}>{d}</li>;
              })}
          </ul>
        </div>
      </FixedVideo>
    </animated.div>
  );
};

const FixedVideo = styled.div`
  position: fixed;
  top: 100px;

  width: 100vw;
  height: calc(100vh - 100px);

  button:focus {
    outline: none;
  }

  h2 {
    text-align: center;
    margin-top: 2rem;
    color: var(--dark-purp);
  }
  p {
    color: white;
    max-width: 650px;
    margin: auto;
    padding: 0.5rem;
  }

  h3 {
    color: var(--dark-purp);
  }

  h3,
  ul,
  a,
  .link {
    font-size: 1.2rem;
  }

  .link a {
    color: var(--dark-purp);
    font-weight: 600;
  }

  .text {
    width: 50vw;
    margin: auto;
    display: flex;
    margin-top: 2rem;
  }

  h3 {
    width: 10rem;
    font-weight: 600;
    line-height: 2rem;
  }

  ul {
    margin-top: 1rem;
    margin: auto;
    padding: 0;
    width: 50vw;
    display: flex;
  }

  li {
    margin-right: 0.5rem;
    line-height: 2rem;

    &:after {
      content: ",";
    }
  }

  li:last-of-type {
    &:after {
      content: "";
    }
  }

  video {
    width: 50vw;
    height: auto;
    margin-left: 25vw;
    margin-top: 2rem;
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

    ul {
      flex-wrap: wrap;
    }

    video,
    .text {
      width: 90vw;
      margin-left: 5vw;
      margin-right: 5vw;
    }
  }
`;

export default Video;
