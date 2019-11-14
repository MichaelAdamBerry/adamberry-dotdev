import React, { useState } from "react";
import styled from "@emotion/styled";
import Layout from "../components/MyLayout";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectContainer from "../components/portfolio/ProjectContainer";
import Title from "../components/Title";
import Video from "../components/portfolio/Video";
import data from "../components/portfolio/data";

const { projects } = data;

const Portfolio = () => {
  const [mp4Src, setMp4Src] = useState();
  const [videoIsOpen, setVideoOpen] = useState(false);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [tech, setTech] = useState();
  const [url, setUrl] = useState();
  const [data, setData] = useState();

  const loadVideo = project => {
    console.log("project passed to load video", project);
    const { mp4, description, title, tech, url, data } = project;
    setUrl(url);
    setTech(tech);
    setData(data);
    setMp4Src(mp4);
    setTitle(title);
    setDescription(description);
    setVideoOpen(true);
  };

  return (
    <Layout bgImg="../static/bg-boardwalk.png">
      <Title name="Work Examples" />

      <ProjectList>
        <ProjectContainer
          key={Math.random() * 100}
          rowStart={2}
          onClick={() => loadVideo(projects[5])}
        >
          <ProjectCard cardObj={projects[5]} />
        </ProjectContainer>
        <ProjectContainer
          key={Math.random() * 100}
          rowStart={3}
          onClick={() => loadVideo(projects[3])}
        >
          <ProjectCard cardObj={projects[3]} />
        </ProjectContainer>
        <ProjectContainer
          key={Math.random() * 100}
          rowStart={4}
          onClick={() => loadVideo(projects[2])}
        >
          <ProjectCard cardObj={projects[2]} />
        </ProjectContainer>
        <ProjectContainer
          key={Math.random() * 100}
          rowStart={5}
          onClick={() => loadVideo(projects[1])}
        >
          <ProjectCard cardObj={projects[1]} />
        </ProjectContainer>
        <ProjectContainer
          key={Math.random() * 100}
          rowStart={6}
          onClick={() => loadVideo(projects[4])}
        >
          <ProjectCard cardObj={{ ...projects[4], col: 1 }} />
        </ProjectContainer>
      </ProjectList>

      <VideoOverlay videoIsOpen={videoIsOpen}>
        <Video
          isOpen={videoIsOpen}
          src={mp4Src}
          description={description}
          setVideoOpen={setVideoOpen}
          title={title}
          url={url}
          tech={tech}
          data={data}
        />
      </VideoOverlay>
    </Layout>
  );
};

const VideoOverlay = styled.div`
  display: ${props => (props.videoIsOpen ? "block" : "none")};
  grid-column: 1/6;
  grid-row: 1/6;
  background-color: var(--dark-color-base);
  opacity: ${props => (props.videoIsOpen ? ".99" : 0)};
`;

const ProjectList = styled.ul`
  padding: 0;
  grid-row: 2/5;
  grid-column: 1/6;
  min-height: 85vh;
  max-height: 85vh;
  overflow-y: scroll;
  padding-bottom: 50vh;
`;

export default Portfolio;
