import React, { useState } from "react";
import styled from "@emotion/styled";
const MainBio = () => {
  const [thirdPerson, togglePerspective] = useState(true);
  const [textSection, updateSection] = useState("first");

  return (
    <>
      <Bio>
        <section>
          <img src="../static/avatar.jpeg" alt="A picture of me, Adam Berry" />
          {thirdPerson ? (
            <>
              <p>
                Michael "Adam" Berry is a web developer specializing in all
                things client side with a passion for exploring what's possible
                with HTML, Javascript, and CSS. Adam has experience building
                blogs, e-commerce sites, data visualizations and generative art
                using modern web technologies and frameworks.
              </p>
              <p>
                Before teaching himself to code, Adam was an actor and appeared
                in films and plays in New York and regionally across the US.
                Originally he thought programming would be a fun side-hustle
                between acting gigs, but lately has been one hundred percent
                focused on becoming the Daniel Day-Lewis of Javascript.
              </p>

              <p>
                Adam feels uncomfortable writing in the third person, but is
                unsure of what's expected here. Some times he makes bad jokes
                when he feels uncomfortable which explains the Daniel Day-Lewis
                joke above.
              </p>
            </>
          ) : (
            <>
              <p>
                Hey! I'm Michael Adam Berry. You can call me Adam, although I'll
                also answer to "Hey you!" or "Jerome". I'm a web developer
                specializing in all things client side with a passion for
                exploring what's possible with HTML, Javascript, and CSS. I've
                made blogs, e-commerce sites, data visualizations, games and
                generative art projects using modern web technologies and
                frameworks.
              </p>
              <p>
                Before getting into programming, I was an actor and appeared in
                films and plays in New York and regionally across the US.
                Originally I thought programming would be a fun side-hustle
                between acting gigs, but it quickly became my passion /
                obsession.
              </p>
              <p>
                Some things value: continuous growth , sharing the skills and
                knowledge I've gained, and championing an open, inclusive and
                accessible internet.
              </p>
            </>
          )}
          <Toggler>
            <div className="container">
              <button onClick={() => togglePerspective(!thirdPerson)}>
                {thirdPerson ? "First Person ?" : "Third Person ?"}
              </button>
            </div>
          </Toggler>
        </section>
      </Bio>
    </>
  );
};

const Bio = styled.div`
  grid-row: 2/6;
  grid-column: 2/6;
  max-width: 650px;

  section {
    padding: 1.5rem;
    margin-bottom: 150px;
    background-color: var(--dark-color-base);
    border-radius: 3px;
    box-shadow: 0px 5px 20px #111517e0;
  }

  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
    float: left;
    shape-outside: circle(50%);
    padding: 15px;
    margin-top: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 1rem;
  }

  @media (max-width: 425px) {
    grid-column: 1/6;
    padding: 1rem 0;

    p:last-of-type {
      padding-bottom: 4.5rem;
    }
  }
`;

const Toggler = styled.div`
  .container {
    position: relative;
  }
  button {
    position: absolute;
    top: -1rem;
    right: -0.5rem;
    background-color: var(--dark-color-base);
    border: none;
    border-bottom: solid;
    color: var(--dark-purp);
    font-size: 1rem;
    padding: 5px;
  }
`;

export default MainBio;
