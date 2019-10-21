import React from "react";
import { Container } from "./Container";
import Logos from "./Logos";

const DataViz = () => {
  const data = [
    {
      url: "../static/logo-data-viz.png",
      alt: ""
    },
    {
      url: "../static/logo-d3.svg",
      alt: ""
    }
  ];
  return (
    <>
      <Container>
        <h2>Data Visualizations</h2>
        <Logos data={data} />
        <p>
          The web offers unique possibilities for a user to dynamically explore
          data. Creating data visualizations combines code, informatic design,
          and statistics{" "}
        </p>
      </Container>
    </>
  );
};

export default DataViz;
