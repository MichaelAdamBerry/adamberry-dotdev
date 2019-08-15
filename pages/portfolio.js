import React, { useState } from "react";
import Layout from "../components/MyLayout";
import ProjectCard from "../components/ProjectCard";
import { useSpring, animated } from "react-spring";
import Nav from "../components/Nav";
import Title from "../components/Title";

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
    img: "static/grateful-data-png.png",
    mp4: "static/grateful-data-mp4-1.mp4",
    description:
      "Succulents trust fund air plant food truck schlitz. Tacos shaman selfies, meditation chambray put a bird on it cliche hoodie fingerstache vegan polaroid semiotics edison bulb synth photo booth. Health goth man braid lo-fi kickstarter, "
  },
  {
    row: 1,
    title: "Find My Reps",
    img: "static/my-reps-png.png",
    mp4: "static/my-reps-mp4-1.mp4",
    description:
      "Succulents trust fund air plant food truck schlitz. Tacos shaman selfies, meditation chambray put a bird on it cliche hoodie fingerstache vegan polaroid semiotics edison bulb synth photo booth. Health goth man braid lo-fi kickstarter, "
  },
  {
    row: 1,
    col: 1,
    title: "The Obsession-ists",
    img: "static/obsessionist-png.png",
    mp4: "static/obsessionist-mp4-1.mp4",
    description:
      "Succulents trust fund air plant food truck schlitz. Tacos shaman selfies, meditation chambray put a bird on it cliche hoodie fingerstache vegan polaroid semiotics edison bulb synth photo booth. Health goth man braid lo-fi kickstarter, "
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
          gridRow: "1/6",
          gridColumn: "2 / 5",
          justifySelf: "center",
          alignSelf: "center",
          zIndex: "100",
          border: "solid 6px",
          borderRadius: "3%",
          boxShadow: "3rem 3rem 15rem #bb9d9d77",
          pointerEvents: "none"
        }}>
        <div className="description-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <video autoPlay loop muted playsInline key={src}>
          <source src={src} type="video/mp4" />
        </video>
      </animated.div>
      <div
        style={{ display: `${isOpen ? "block" : "none"}` }}
        className="close-container"
        onClick={() => setVideoOpen(false)}>
        <button>
          <img alt="close btn" src="static/close-btn.svg" />
        </button>
      </div>
      <style jsx>
        {`
          .overlay {
            grid-row: 1/6;
            grid-column: 1/6;
            width: 100%;
            background-color: black;
            opacity: 0.3;
            z-index: 98;
          }

          .description-container {
            color: white;
            max-width: 650px;
            margin: auto;
          }

          .description-container h2 {
            text-align: center;
          }

          .close-container {
            grid-row: 2/5;
            grid-column: 2/5;
            position: relative;
            z-index: 99;
          }

          .close-container button {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            z-index: 102;
            cursor: pointer;
          }

          .close-container img {
            z-index: 102;
          }

          video {
            max-width: 100%;
            height: auto;
            margin: auto;
          }
        `}
      </style>
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
    <>
      <Layout>
        <div className="site-container">
          <div className="gradient" />
          <Nav current="portfolio" />
          <Title name="Work Examples" />
          <div
            className="project card-1"
            onClick={() => loadVideo(projects[3])}>
            <ProjectCard cardObj={projects[3]} />
          </div>
          <div
            className="project card-2"
            onClick={() => loadVideo(projects[2])}>
            <ProjectCard cardObj={projects[2]} />
          </div>
          <div
            className="project card-3"
            onClick={() => loadVideo(projects[1])}>
            <ProjectCard cardObj={projects[1]} />
          </div>

          <div
            className="project card-4"
            onClick={() => loadVideo(projects[4])}>
            <ProjectCard cardObj={{ ...projects[4], col: 1 }} />
          </div>
          <div className="project card-5">
            <ProjectCard cardObj={projects[0]} />
          </div>
          <div className="project card-6">
            <ProjectCard cardObj={projects[0]} />
          </div>
          <div className="project card-7">
            <ProjectCard cardObj={projects[0]} />
          </div>
          <div className="project card-8">
            <ProjectCard cardObj={projects[0]} />
          </div>
          <div
            className="modalOverlay"
            style={{
              gridColumn: "1/6",
              gridRow: "1/6",
              backgroundColor: "black",
              opacity: `${videoIsOpen ? ".85" : ".0"}`,
              pointerEvents: "none"
            }}
          />
          <Video
            isOpen={videoIsOpen}
            src={mp4Src}
            description={description}
            setVideoOpen={setVideoOpen}
            title={title}
          />
        </div>

        <style jsx>{`
          .site-container {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            max-height: 100vh;
            background-image: url("../static/bg-code-img-1.jpg");
            background-size: cover;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            font-family: "Nunito", sans-serif;
            font-weight: 200;
            color: #bfb5b5;
          }

          .project {
            width: 275px;
            background-color: #2f2f2f85;
            box-shadow: 10px 10px 20px #2f2f2f85;
            cursor: pointer;
          }

          .card-1 {
            grid-row: 2/3;
            grid-column: 2/3;
          }

          .card-2 {
            grid-row 3/4;
            grid-column: 2/3;
          }

          .card-3 {
            grid-row 4/5;
            grid-column: 2/3;
          }

          .card-4 {
            grid-row: 2/3;
            grid-column: 3/4;
          }

          .card-5 {
            grid-row: 4/5;
            grid-column: 3/4;
          }

          .card-6 {
            grid-row: 2/3;
            grid-column: 4/5;
          }

          .card-7 {
            grid-row: 3/4;
            grid-column: 4/5;
          }

          .card-8 {
            grid-row: 4/5;
            grid-column: 4/5;
          }


          .gradient {
            grid-row: 1 / 6;
            grid-column: 1/6;
            background-color: #d1959233;
            background-image: linear-gradient(
              315deg,
              #d1959290 0%,
              #c81f7090 74%
            );
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Portfolio;
