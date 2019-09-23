import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const MobileNav = props => {
  const [isOpen, toggleOpen] = useState(false);
  const iconStyles = {
    width: "1.5rem",
    height: "1.5rem",
    margin: "0 2rem"
  };

  const { x } = useSpring({
    x: isOpen ? 0 : 99
  });

  return (
    <>
      <animated.div
        className="frame"
        style={{
          fontFamily: `"Nunito", sans-serif`,
          display: isOpen ? "block" : "none",
          position: "absolute",
          zIndex: "25",
          top: "0",
          left: "0",
          height: "100vh",
          width: !props.width ? "30vw" : props.width,
          bottom: "0",
          backgroundColor: "#2f2f2f",
          transform: x.interpolate(x => `translate3d(${-1 * x}vw, 0, 0 )`)
        }}>
        <div className="link-container">
          <button className="close" onClick={() => toggleOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              style={{ width: "20px", height: "20px" }}>
              <title>close-btn</title>
              <path
                stroke="#fff"
                fill="#fff"
                d="M9.3,7.5l5.3-5.4a1.1,1.1,0,0,0,0-1.7,1.1,1.1,0,0,0-1.7,0L7.5,5.7,2.1.4A1.1,1.1,0,0,0,.4.4a1.1,1.1,0,0,0,0,1.7L5.7,7.5.4,12.9a1.1,1.1,0,0,0,0,1.7,1.1,1.1,0,0,0,1.7,0h0L7.5,9.3l5.4,5.3a1.2,1.2,0,0,0,1.7-1.7Z"
              />
            </svg>
          </button>
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
          <div className="social">
            <div className="item">
              <a href="https://github.com/michaeladamberry">
                <FontAwesomeIcon icon={["fab", "github"]} style={iconStyles} />
              </a>
            </div>
            <div className="item">
              <a href="https://linkedin/in/michaeladamberry">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  style={iconStyles}
                />
              </a>
            </div>

            <div className="item">
              <a href="https://twitter.com/michaeladamberry">
                <FontAwesomeIcon icon={["fab", "twitter"]} style={iconStyles} />
              </a>
            </div>
          </div>
        </div>
      </animated.div>

      <span className="mobile-nav">
        <button onClick={() => toggleOpen(!isOpen)}>
          <div
            style={{
              transform: isOpen ? "rotate(90deg)" : "none",
              stroke: isOpen ? "white" : "black"
            }}>
            <svg
              style={{ fill: isOpen && "#fff", width: "25px", height: "25px" }}
              viewBox="0 0 265.2 175.3">
              <title>hamburger-menu</title>
              <path d="M132.7,165.3H257.1a17.5,17.5,0,0,1,4,.1,4.9,4.9,0,0,1,4.1,5c-.1,2.7-1.7,4.3-4.3,4.8a26.7,26.7,0,0,1-4,.1H8.5a33.9,33.9,0,0,1-4.5-.2,4.4,4.4,0,0,1-4-4.4c-.1-2.7,1.1-4.6,3.7-5.2a21,21,0,0,1,5-.2Z" />
              <path d="M132.3,92.6H6.3C3,92.6.1,91.7.1,87.8s2.7-5.3,6.3-5.3H255.8c4,0,8.6-.8,9.3,4.9.5,3.8-2.2,5.2-9.4,5.2Z" />
              <path d="M132.8,0H256.2c6.7,0,9.4,1.4,8.9,5.1-.6,5.5-4.9,5-8.8,5H7.9A16.5,16.5,0,0,1,3,9.4C.7,8.7-.2,6.7.1,4.3A4.3,4.3,0,0,1,3.8.2,33.9,33.9,0,0,1,8.3,0Z" />
            </svg>
          </div>
        </button>
      </span>

      <style jsx>
        {`
          

            button.close {
              position: absolute;
              top: 20px;
              right: 20px;
            }
        
            .mobile-nav {
              position: fixed;
              top: 1.7rem;
              left: 1rem;
            }

            .mobile-nav h2,  {
                margin: 0;
                height: 2rem;
            }
            .social {
             
              grid-column: 1/6;
              grid-row: 5/6;
              justify-content: center;
              display: flex;
    
            }

            .item a {
              color: #fff;
            }
            .link-container {
                width: 100%;
                height: 100vh;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
                background-color: #2f2f2f;
                opacity: .99;
                z-index: 300;

            
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
