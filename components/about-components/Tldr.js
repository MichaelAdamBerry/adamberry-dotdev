import React from "react";
import { Card } from "./Card";

const Tldr = () => {
  return (
    <>
      <Card>
        <img
          className="left"
          alt="black and white headshot of Micheal Adam Berry"
          src="../static/avatar.jpeg"
        />

        <div className="right">
          <h3>tldr;</h3>
          <ul>
            <li>📚 Lifelong learner of new things</li>
            <li>🎨 Inventor of creative solutions</li>
            <li>🖥 Maker of web applications</li>
            <li>🙌🏼 Advocate for an open and inclusive internet</li>
          </ul>
        </div>
        <div className="footer">
          <p>📍 Brooklyn, NY</p>
        </div>
      </Card>
      <style jsx>{`
        li {
          font-size : smaller;
        }
        img {
          width: 150px;
          height: auto;
          border: solid var(--blueish);
          box-shadow: 0px 0px 20px #2f2f2f22
          margin: 0
        }
      `}</style>
    </>
  );
};

export default Tldr;
