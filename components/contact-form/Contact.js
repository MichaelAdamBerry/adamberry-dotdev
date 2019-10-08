import React from "react";
import { animated } from "react-spring";
import ContactCardFormik from "./ContactCardFormik";

const Contact = ({ opacity, setForm }) => {
  return (
    <>
      <div className="content">
        <animated.div
          style={{
            margin: "auto",
            opacity: opacity,
            maxWidth: "600px",
            padding: "1rem",
            backgroundColor: "#2f2f2f55",
            height: "100%"
          }}
          className="content-container">
          <div className="close-container">
            <button className="close clear" onClick={() => setForm(false)}>
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
          </div>
          <h1>
            fullstack <br />
            web developer
          </h1>

          <p>let's collaborate!</p>

          <ContactCardFormik />
        </animated.div>
      </div>
      <style jsx>{`
        .content {
          grid-row: 2/5;
          grid-column: 1/6;
          justify-self: center;
          width: 90vw;
          max-width: 600px;
        }

        .content h1 {
          font-size: 1.8rem;
          margin-top: 0;
          color: var(--dark-color-text-default);
        }
        .content p {
          font-size: 1.5rem;
          width: 20rem;
          color: var(--dark-purp);
        }

        .content p,
        .content h1,
        .content h2 {
          line-height: 2rem;
          margin: 1rem 0;
        }

        .close-container {
          position: relative;
        }

        .close-container button {
          top: 0;
          position: absolute;
          right: 0;
        }

        svg {
          color: var(--main-dark-blue);
        }

        @media (max-width: 425px) {
          .content-container {
            max-width: unset;
          }

          .content div {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
