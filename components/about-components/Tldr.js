import React from "react";

const Tldr = () => {
  return (
    <>
      <div className="container">
        <div className="bio-main">
          <img
            alt="black and white photo of Micheal Adam Berry"
            src="../static/avatar.jpeg"
          />
        </div>
        <div>
          <h3>
            I build web applications.
            <br />
            <span className="blue"> Mainly with React.</span>
            <br />
            Big internet fan.{" "}
          </h3>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          max-width: 700px;
        }

        .bio-main {
          max-width: 400px;
          opacity: 0.99;
          z-index: 21;
        }

        h3 {
          color: var(--purp);
          font-size: 32px;
          margin: 0;
          margin-left: 2rem;
        }

        .blue {
           color: var(--blueish);
        }

        img {
          border: solid var(--blueish);
          border-radius: 50%;
          margin: 0
          

          shape-outside: circle(50%);
        }
      `}</style>
    </>
  );
};

export default Tldr;
