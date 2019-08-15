import { useSpring, animated } from "react-spring";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Skills from "../components/about-components/skills";
import Bio from "../components/about-components/bio";
import OtherWork from "../components/about-components/other-work";
export default () => {
  return (
    <>
      <div className="about-page">
        <div className="gradient" />
        <Title name={"About Me"} />
        <Nav current="about" />
        <div className="social">
          <h3>Tweets</h3>
          <h3>Insta</h3>
          <h3>blog</h3>
        </div>
        <div className="content">
          <Skills />
          <Bio />
          <OtherWork />
        </div>
      </div>

      <style jsx>{`
        color: white;
        h3 {
          font-weight: 200;
          font-size: 1.4rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #f6d327;
        }
        .gradient {
          grid-row: 1/6;
          grid-column: 1/6;
          background-color: ##101010e6;
          background-image: linear-gradient(
            315deg,
            #350d0bd1 0%,
            #5f0d34eb 74%
          );
          opacity: 0.8;
        }

        .content {
          grid-row: 2/6;
          grid-column: 1/5;
          max-width: 500px;
          padding-left: 1rem;
          justify-self: center;
          
          opacity: 0.99;
          z-index: 200;
          max-width: 600px;
        }

        .content-item {
          padding: 0.5rem 1rem;
          background-color: #171414;
          box-shadow: 20px 20px 60px #a95c7d;
          border-radius: 5px;
          border: solid 1px #73133e;
      }
        }

        ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        }

        li :after {
          content: ", ";
          padding-right: 1rem;
          color: black;
        }

        li:last-of-type:after {
          content: " ";
        }

        .social {
          grid-row: 2/5;
          grid-column: 4/6;
          max-width: 500px;
          justify-self: center;
          opacity: 0.99;
          z-index: 200;
        }

        .social h3 {
          text-decoration: underline;
        }

        .about-page {
          width: 100%;
          height: 100%;
          min-height: 100vh;

          background-size: cover;
          background-image: url("../static/bg-workspace.jpg");
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          grid-row-gap: 1rem;
          grid-column-gap: 1rem;
          font-family: "Nunito", sans-serif;
          font-weight: 200;
        }
      `}</style>
    </>
  );
};
