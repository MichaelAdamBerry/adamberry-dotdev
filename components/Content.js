import Card from "./Card";
import Contact from "./Contact";

export default () => {
  return (
    <div className="container">
      <h4 className="section-title">
        <div>WORK</div>
      </h4>
      <div className="hero-img">
        <img src="../static/temp-hero.png" />
      </div>
      <div className="border" />
      <div className="hero-filter filter" />
      <div className="cards">
        <div className="one">
          <a href="https://grateful-data.com">
            <Card
              url="https://grateful-data.com"
              tags={["data vizualizations", "d3.js"]}
              tools={["Javascript, D3.js"]}
              title="Grateful Data"
              text="What 30 years of setlist data can tell us about the career arc of the Grateful Dead. Interactive data visualizations from set list data gathered from setlist.fm"
            />
          </a>
        </div>
        <div className="three">
          <a href="https://myreps20.michaeladamberry3.now.sh/">
            <Card
              tags={[
                "client side apps",
                "single page",
                "democracy",
                "propublica",
                "google"
              ]}
              url=""
              tools={["react", "next.js"]}
              title="my_reps"
              text="Identify and connect with your elected officials. Leverages data from Google's Civics API and Propublica's Congress API"
            />
          </a>
        </div>
        <div className="two">
          <a href="https://github.com/MichaelAdamBerry/lancer" target="_blank">
            <Card
              url=""
              tags={["c.r.u.d.", "web apps", "firebase", "freelancers"]}
              title="Free / Lancer"
              text=" Scheduling application for freelancers. Track jobs, expenses, and payments."
              tools={["react", "redux", "firebase"]}
            />
          </a>
        </div>
        <div className="four">
          <a href="https://github.com/MichaelAdamBerry/bookshelf">
            <Card
              url=""
              tags={["full-stack", "web applications", "e-books", "google"]}
              tools={["node", "express", "react"]}
              title="Digital Bookshelf"
              text="Search and save from catalogue free online e-books provided by Google Books. Built with Node, Express, and React."
            />
          </a>
        </div>
        <Contact />
      </div>

      <style jsx>{`
        .container {
          color: var(--main-dark-blue);
          width: 100%;
          display: grid;
          grid-template-columns: 7% 14% 62% 13%;
          grid-template-rows: 5% 5% 75% 15%;
          font-family: "Amiri", serif;
          margin-top: 5em;
        }
        .border {
          border-top: solid;
          grid-row: 1/2;
          grid-column: 2/4;
          margin-top: 0.5em;
        }

        a {
          text-decoration: none;
          link-style: none;
          color: var(--main-dark-blue);
        }

        .section-title {
          grid-row: 1;
          grid-column: 2;
          font-family: "Teko", sans-serif;
          text-align: left;
          font-size: 35px;
          line-height: 2em;
          z-index: 2;
          margin-top: 0;
          margin-bottom: 1em;
          align-self: self-end;
        }

        .hero-img {
          grid-row: 2/5;
          grid-column: 2/5;
        }

        .hero-img img {
          width: 100%;
          height: auto;
        }

        .cards {
          margin: 1em 1em 0 1em;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          grid-column-gap: 1.5em;
          grid-row-gap: 5em;
          z-index: 2;
          grid-row: 2/5;
          grid-column: 2/5;
        }

        .one {
          grid-column: 1/3;
          grid-row: 1/2;
        }

        .one,
        .two {
          align-self: center;
        }

        .one,
        .three {
          width: 90%;
        }

        .two {
          grid-column: 3;
          grid-row: 1/3;
        }

        .three {
          grid-column: 1/3;
          grid-row: 2;
        }
        .four {
          grid-column: 4;
          grid-row: 1/3;
        }

        .item {
          display: flex;
          margin-right: 1em;
          margin-left: 1em;
          justify-content: space-between;
          height: 2em;
        }

        .line {
          grid-column: 1/2;
          grid-row: 1;
          border-right: solid 5px;
        }
        .hero-filter {
          grid-row: 1/5;
          grid-column: 1/4;
          background-color: var(--main-light-blue);
          z-index: 1;
          opacity: 0.4;
        }

        @media (min-width: 320px) and (max-width: 480px) {
          .section-title {
            margin-bottom: 0;
          }
          .container {
            display: block;
          }

          .item {
            margin-right: 2em;
            margin-left: 2em;
          }

          img {
            display: none;
          }

          .cards {
            display: block;
            margin: 0;
            scroll-snap-type: y mandatory;
          }

          .cards div {
            scroll-snap-align: start;
          }

          .contact {
            display: block;
            width: 98%;
            margin: auto;
          }
          .contact h4 {
            border-bottom: solid 5px;
            writing-mode: lr;
            text-align: left;
          }
        }

        @media (min-width: 481px) and (max-width: 900px) {
          .cards {
            grid-column-gap: 0.5em;
            margin: 0 1em 0 0;
          }
          .one,
          .three {
            justify-self: right;
          }

          .two {
            min-width: 170px;
          }
        }

        @media (min-width: 2000px) and (max-width: 5000px) {
          .container {
            max-width: 1800px;
            margin: auto;
          }

          .cards {
            height: 50%;
            grid-column-gap: 7em;
            align-items: baseline;
          }

          .hero-filter {
            height: 65%;
          }
        }
      `}</style>
    </div>
  );
};
