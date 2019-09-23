import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { animated, useSpring, config } from "react-spring";
const MobileMenu = props => {
  const [showMenu, toggleMenu] = useState(false);

  useEffect(() => {
    toggleMenu(true);
  }, []);

  const {
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
  } = props;

  const { x, r, opacity, color } = useSpring({
    config: config.gentle,
    x: showMenu ? 80 : 0,
    r: showMenu ? 100 : 50,
    opacity: showMenu ? 1 : 0,
    color: showMenu ? "#861657" : "#86165700"
  });
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <radialGradient id="myGradient">
            <stop offset="10%" stopColor="#98d9e1" />
            <stop offset="95%" stopColor="#d6aed6" />
          </radialGradient>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <animated.div
        className="menu-modal"
        style={{
          gridRow: "3/5",
          gridColumn: "1/6",
          alignItems: "center",
          opacity: opacity,
          display: windowWidth > 425 ? "none" : "grid",
          alignContent: "center",
          justifyContent: "center",
          filter: `url('#goo')`
        }}>
        <animated.button
          style={{
            backgroundColor: "#fff0",
            border: "none",
            gridColumn: "1/2",
            gridRow: "1/2",
            transform: x.interpolate(x => `translate3d(${x}px, ${x}px, 0)`)
          }}
          onClick={() => {
            toggleTldr(false);
            closeContent();
            toggleFrontEnd(true);
            toggleTechStuff(true);
            toggleMenu(false);
          }}>
          <animated.div
            style={{
              zIndex: "500",
              opacity: "0.99",
              width: r.interpolate(r => `${r}px`),
              height: r.interpolate(r => `${r}px`),
              backgroundColor: "#98d9e1",
              backgroundImage: "radial-gradient(#98d9e1 0%, #d6aed6 74%)",
              borderRadius: "50%",
              display: "grid",
              alignContent: "center",
              color: color
            }}>
            <h2>Front End</h2>
          </animated.div>
        </animated.button>
        <animated.button
          style={{
            backgroundColor: "#fff0",
            border: "none",
            gridColumn: "1/2",
            gridRow: "1/2",
            transform: x.interpolate(x => `translate3d(${-1 * x}px, ${x}px, 0)`)
          }}
          onClick={() => {
            toggleTldr(false);
            closeContent();
            toggleJamStack(true);
            toggleTechStuff(true);
            toggleMenu(false);
          }}>
          <animated.div
            style={{
              zIndex: "500",
              opacity: "0.99",
              width: r.interpolate(r => `${r * 0.9}px`),
              height: r.interpolate(r => `${r * 0.9}px`),
              backgroundColor: "#98d9e1",
              backgroundImage: "radial-gradient(#98d9e1 0%, #d6aed6 74%)",
              borderRadius: "50%",
              display: "grid",
              alignContent: "center",
              color: color
            }}>
            <h2>Jam Stack</h2>
          </animated.div>
        </animated.button>
        <animated.button
          style={{
            backgroundColor: "#fff0",
            border: "none",
            gridColumn: "1/2",
            gridRow: "1/2",
            transform: x.interpolate(
              x => `translate3d(${-1 * x}px, ${-1 * x}px, 0)`
            )
          }}
          onClick={() => {
            toggleTldr(false);
            closeContent();
            toggleECommerce(true);
            toggleTechStuff(true);
            toggleMenu(false);
          }}>
          <animated.div
            style={{
              zIndex: "500",
              opacity: "0.99",
              width: r.interpolate(r => `${r * 1.1}px`),
              height: r.interpolate(r => `${r * 1.1}px`),
              backgroundColor: "#98d9e1",
              backgroundImage: "radial-gradient(#98d9e1 0%, #d6aed6 74%)",
              borderRadius: "50%",
              display: "grid",
              alignContent: "center",
              color: color
            }}>
            <h2>E-Commerce</h2>
          </animated.div>
        </animated.button>
        <animated.button
          style={{
            backgroundColor: "#fff0",
            border: "none",
            gridColumn: "1/2",
            gridRow: "1/2",
            transform: x.interpolate(x => `translate3d(${x}px, ${-1 * x}px, 0)`)
          }}
          onClick={() => {
            toggleTldr(false);
            closeContent();
            toggleDataViz(true);
            toggleTechStuff(true);
            toggleMenu(false);
          }}>
          <animated.div
            style={{
              zIndex: "500",
              opacity: "0.99",
              width: r.interpolate(r => `${r * 0.8}px`),
              height: r.interpolate(r => `${r * 0.8}px`),
              backgroundColor: "#98d9e1",
              backgroundImage: "radial-gradient(#98d9e1 0%, #d6aed6 74%)",
              borderRadius: "50%",
              display: "grid",
              alignContent: "center",
              color: color
            }}>
            <h2>Data Viz</h2>
          </animated.div>
        </animated.button>
      </animated.div>

      <div style={{ opacity: !showMenu ? 0.99 : 0 }}>
        <button
          onClick={() => {
            toggleMenu(!showMenu);
            closeContent();
            closeTech();
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            width="30px"
            height="30px"
            style={{ transform: "translate(0px, 0px)" }}>
            <title>close-btn</title>
            <path
              fill="#861657"
              stroke="#861657"
              d="M9.3,7.5l5.3-5.4a1.1,1.1,0,0,0,0-1.7,1.1,1.1,0,0,0-1.7,0L7.5,5.7,2.1.4A1.1,1.1,0,0,0,.4.4a1.1,1.1,0,0,0,0,1.7L5.7,7.5.4,12.9a1.1,1.1,0,0,0,0,1.7,1.1,1.1,0,0,0,1.7,0h0L7.5,9.3l5.4,5.3a1.2,1.2,0,0,0,1.7-1.7Z"
            />
          </svg>
        </button>
      </div>
      <style jsx>{`
        h2 {
          font-weight: 200;
          font-size: 1rem;
          text-decoration: ;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
