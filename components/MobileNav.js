import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSitemap, faTerminal } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, faSitemap, faTerminal);

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
          backgroundColor: "var(--color-dark-base)",
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
                stroke="#293238"
                fill="#293238"
                d="M9.3,7.5l5.3-5.4a1.1,1.1,0,0,0,0-1.7,1.1,1.1,0,0,0-1.7,0L7.5,5.7,2.1.4A1.1,1.1,0,0,0,.4.4a1.1,1.1,0,0,0,0,1.7L5.7,7.5.4,12.9a1.1,1.1,0,0,0,0,1.7,1.1,1.1,0,0,0,1.7,0h0L7.5,9.3l5.4,5.3a1.2,1.2,0,0,0,1.7-1.7Z"
              />
            </svg>
          </button>
          <div className="navs">
            <div className="nav-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>

            <div className="nav-item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </div>
            <div className="nav-item">
              <a href="https://dank-nugs.now.sh/blog">Blog</a>
            </div>
          </div>

          <div className="social">
            <div className="item">
              <a href="https://github.com/michaeladamberry">
                <FontAwesomeIcon icon={["fab", "github"]} style={iconStyles} />
              </a>
            </div>
            <div className="item">
              <a href="https://linkedin.com/in/michaeladamberry">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  style={iconStyles}
                />
              </a>
            </div>

            <div className="item">
              <a href="https://twitter.com/_Adam_Berry">
                <FontAwesomeIcon icon={["fab", "twitter"]} style={iconStyles} />
              </a>
            </div>
          </div>
        </div>
      </animated.div>

      <span className={`${isOpen === true ? "inactive" : "active"} mobile-nav`}>
        <button onClick={() => toggleOpen(!isOpen)}>
          <div className="site-map">
            <FontAwesomeIcon icon="sitemap" />
          </div>
        </button>
      </span>

      <style jsx>
        {`
            button.close {
              position: absolute;
              top: 70%;
              right: 0rem;
              background-color: var(--dark-color-text-default); 
              color: var(--dark-color-base);

            }

            .site-map {
              transform: rotate(-90deg) translate3d(0, -1.5rem, 0);
    font-size: 1.4rem;
    line-height: 4rem;
    color: var(--dark-color-base);
    stroke: black;
            }
        
            .mobile-nav {
              width:2.5rem;
              height: 5rem;
              position: fixed;
              z-index: 800;
              top: 70%;
              left: 0rem;
              background-color: var(--blueish);
              
            }

            .mobile-nav button {
              animation: colorchange 10s linear infinite alternate both;

            }

            .mobile-nav h2,  {
                margin: 0;
                height: 1rem;
            }
            .social {
             
              grid-column: 1/6;
              grid-row: 1/2;
              justify-content: center;
              display: flex;
              align-self: center;
    
            }

            .item a {
              color: var(--color-dark-text-default);
              
            }
            .link-container {
                width: 100%;
                height: 100vh;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
                background-color: var(--dark-color-base);
                opacity: .99;
                z-index: 300;

            
            }

            .navs {
              grid-row: 2/5;
              grid-column: 1/6;
              padding-left: 6rem;
              padding-top: 8rem;
              height: 40vh;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
}






            }

            .nav-item a {
                color: var(--color-dark-text-default);
                text-decoration: none;
                font-size: 1.5rem;
                margin-right: 1rem;

            }

           

            



            button {
              font-size: 1.5rem;
              cursor: pointer;
              width: 2.5rem;
              height: 5rem;
              border: none;
         
            }

            h2 {
              margin: 0;
              width: 3rem;
              font-size: 2.5rem;
              line-height: 2rem
            }
            
            span.inactive
            {
              position: initial;
              animation: btn-fadeout 1s cubic-bezier(0, 1, 0.5, 1) 10ms 1 normal none
      running;
            }
            
          }
        `}
      </style>
    </>
  );
};

export default MobileNav;
