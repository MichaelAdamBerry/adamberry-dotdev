import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, );

const Nav = ({ current }) => {
  const iconStyles = {
    width: "1.5rem",
    height: "1.5rem"
  };
  return (
    <>
      <div className="nav">
        <Link href="/">
          <a className={current === "home" ? "current" : "static"}>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>

        <div className="item">
          <a href="https://github.com/michaeladamberry">
            <FontAwesomeIcon icon={["fab", "github"]} style={iconStyles} />
          </a>
        </div>
        <div className="item">
          <a href="https://linkedin/in/michaeladamberry">
            <FontAwesomeIcon icon={["fab", "linkedin"]} style={iconStyles} />
          </a>
        </div>

        <div className="item">
          <a href="https://twitter.com/michaeladamberry">
            <FontAwesomeIcon icon={["fab", "twitter"]} style={iconStyles} />
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .nav {
            width: 75%;
            justify-self: right;
            grid-column: 3/6;
            grid-row: 1/2;
            align-self: center;
            display: flex;
            justify-content: space-around;
            opacity: 0.99;
            z-index: 100;
          }

          a {
            color: var(--blueish);
            text-decoration: none;
            font-size: 1.5rem;
          }

          .current a {
            color: #f5d231;
            text
          }
          @media (max-width: 800px) {
            .nav {
              display: none;
            }
          }
    
        `}
      </style>
    </>
  );
};

export default Nav;
