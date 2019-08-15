import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const Nav = ({ current }) => {
  const StyledLink = styled.a`
    color: white;
  `;

  const iconStyles = {
    width: "1em",
    height: "1em"
  };
  return (
    <>
      <div className="nav">
        <Link href="/" passHref>
          <StyledLink
            style={{
              textDecoration: `${current === "home" ? "underline" : "none"}`,
              color: `${current === "home" ? "#f6d327" : "white"}`
            }}>
            Home
          </StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink
            style={{
              textDecoration: `${current === "about" ? "underline" : "none"}`,
              color: `${current === "about" ? "#f6d327" : "white"}`
            }}>
            About
          </StyledLink>
        </Link>
        <Link href="/portfolio" passHref>
          <StyledLink
            style={{
              textDecoration: `${
                current === "portfolio" ? "underline" : "none"
              }`,
              color: `${current === "portfolio" ? "#f6d327" : "white"}`
            }}>
            Portfolio
          </StyledLink>
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
            grid-column: 4/6;
            grid-row: 1/2;
            align-self: center;
            display: flex;
            justify-content: space-around;
            opacity: 0.99;
            z-index: 100;
          }

          a {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default Nav;
