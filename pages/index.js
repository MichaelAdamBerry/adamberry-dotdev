import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/MyLayout";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

export default () => {
  const buttonClick = e => {
    e.preventDefault();
    console.log("button clicked");
  };

  const StyledLink = styled.a`
    color: white;
    text-decoration: none;
  `;

  const iconStyles = {
    width: "1em",
    height: "1em"
  };

  const { opacity, xyz } = useSpring({
    from: {
      xyz: [0, -50, 0],
      opacity: 0
    },
    opacity: 1,
    xyz: [0, -1, 1],
    config: config.wobbly
  });
  return (
    <animated.div style={{ opacity: opacity }}>
      <Layout>
        <div className="site-container">
          <div className="gradient" />
          <div className="name">
            <h1>Michael Adam Berry</h1>
            <animated.h1
              style={{
                display: "flex",
                margin: "1rem 0",
                boxShadow: `5px, 5px 10px black`,
                transform: xyz.interpolate(
                  (x, y, z) => `translate3d(${x}rem, ${y}rem, ${z}px )`
                )
              }}>
              <span>.</span>
            </animated.h1>
          </div>
          <div className="quote-mark">
            <img alt="large quotation mark" src="../static/quote-marg-lg.svg" />
          </div>
          <div className="quote">
            <p> How can we make this better?</p>
          </div>
          <div className="nav">
            <Link href="/about" passHref>
              <StyledLink>About</StyledLink>
            </Link>
            <Link href="/portfolio" passHref>
              <StyledLink>Portfolio</StyledLink>
            </Link>
            <Link href="/contact" passHref>
              <StyledLink>Contact</StyledLink>
            </Link>
            <p> | </p>
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
          <div className="content">
            <h2>Freelance</h2>
            <h1>Web Developer</h1>
            <p>I love to think and build interesting things</p>
            <form onSubmit={buttonClick}>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Project Summarry" />
              <input type="file" className="custom-file-input" title=" " />
              <button onClick={buttonClick}>Request a Quote</button>
            </form>
          </div>
        </div>

        <style jsx>{`
        html, body, .site-container {
          width: 100%;
          height: 100%;
          min-height: 100vh;
          max-height: 100vh;
        }
        .site-container {
          background-image: url("../static/bg-img-1.png");
          background-size: cover;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          font-family: "Nunito", sans-serif;
          font-weight: 200;
          color: #bfb5b5;
        }
        svg {
          color: var(--main-dark-blue);
        }
        .item {
            width: 1rem;
            height; 1rem;
        }

        .gradient {
          grid-row: 1 / 6;
          grid-column: 1/6;
          background-color: #d1959233;
          background-image: linear-gradient(
            315deg,
            #d1959290 0%,
            #c81f7090 74%
          );
        }

        .name {
          grid-column: 1/3;
          grid-row: 1/2;
          justify-self: center;
          align-self: center;
          color: white;
          display: flex;
          margin: 1rem 0;
        }
        
        .name h1 {
          margin: 1rem 0;
        }

        .quote, .quote-mark {
          grid-column: 4/6;
          grid-row: 5/6;
          justify-self: start;
          align-self: center;
          font-size: 1.3rem;
          color: white;
        }

        .quote-mark {
          width : 2.7rem;
          height: 2.7rem;
          margin-left: -1rem;
        }

        .nav {
          grid-column: 4/6;
          grid-row: 1/2;
          align-self: center;
          display: flex;
          justify-content: space-around;
        }

        a {
          color: white;
          text-decoration: none;
        }
        .content {
          grid-column: 2/5;
          grid-row: 2/5;
          align-self: center;
        }

        .name span,
        .content h2 {
          color: #f6d327;
        }

        .content h2 {
          font-weight: 200;
          font-size: 2rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .content h1 {
          font-weight: 400;
          font-size: 1.8rem;
          margin-top: 0;
          color: white;
        }
        .content p {
          font-size: 1.5rem;
          width: 20rem;
        }

        .name span {
          font-size: 3rem;
          margin: 0;
        }

        .content div {
          margin: 1rem 0;
        }

        input {
          background: none;
          border: none;

          color: #bfb5b5;
        
          border-bottom: solid;
 
          font-size: 1rem;
  

        }

        input:nth-child(1) {
            width: 20rem;
            display: block;
        }

        input:nth-child(2) {
          margin-right: 1rem;
          width: 14rem;
        }
        input:nth-child(3) {
          width: 5rem;
        }

        button {
          width: 10rem;
          height: 2.5rem;
          border-radius: 18px;
          color: #de4daa;
          display: block;
          margin-top: 2rem;
        }
        ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #bfb5b5;
        }
        ::-moz-placeholder {
          /* Firefox 19+ */
          color: #bfb5b5;
        }
        :-ms-input-placeholder {
          /* IE 10+ */
          color: #bfb5b5;
        }
        :-moz-placeholder {
          /* Firefox 18- */
          color: #bfb5b5;
        }

        .custom-file-input::-webkit-file-upload-button {
          visibility: hidden;
        }
        .custom-file-input::after {
          content: 'File 📎';
          display: inline-block;
          background: linear-gradient(top, #f9f9f9, #e3e3e3);
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          cursor: pointer;

        }
        .custom-file-input:hover::before {
          border-color: black;
        }
        .custom-file-input:active::before {
          background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
        }

      .custom-file-input ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: blue;
        }
      `}</style>
      </Layout>
    </animated.div>
  );
};
