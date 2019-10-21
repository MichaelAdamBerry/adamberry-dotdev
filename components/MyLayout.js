import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Michael Adam Berry || Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/favicon.ico"
          className="next-head"
        />
        <link
          href="https://fonts.googleapis.com/css?family=BenchNine|Amiri|Teko:300|Nunito:400,800"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>

      <div className="main">
        <div className="site-container">
          <div className="mobile-nav-container">
            <MobileNav width="100vw" />
          </div>
          <Nav />

          {children}
        </div>

        <style jsx global>{`
          .desktop-nav-container,
          mobile-nav-container {
            height: 100vh;
          }

          .mobile-nav-container {
            display: none;
          }

          body {
            margin: 0;
          }
          .main {
            width: 100%;
            height: 100vh;
            margin: 0;
            background-color: var(--dark-color-base);
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p {
            margin: 0;
            font-weight: 200;
          }

          a {
            text-decoration-style: dotted;
            color: var(--dark-color-text-default);
            cursor: pointer;
          }

          button.clear {
            background-color: unset;
            border: none;
          }

          ul {
            list-style: none;
          }

          li {
            padding: 0;
          }

          :root {
            --purp: #861657;
            --dark-purp: #fb8ccc;
            --sunshine: #fff000;
            --blueish: #9ab6bb;
            --dark-color-background: #38444c;
            --dark-color-border: #697278;
            --dark-color-text-default: #f0f2f3;
            --dark-color-base: #293238;
            --dark-color-accent: #ec1a62;
            --purp-gradient: linear-gradient(45deg, #861657, #fb8ccc);
          }

          .blue {
            color: var(--blueish);
          }

          .site-container {
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            background-color: var(--dark-color-background);
            display: grid;
            grid-template-columns: 10rem 1fr 1fr 1fr auto;
            grid-template-rows: 100px 25vh 25vh 25vh 10vh;
            font-family: "Nunito", sans-serif;
            font-weight: 200;
            color: var(--dark-color-text-default);
            max-width: 1400px;
            margin: auto;
          }

          @keyframes fadein {
            from {
              transform: translate3d(1000px, 0px, 0);
              opacity: 0;
            }
            to {
              transform: translate3d(0px. 0px 0);
              opacity: 1;
            }
          }

          @-webkit-keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeout {
            from {
              transform: translate3d(0px. 0px 0);
              opacity: 1;
            }
            to {
              transform: translate3d(-1000px, 0px, 0);
              opacity: 0;
            }
          }

          @-webkit-keyframes fadeout {
            from {
              transform: translate3d(0px. 0px 0);
              opacity: 1;
            }
            to {
              transform: translate3d(-1000px, 0px, 0);
              opacity: 0;
            }
          }

          @keyframes btn-fadeout {
            0% {
              transform: translate3d(0px. 0px 0);
              opacity: 1;
            }
            50% {
              transform: rotate(360deg);
            }
            100% {
              transform: translate3d(-1000px, 0px, 0);
              opacity: 0;
            }
          }

          @-webkit-keyframes btn-fadeout {
            0% {
              transform: translate3d(0px. 0px 0);
              opacity: 1;
            }
            50% {
              transform: rotate(360deg);
            }
            100% {
              transform: translate3d(-1000px, 0px, 0);
              opacity: 0;
            }
          }

          @keyframes colorchange {
            from {
              background: #9ab6bb;
            }
            to {
              background: #fb8ccc;
            }
          }

          @media (max-width: 800px) {
            .site-container {
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: unset;
            }
          }

          @media (max-width: 425px) {
            .site-container {
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: 80px 25vh 25vh 25vh 10vh;
            }

            .desktop-nav-container {
              display: none;
            }
            .mobile-nav-container {
              display: block;
            }

            .content-container {
              max-width: unset;
            }

            .content div {
              margin: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;

  @media (max-width: 425px) {
    height: 70px;
  }
`;
