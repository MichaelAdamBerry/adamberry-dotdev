import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, toggleOpen] = useState(false);

  const { x } = useSpring({
    x: isOpen ? 0 : 99
  });

  return (
    <>
      <animated.div
        className="frame"
        style={{
          display: isOpen ? "block" : "none",
          position: "absolute",
          zIndex: "25",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "#2f2f2f",
          transform: x.interpolate(x => `translate3d(${x}vw, 0, 0 )`)
        }}>
        <div className="link-container">
          <div
            className="nav-item"
            style={{ gridRow: "1", gridColumn: "2/6", alignSelf: "end" }}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>

          <div
            className="nav-item"
            style={{ gridRow: "2", gridColumn: "2/6", alignSelf: "center" }}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div
            className="nav-item"
            style={{ gridRow: "3", gridColumn: "2/6", alignSelf: "top" }}>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </div>
        </div>
      </animated.div>

      <span className="mobile-nav">
        <button onClick={() => toggleOpen(!isOpen)}>
          <h2>{!isOpen ? "➤" : "⌦"}</h2>
        </button>
      </span>

      <style jsx>
        {`
          .mobile-nav {
            display: none;
          }

          @media (max-width: 800px) {
            .mobile-nav {
              grid-column: 5/6;
              grid-row: 1/2;
              justify-self: center;
              align-self: center;
              display: block;
              z-index: 250;
            }

            .mobile-nav h2,  {
                margin: 0;
                height: 2rem;
            }

            .link-container {
                width: 100%;
                height: 100vh;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

            }
            }

            .nav-item a {
                color: white;
                text-decoration: none;
                font-size: 1.5rem;
            }

            



            button {
              font-size: 1.5rem;
              cursor: pointer;
              
            
              background: none;
              border: none;
              color: white;
            }

            h2 {
              margin: 0;
              width: 3rem;
              font-size: 2.5rem;
              line-height: 2rem
            }

            button:focus {
              outline: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default MobileNav;
