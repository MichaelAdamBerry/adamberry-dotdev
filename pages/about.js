import { useSpring, animated } from "react-spring";
import Nav from "../components/Nav";
import Title from "../components/Title";
export default () => {
  const skills = {
    skills: [
      "Advanced Javascript",
      "SVG animations",
      "Adobe Illustrator",
      "HTML",
      "CSS with grid and flexbox"
    ],
    frameworks: [
      "React",
      "Redux",
      "Gatsby",
      "Next",
      "Shopify",
      "D3.js",
      "JQuery",
      "Node",
      "Express"
    ],
    other: ["Python", "Data Journalism", "Infographics", "Generative Art"]
  };

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
          <h3>Toolbox and Skillset</h3>
          <h4>Primary Skills</h4>
          <ul>
            {skills.skills.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>

          <h4>Libraries and Frameworks</h4>
          <ul>
            {skills.frameworks.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>

          <h4>Other Interest</h4>
          <ul>
            {skills.other.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>

          <h3>Bio</h3>
          <p>
            Lorem ipsum dolor amet af you probably haven't heard of them
            truffaut, umami cred venmo microdosing. Bicycle rights before they
            sold out shaman leggings pug 3 wolf moon salvia marfa flannel
            chartreuse schlitz. Typewriter sriracha beard vexillologist vape.
            Semiotics chartreuse authentic umami mixtape bitters edison bulb.
            Freegan hella hexagon enamel pin put a bird on it, beard 90's
            gluten-free migas pinterest fingerstache church-key wolf hammock.
          </p>
          <h3>Other Work</h3>
          <p>
            Lorem ipsum dolor amet af you probably haven't heard of them
            truffaut, umami cred venmo microdosing. Bicycle rights before they
            sold out shaman leggings pug 3 wolf moon salvia marfa flannel
            chartreuse schlitz. Typewriter sriracha beard vexillologist vape.
            Semiotics chartreuse authentic umami mixtape bitters edison bulb.
            Freegan hella hexagon enamel pin put a bird on it, beard 90's
            gluten-free migas pinterest fingerstache church-key wolf hammock.
          </p>
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
          grid-column: 2/4;
          max-width: 500px;
          justify-self: center;
          align-self: center;
          opacity: 0.99;
          z-index: 200;
        }

        ul {
          list-decoration-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
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
          max-height: 100vh;
          background-size: cover;
          background-image: url("../static/bg-code-img.jpg");
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
