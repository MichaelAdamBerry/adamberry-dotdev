import React from "react";
import { Card } from "./Card";

const TechStuff = () => {
  return (
    <section>
      <h2
        style={{
          color: "var(--blueish)",
          margin: "1rem 0",
          padding: "1rem 0",
          borderTop: "solid"
        }}>
        Technically Speaking...{" "}
      </h2>

      <h3
        style={{
          color: "var(--blueish)",
          margin: "2rem 0",
          borderBottom: "solid"
        }}>
        Skills, Experience, and the Tools I Love
      </h3>
      <Card>
        <div className="left">
          <img src="../static/logo-react.svg" alt="React Logo" title="React" />
        </div>
        <div className="right">
          <h3>front end development</h3>
          <ul>
            <li>Semantic and Accessible HTML</li>
            <li>Responsive CSS Layouts</li>
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
    </section>
  );
};

export default TechStuff;
