import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "../useMeasure";

const Skills = ({ skillsOn, toggleSkills }) => {
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

  
  const [bind, { height, top }] = useMeasure();

  const animation = useSpring({
    overflow: "hidden",
    height: skillsOn ? height + top * 2 : 0
  });

  return (
    <div>
      <h3>
        <button onClick={toggleSkills}>Toolbox and Skillset</button>
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
      <style jsx>{`
        button {
          background: none;
          border: none;
          line-height: 2rem;
          font-size: 1.5rem;
          color: #f5d231;
          cursor: pointer;
          border-bottom: solid;
          padding-left: 0;
        }
        button:after {
          content: " >";
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
        }

        li:last-of-type:after {
          content: " ";
        }
        .content-item {
          padding: 0.5rem 1rem;
          background-color: #17141430;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};
export default Skills;
