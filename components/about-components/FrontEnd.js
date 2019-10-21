import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Container } from "./Container";
import { Card, Blurb } from "./Card";
import Logos from "./Logos";
import { CSSTransition } from "react-transition-group";
import { ReadMoreBtns } from "../ReadMoreBtns";
const FrontEnd = () => {
  const [textSection, updateSection] = useState("first");
  const data = [
    { url: "../static/logo-html.svg", alt: "HTML5 Logo" },
    { url: "../static/logo-css.svg", alt: "CSS Logo" },
    { url: "../static/logo-javascript.svg", alt: "Javascript Logo" },
    { url: "../static/logo-react.svg", alt: "React Logo" }
  ];

  const text = [
    "Shaping a user's experience of an application starts when (and how quickly) the first page laods. No matter how great an application maybe, if the code that ships to the user is not dialed in, that application won't be successful.",
    "Creating experiences with HTML, CSS and Javascript sythesizes my passion for programmatic problem solving and communicating a cohesive story or vision.",
    "It's an exciting time to work on the client side as modern browsers allow us to achieve full-stack-ish powers with javascript.",
    "I love that there is always something new to learn or technique to try."
  ];
  return (
    <>
      <Container>
        <h2>Front End Dev</h2>
        <Logos data={data} />
        <UpdatingText>
          {textSection === "first" ? (
            <div className={`text ${textSection === "first" && "fadein"}`}>
              <h3>Crafting UX</h3>
              <p>{text[0]}</p>
              <ReadMoreBtns>
                <button onClick={() => updateSection("second")}>◉</button>
                <button onClick={() => updateSection("second")}>○</button>
                <button onClick={() => updateSection("second")}>○</button>
              </ReadMoreBtns>
            </div>
          ) : textSection === "second" ? (
            <CSSTransition
              in={textSection === "second"}
              timeout={300}
              classNames={"slidein"}>
              <div className={`text ${textSection === "second" && "fadein"}`}>
                <h3>Creative Problem Solving</h3>
                <p>{text[1]}</p>
                <ReadMoreBtns>
                  <button onClick={() => updateSection("third")}>○</button>
                  <button onClick={() => updateSection("third")}>◉</button>
                  <button onClick={() => updateSection("third")}>○</button>
                </ReadMoreBtns>
              </div>
            </CSSTransition>
          ) : (
            <div className={`text ${textSection === "third" && "fadein"}`}>
              <h3>Exploring What's Possible</h3>

              <p>{text[2]}</p>
              <p>{text[3]}</p>
              <ReadMoreBtns>
                <button onClick={() => updateSection("first")}>○</button>
                <button onClick={() => updateSection("first")}>○</button>
                <button onClick={() => updateSection("first")}>◉</button>
              </ReadMoreBtns>
            </div>
          )}
        </UpdatingText>
      </Container>
    </>
  );
};

const UpdatingText = styled.div`
  position: relative;
  .slidein-enter {
    opacity: 0;
  }

  .slidein-enter-active {
    opacity: 1;
  }
  .fadein p,
  .fadein h3 {
    animation: fadein 300ms cubic-bezier(0, 1, 0.5, 1) 10ms 1 normal none
      running;
  }

  .fadeout p,
  .fadeout h3 {
    animation: fadeout 300ms cubic-bezier(0, 1, 0.5, 1) 10ms 1 normal none
      running;
  }
  .text {
    position: absolute;
    width: 94%;
    height: 100%;
    left: 3%;
    top: 0;
    z-index: 600;
  }
`;

export default FrontEnd;
