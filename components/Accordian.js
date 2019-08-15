import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";

const Accordian = () => {
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

  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();
  console.log("height", height);
  const animation = useSpring({
    overflow: "hidden",
    height: on ? height + top * 2 : 0
  });

  return (
    <div>
      <h3>
        <button onClick={() => toggle(!on)}>Toolbox and Skillset</button>
      </h3>

      <animated.div style={animation}>
        <div {...bind} className="content-item">
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
        </div>
      </animated.div>

      <h3>Bio</h3>
      <div className="content-item">
        <p>
          Lorem ipsum dolor amet af you probably haven't heard of them truffaut,
          umami cred venmo microdosing. Bicycle rights before they sold out
          shaman leggings pug 3 wolf moon salvia marfa flannel chartreuse
          schlitz. Typewriter sriracha beard vexillologist vape. Semiotics
          chartreuse authentic umami mixtape bitters edison bulb. Freegan hella
          hexagon enamel pin put a bird on it, beard 90's gluten-free migas
          pinterest fingerstache church-key wolf hammock.
        </p>
      </div>
      <h3>Other Work</h3>
      <div className="content-item">
        <p>
          Lorem ipsum dolor amet af you probably haven't heard of them truffaut,
          umami cred venmo microdosing. Bicycle rights before they sold out
          shaman leggings pug 3 wolf moon salvia marfa flannel chartreuse
          schlitz. Typewriter sriracha beard vexillologist vape. Semiotics
          chartreuse authentic umami mixtape bitters edison bulb. Freegan hella
          hexagon enamel pin put a bird on it, beard 90's gluten-free migas
          pinterest fingerstache church-key wolf hammock.
        </p>
      </div>
    </div>
  );
};

export default Accordian;
