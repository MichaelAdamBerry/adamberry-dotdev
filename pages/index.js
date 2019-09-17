import React, { useState } from "react";
import ContactCardFormik from "../components/ContactCardFormik";

import Layout from "../components/MyLayout";
import Nav from "../components/Nav";
import { useSpring, animated, config } from "react-spring";
import Title from "../components/Title";
import MobileNav from "../components/MobileNav";

export default () => {
  const [loadingState, setLoadingState] = useState("");

  const sendOnSubmit = async values => {
    const data = await JSON.stringify(values);
    fetch("./api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      res.status === 200
        ? setLoadingState("submitted")
        : setLoadingState("error");
    });
  };

  const { opacity } = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1,

    config: config.wobbly
  });
  return (
    <animated.div style={{ opacity: opacity }}>
      <Layout
        bgImg="../static/bg-water-tower.png"
        bgImgSm="../static/bg-water-tower-sm.png">
        <Title name={"Michael Adam Berry"} />
        <div className="quote-mark">
          <img
            alt="large quotation mark"
            src="../static/quote-mark-light.svg"
          />
        </div>
        <div className="quote">
          <p> Make great things and then make them better</p>
        </div>
        <Nav current="home" />
        <MobileNav />
        <div className="content">
          <div className="content-container">
            <h1>fullstack web developer</h1>

            <p>let's collaborate!</p>
            <ContactCardFormik />
          </div>
        </div>

        <style jsx>{`


        svg {
          color: var(--main-dark-blue);
        }
        .item {
            width: 1rem;
            height; 1rem;
        }

        .quote, .quote-mark {
          grid-column: 2/5;
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


        .content {
          grid-column: 2/5;
          grid-row: 2/5;
          align-self: center;
        }

        .content-container {
          padding: 2rem;
          max-width: 20rem;
          background-color: #2f2f2f55;

        }

        .content h1 {
          font-weight: 700;
          font-size: 1.8rem;
          margin-top: 0;
          color: var(--purp);
        }
        .content p {
          font-size: 1.5rem;
          width: 20rem;
          color: var(--purp);
        }

        .content p, .content h1, .content h2 {
          line-height: 2rem;
          margin: 1rem 0;
        }

 

        .content div {
          margin: 1rem 0;
        }




        @media (max-width: 800px) {
          .site-container {
            background-position: center;
          }
        }

        @media (max-width: 425px) {
          .quote-mark, .content, .quote {
            grid-column: 1/6;
          }

          .content-container {
            max-width: unset;
          }

          .content div {
            margin : 0;
          }
          
  
        }
  


      `}</style>
      </Layout>
    </animated.div>
  );
};
