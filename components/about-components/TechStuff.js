import React from "react";
import { Card, Blurb } from "./Card";

export const FrontEnd = () => {
  return (
    <>
      <Blurb>
        <h3> Both Sides of the Front End</h3>
        <p>
          As code formerly handled by the server shifts to the client, the
          demands on front end developers has increased. Balancing strong
          problem solving skills with creativity and empathy for the user is
          paramount.
        </p>
      </Blurb>
      <Card>
        <div className="left">
          <img src="../static/logo-react.svg" alt="React Logo" title="React" />
        </div>
        <div className="right">
          <h3>front end development</h3>
          <ul>
            <li>Semantic and Accessible HTML</li>
            <li>Responsive CSS Layouts</li>
            <li>SVG Animations</li>
            <li>Vanilla Javascript</li>
            <li>JQuery</li>
            <li>React</li>
          </ul>
        </div>

        <div className="footer">
          <a href="https://twitter.com/snoopdogg/status/306540425152442368?lang=en">
            <img src="../static/snoop-tweet.png" />
          </a>
        </div>
      </Card>
    </>
  );
};

export const JamStack = () => {
  return (
    <>
      <Blurb>
        <h3>Javascript + APIs + Markup</h3>
        <p>
          Using new technologies to build performant, flexible, and secure
          applications quickly
        </p>
      </Blurb>
      <Card>
        <div className="left">
          <img src="../static/logo-gatsby.svg" alt="Gatsby" title="Gatsby" />
        </div>
        <div className="right">
          <h3>jam stack developemnt</h3>
          <h4>javascript. apis. markup</h4>
          <ul>
            <li>Static Site Generators</li>
            <li>Headless CMS</li>
            <li>Gatsby.js</li>
            <li>Next.js</li>
            <li>Serverless Functions</li>
          </ul>
        </div>
        <div className="footer">
          <a href="https://twitter.com/codebeast/status/1133927268697305091?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1133927268697305091&ref_url=https%3A%2F%2Fblog.logrocket.com%2Fwhy-you-should-be-using-jamstack%2F">
            <img
              src="../static/jam-stack-tweet.png"
              alt="tweet from Christian Nwumba"
            />
          </a>
        </div>
      </Card>
    </>
  );
};

export const ECommerce = () => {
  return (
    <>
      <Blurb>
        <h3>E-commerce Develoment</h3>
        <p>
          I have built e-commerce applications using Gatsby.js for building
          static site generation and Shopify and Stripe for processing payments
          and order fulfilment
        </p>
      </Blurb>
      <Card>
        <div className="left">
          <img
            src="../static/logo-shopify.svg"
            alt="Shopify's signature shopping bag animation"
          />
        </div>
        <div className="right">
          <h3>e-commerce</h3>
          <li>Shopify</li>
          <li>Stripe</li>
        </div>
      </Card>
    </>
  );
};

export const DataViz = () => {
  return (
    <>
      <Blurb>
        <h3>Communicating Data</h3>
        <p>
          The web offers unique possibilities for a user to dynamically explore
          data. Creating data visualizations combines code, informatic design,
          and statistics{" "}
        </p>
      </Blurb>
      <Card>
        <div className="left">
          <img src="../static/logo-d3.svg" alt="D3.js logo" />
        </div>
        <div className="right">
          <h3>Data Visualizations</h3>
          <ul>
            <li>D3.js</li>
            <li>Observable Note Book</li>
            <li>Vega Lite</li>
          </ul>
        </div>
      </Card>
    </>
  );
};

const TechStuff = ({ children }) => {
  return <section>{children}</section>;
};

export default TechStuff;
