import React from "react";
import { Container } from "./Container";
import { Card, Description, FlexList } from "./Card";
import PhotoGrid from "./PhotoGrid";

const Production = () => {
  return (
    <Container>
      <h2>Live Event Production</h2>

      <p>
        In addition to acting, I have several years of production experience for
        live events in New York City. Events included fashion shows,
        experiential marketing, coorporate keynotes, and confrences.
      </p>

      <h3>notable past events :</h3>
      <FlexList>
        <ul>
          <li>
            <figure>
              <img src="../static/prod-us-open.png" alt="us open logo" />
              <figcaption>The US Open</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../static/prod-frieze.gif" alt="frieze art fair logo" />
              <figcaption>Frieze Art Fair</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../static/prod-fashion.jpg"
                alt="New York Fashion Week Logo"
              />
              <figcaption>New York Fashion Week</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../static/prod-lcood.jpeg"
                alt="View from the crowd at Lincoln Center Out of Doors Festival"
              />
              <figcaption>Lincoln Center Out of Doors</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../static/prod-nike.jpg"
                alt="Nike Pop Up Store for PSG football club Jordan Jerseys"
              />
              <figcaption>Nike / PSG</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../static/prod-microsoft.jpg"
                alt="Microsoft Surface Event"
              />
              <figcaption>Microsoft</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../static/prod-vuitton.jpg"
                alt="Louis Viutton Pop Up"
              />
              <figcaption>Louis Viutton</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../static/boost.jpeg" alt="Adidas Pop Up" />
              <figcaption>Adidas</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../static/prod-polo-classic.jpg"
                alt="3d Letters at Veuve Cliquot Polo Classic"
              />
              <figcaption>Veuve Cliquot Polo Classic</figcaption>
            </figure>
          </li>
        </ul>
      </FlexList>
    </Container>
  );
};

export default Production;
