import React from "react";
import { Container } from "./Container";
import Logos from "./Logos";

const JamStack = () => {
  const data = [
    { url: "../static/logo-gatsby.svg", alt: "Gatsby Logo" },
    { url: "../static/logo-next.svg", alt: "Next Logo" },
    { url: "../static/logo-small-netlify.svg", alt: "Netlify Logo" },
    { url: "../static/logo-small-zeit.svg", alt: "Zeit Logo" }
  ];
  return (
    <Container>
      <h2>JAM Stack Development</h2>
      <Logos data={data} />

      <h3>Javascript. APIs. MarkUp.</h3>
      <p>
        Using Static site generators like Gatsby and Next with global CDNs like
        Zeit and Netlify applications remain performant, flexible, secure as
        they scale.
      </p>
    </Container>
  );
};

export default JamStack;
