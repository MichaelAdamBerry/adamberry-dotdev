import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCode,
  faShoppingCart,
  faCloudUploadAlt,
  faUserAstronaut,
  faDotCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faChartBar,
  faCode,
  faShoppingCart,
  faCloudUploadAlt,
  faUserAstronaut,
  faTimesCircle,
  faDotCircle
);

const NewMobileMenu = ({
  windowWidth,
  toggleTechStuff,
  closeTech,
  toggleDataViz,
  toggleECommerce,
  toggleJamStack,
  toggleFrontEnd,
  closeContent,
  toggleTldr,
  toggleAllTech,
  toggleNonTechStuff,
  toggleActingSection,
  toggleCarpentrySection,
  toggleSocial
}) => {
  const [data, getData] = useState([]);
  const [isExpanded, toggleExpanded] = useState(false);

  useEffect(() => {
    const openingAngle = 3.15 * 2;
    const angles = [];
    const openingDistance = 65;
    for (let i = 1; i < 6; i++) {
      let ang = (3.15 - openingAngle) / 2 + (openingAngle / 5) * i;
      let x = Math.cos(ang) * openingDistance;
      let y = Math.sin(ang) * openingDistance + 150;
      angles.push({ ang: ang, x: x, y: y });
    }
    getData(angles);
  }, []);
  console.log(data);
  //   transition-timing-function:cubic-bezier(0.935, 0.000, 0.340, 1.330);
  //   @for $i from 1 through $menu-items{
  //     $angle:(($pi - $opening-angle)/2)+(($opening-angle/($menu-items - 1))*($i - 1));

  return (
    <>
      {windowWidth < 425 && (
        <Container
          style={{
            gridRow: "4/6",
            gridColumn: "1/6",
            width: "200px",
            height: "auto",
            zIndex: 1
          }}>
          <button
            onClick={() => {
              closeContent();
              toggleDataViz(true);
              toggleExpanded(false);
            }}
            className={`item ${isExpanded ? "one" : "center"}`}>
            <FontAwesomeIcon icon="chart-bar" />
          </button>

          <button
            onClick={() => {
              closeContent();
              toggleECommerce(true);
              toggleExpanded(false);
            }}
            className={`item ${isExpanded && "two"}`}>
            <FontAwesomeIcon icon="shopping-cart" />
          </button>

          <button
            onClick={() => {
              closeContent();
              toggleJamStack(true);
              toggleExpanded(false);
            }}
            className={`item ${isExpanded && "three"}`}>
            <FontAwesomeIcon icon="cloud-upload-alt" />
          </button>
          <button
            onClick={() => {
              closeContent();
              toggleFrontEnd(true);
              toggleExpanded(false);
            }}
            className={`item ${isExpanded && "four"}`}>
            <FontAwesomeIcon icon="code" />
          </button>
          <button
            onClick={() => {
              closeContent();
              toggleTldr(true);
              toggleExpanded(false);
            }}
            className={`item ${isExpanded && "five"}`}>
            <FontAwesomeIcon icon="user-astronaut" />
          </button>
          <button
            onClick={() => {
              toggleExpanded(!isExpanded);
              if (!isExpanded) {
                closeContent();
              }
            }}
            className={`item toggler ${isExpanded ? "open" : "close"}`}>
            <FontAwesomeIcon icon="dot-circle" />
          </button>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;
  padding-left: calc((100vw / 2) + 25px);
  margin-top: 0px;

  button {
    background-color: var(--dark-color-background);
    border: none;
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--purp);
    fill: var(--purp);
    color: var(--dark-color-text-default);
    font-size: 2rem;
    margin-left: -50px;
    color: white;
    text-align: center;
    transform: translate3d(0, 150px, 0);
    line-height: 40px;
  }

  /* transition: property duration timing-function delay|initial|inherit; */

  button.one {
    transition-property: transform;
    transition-duration: 50ms;
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    transition-delay: 50ms;
    transform: translate3d(61.83px, 104px, 0);
  }

  .two {
    transition: transform 200ms cubicBezier(0.935, 0, 0.34, 1.33) 40ms;
    transform: translate3d(38.07px, 177.68px, 0);
  }

  .three {
    transition: transform 200ms cubic-bezier(0.935, 0, 0.34, 1.33) 30ms;
    transform: translate3d(-38.51px, 177.36px, 0);
  }

  .four {
    transition: transform 200ms cubic-bezier(0.935, 0, 0.34, 1.33) 20ms;
    transform: translate3d(-61.63px, 104.65px, 0);
  }

  .five {
    transition: transform 200ms cubic-bezier(0.935, 0, 0.34, 1.33) 10ms;
    transform: translate3d(0.8px, 60px, 0);
  }

  .center {
    transition: opacity 200mscubic-bezier(0.935, 0, 0.34, 1.33) 10ms;
    opacity: 0;
  }

  .toggler {
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  }

  button.open {
    transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    transform: scale(0.8, 0.8) translate3d(0, 150px, 0);
  }

  button.close {
    transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    transform: translate3d(0, 150px, 0) scale(0.8, 0.8);
  }

  /* transform: translate3d(
    cos($angle) * $open-distance,
    sin($angle) * $open-distance,
    0
  ); */
`;

export default NewMobileMenu;
