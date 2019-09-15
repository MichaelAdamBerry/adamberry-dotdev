import React from "react";

const TechStuff = () => {
  return (
    <>
      <div className="container">
        <img src="../static/quote-mark-light.svg" className="quote-mark" />

        <blockquote>
          To me programming is more that an important practical art. It is aslo
          a gigantic undertaking in the foundations of knowledge.
          <h3>-Grace Hopper</h3>
        </blockquote>

        <div className="work-list">
          <h3 className="blue">
            Work I <span style={{ color: "red" }}>♥</span> Doing
          </h3>

          <ul>
            <li>Front End Development</li>
            <li>E-Commerce Stores</li>
            <li>User Interface Development</li>
            <li>JAM Stack Development</li>
            <li>Data Visualization & Informatic Development</li>
            <li>Data Journalism</li>
          </ul>
        </div>
        <div className="tool-list">
          <h3 className="blue">
            <span style={{ color: "red", fontSize: "larger" }}>🛠</span>'s I use
            to do it
          </h3>
          <ul>
            <li>
              <div className="logo">
                <img src="../static/logo-html.svg" alt="HTML5" title="HTML 5" />
              </div>
            </li>
            <li>
              <div className="logo">
                <img
                  src="../static/logo-javascript.svg"
                  alt="JavaScript"
                  title="JavaScript"
                />
              </div>
            </li>
            <div className="logo">
              <img src="../static/logo-css.svg" alt="CSS3" title="CSS" />
            </div>
            <div className="logo">
              <img src="../static/logo-react.svg" alt="React" title="React" />
            </div>

            <div className="logo">
              <img
                src="../static/logo-gatsby.svg"
                alt="Gatsby"
                title="Gatsby"
              />
            </div>

            <div className="logo">
              <img src="../static/logo-next.svg" alt="Next" title="Next.js" />
            </div>

            <div className="logo">
              <img src="../static/logo-d3.svg" alt="D3.js" title="D3" />
            </div>

            <div className="logo">
              <img
                src="../static/logo-node.svg"
                alt="Node.js"
                title="Node.js"
              />
            </div>

            <div className="logo">
              <img
                src="../static/logo-shopify.svg"
                alt="Shopify"
                title="Shopify"
              />
            </div>

            <div className="logo">
              <img
                src="../static/logo-stripe.svg"
                alt="Stripe"
                title="Stripe"
              />
            </div>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .container {
          color: var(--blueish);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: auto auto auto auto auto;
          grid-row-gap: 2rem;
        }

        h3 {
          margin: 0.3rem 0;
        }

        h5 {
          margin: 0;
        }

        img {
          width: 2.5rem;
          height: 2.5rem;
        }
        .quote-mark,
        blockquote {
          grid-column: 1/6;
          grid-row: 5/6;
        }

        .work-list {
          grid-column: 1/6;
          grid-row: 1/2;
        }

        .work-list h3,
        .tool-list h3 {
          font-weight: 400;
          font-size: 1.8rem;
          margin-top: 0;
        }

        ul {
          list-style: none;
          padding: 0;
          background: var(--pink);
          box-shadow: 0px 0px 10px #2f2f2f55;
          width: 50%;
          padding: 1rem;
        }
        .author {
          grid-column: 4/6;
          grid-row: 5/6;
          align-self: end;
          color: var(--purp);
        }

        blockquote {
          color: var(--purp);
        }

        .tool-list {
          grid-column: 1/6;
          grid-row: 4/5;
        }

        .tool-list ul {
          display: flex;
          flex-wrap: wrap;
        }

        .tool-list h3,
        .work-list h3 {
          width: 50%;
        }

        .logo {
          width: 3rem;
          height: auto;
          padding: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default TechStuff;
