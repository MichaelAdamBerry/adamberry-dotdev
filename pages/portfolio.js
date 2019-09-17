import React, { useState } from "react";
import Layout from "../components/MyLayout";
import ProjectCard from "../components/ProjectCard";
import { useSpring, animated } from "react-spring";
import Nav from "../components/Nav";
import Title from "../components/Title";
import MobileNav from "../components/MobileNav";
import styled from "@emotion/styled";

const FixedVideo = styled.div`
  position: fixed;
  top: 100px;
  left: 5%;
  width: 100vw;
  height: calc(100vh - 100px);

  button:focus {
    outline: none;
  }

  h2 {
    text-align: center;
  }
  p {
    color: white;
    max-width: 650px;
    margin: auto;
    padding: 0.5rem;
  }

  video {
    width: 90vw;
    height: auto;
    margin: auto;
  }

  .close-container {
    position: fixed;
    top: 100px;
    right: 50px;
    background-color: white;
    border-radius: 50%;
    width: 50px;
    min-height: 50px;
    z-index: 103;
    cursor: pointer;
    opacity: 0.99;
  }

  .close-container img {
    margin-top: 0.3rem;
    z-index: 102;
    opacity: 0.99;
  }
  @media (max-width: 425px) {
    top: 75px;
    height: calc(100vh - 75px);

    .close-container {
      top: 75px;
      width: 30px;
      min-height: unset;
      height: 30px;
    }

    p {
      max-width: unset;
    }

    h2 {
      text-align: left;
    }

    video {
      max-width: 90vw;
    }
  }
`;

const projects = [
  {
    title: "SampleProject",
    img: "static/bg-img-2.jpg",
    mp4: "static/grateful-data-mp4.mp4",
    description:
      "Succulents trust fund air plant food truck schlitz. Tacos shaman selfies, meditation chambray put a bird on it cliche hoodie fingerstache vegan polaroid semiotics edison bulb synth photo booth. Health goth man braid lo-fi kickstarter, "
  },
  {
    row: 1,
    title: "Grateful Data",
    tools: ["D3.js"],
    href: "https://grateful-data.com",
    img: "static/grateful-data-png.png",
    mp4: "static/grateful-data-mp4-1.mp4",
    description:
      "Data Visualizations built using D3.js, SVG animations, and the setlist.fm API. Inspired by work from sites like fivethirtyeight and The Pudding. Exploring the setlist and touring history of the Grateful Dead's thirty year career.   "
  },
  {
    row: 1,
    title: "Find My Reps",
    img: "static/my-reps-png.png",
    mp4: "static/my-reps-mp4-1.mp4",
    href: "",
    description:
      "A web application to connect users in the US with their elected representatives."
  },
  {
    row: 1,
    col: 1,
    title: "The Obsession-ists",
    img: "static/obsessionist-png.png",
    mp4: "static/obsessionist-mp4-1.mp4",
    href: "",
    description:
      "A pop culture blog released in editions in which the content is inspired by a specific theme. Envisioned as a hybrid of Lapham's Quarterly, The Ringer.com, and McSweeney's Internet Tendencies. Built with React and Gatsby.js. Illustrations made with Adobe Illustrator.  "
  },
  {
    col: 1,
    row: 1,
    title: "Data-Views",
    img: "static/data-views-png.png",
    mp4: "static/data-views.mp4",
    description:
      "Succulents trust fund air plant food truck schlitz. Tacos shaman selfies, meditation chambray put a bird on it cliche hoodie fingerstache vegan polaroid semiotics edison bulb synth photo booth. Health goth man braid lo-fi kickstarter, "
  }
];

const Video = ({ isOpen, setVideoOpen, src, description, title }) => {
  const { x } = useSpring({
    x: isOpen ? 1 : 0
  });
  return (
    <>
      <animated.div
        className="featured-video"
        style={{
          opacity: x.interpolate(x => x),
          transform: x.interpolate(x => `scale(${x})`),
          justifySelf: "center",
          alignSelf: "center",
          zIndex: "100",
          borderRadius: "3%",
          boxShadow: "3rem 3rem 15rem #bb9d9d77",
          maxWidth: "100vw"
        }}>
        <FixedVideo>
          {isOpen && (
            <button
              className="close-container"
              onClick={() => setVideoOpen(false)}>
              <img alt="close btn" src="static/close-btn.svg" />
            </button>
          )}
          <h2>{title}</h2>
          <p>{description}</p>
          <video autoPlay loop muted playsInline key={src}>
            <source src={src} type="video/mp4" />
          </video>
        </FixedVideo>
      </animated.div>
    </>
  );
};

const Portfolio = () => {
  const [mp4Src, setMp4Src] = useState();
  const [videoIsOpen, setVideoOpen] = useState(false);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();

  const loadVideo = project => {
    const { mp4, description, title } = project;
    setMp4Src(mp4);
    setTitle(title);
    setDescription(description);
    setVideoOpen(true);
  };

  return (
    <Layout bgImg="../static/bg-boardwalk.png">
      <Nav current="portfolio" />
      <MobileNav />
      <Title name="Work Examples" />

      <div className="card-1" onClick={() => loadVideo(projects[3])}>
        <ProjectCard cardObj={projects[3]} />
      </div>
      <div className="card-2" onClick={() => loadVideo(projects[2])}>
        <ProjectCard cardObj={projects[2]} />
      </div>
      <div className="card-3" onClick={() => loadVideo(projects[1])}>
        <ProjectCard cardObj={projects[1]} />
      </div>
      <div className="card-4" onClick={() => loadVideo(projects[4])}>
        <ProjectCard cardObj={{ ...projects[4], col: 1 }} />
      </div>

      <div
        style={{
          display: `${!videoIsOpen ? "none" : "block"}`,
          gridColumn: "1/6",
          gridRow: "1/6",
          backgroundColor: "black",
          opacity: `${videoIsOpen ? ".95" : ".0"}`
        }}>
        <Video
          isOpen={videoIsOpen}
          src={mp4Src}
          description={description}
          setVideoOpen={setVideoOpen}
          title={title}
        />
      </div>

      <style jsx>{`

          .card-1 {
            grid-row: 2/3;
            grid-column: 1/3;
            justify-self: center;
            align-self: center;
            margin-bottom: 1rem;

          }

          .card-2 {
            grid-row: 4/5;
            grid-column: 1/3;
            justify-self: center;
            align-self: center;
            margin-bottom: 1rem;
          }

          .card-3 {
            grid-row: 2/3;
            grid-column: 4/6;
            justify-self: center;
            align-self: center;
            margin-bottom: 1rem;
          }

          .card-4 {
            grid-row: 4/5;
            grid-column: 4/6;
            justify-self: center;
            align-self: center;
          }
        




          @media (max-width: 425px) {


            .card-1 {
              grid-row: 2/3;
              grid-column: 1/6;
              jusify-self: center;
              align-self: center;
              }

            .card-2 {              
              grid-row: 3/4;
              grid-column: 1/6;
              align-self: center;
            }

            .card-3 {          
              grid-row: 4/5;
              grid-column: 1/6;
              align-self: center;
            }

            .card-4 {
              grid-row: 5/6;
              grid-column: 1/6;
              jusify-self: center;
              align-self: center;
            }
   

 


    
=
        }
        `}</style>
    </Layout>
  );
};

export default Portfolio;
