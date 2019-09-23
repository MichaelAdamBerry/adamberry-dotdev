import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import MobileNav from "./MobileNav";

export default function Layout({ children, bgImg, bgImgSm }) {
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
          <div className="desktop-nav-container">
            <MobileNav />
          </div>

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
            margin: 0;
          }
          .main {
            height: 100vh;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p {
            margin: 0;
          }

          a {
            text-decoration-style: dotted;
            color: var(--blueish);
            cursor: pointer;
          }

          ul {
            list-style: none;
          }

          li {
            padding: 0;
          }

          :root {
            --purp: #861657;
            --sunshine: #fff000;
            --blueish: #015463;
            --pink: #f4bcbf;
          }

          .blue {
            color: var(--blueish);
          }

          .site-container {
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            background-image: url(${bgImg});
            background-size: cover;
            background-position: center bottom;
            display: grid;
            grid-template-columns: 10rem 1fr 1fr 1fr auto;
            grid-template-rows: 100px 25vh 25vh 25vh 10vh;
            font-family: "Nunito", sans-serif;
            font-weight: 200;
            color: #bfb5b5;
          }

          @media (max-width: 800px) {
            .site-container {
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: unset;
              background-position: right bottom;
            }
          }

          @media (max-width: 425px) {
            .site-container {
              background-image: url(${bgImgSm ? bgImgSm : bgImg});
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: auto;
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
