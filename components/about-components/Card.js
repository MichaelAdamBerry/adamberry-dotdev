import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  color: var(--bluesih);
  margin: 2rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  border-bottom: solid;
`;

export const Description = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  align-self: start;

  h3 {
    text-align: center;
    width: 50%;
    float: center;
    line-height: 2rem;
    margin: auto;
  }

  p {
    margin: 1.5rem 0;
    color: var(--blueish);
    line-height: 1.5rem;
  }
`;

export const FlexList = styled.div`
  align-self: end;
  grid-column: 1/4;
  grid-row: 1/2;

  h3 {
    text-align: center;
    width: 50%;
    float: center;
    line-height: 2rem;
    margin: auto;
  }

  p {
    margin: 1.5rem 0;
    color: var(--blueish);
    line-height: 1.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    width: 100%;
  }

  li {
    width: 30%;
    padding: 0.4rem 0;
    text-align: center;
  }

  @media (max-width: 425px) {
    li {
      width: 45%;
      text-align: left;
      margin-left: 15px;
    }
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 3fr auto;
  padding: 10px;
  padding: 1rem;
  background-color: white;
  max-width: 500px;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 0px 20px #2f2f2f44;
  margin-bottom: 50px;

  .gallery {
    grid-column: 1/4;
    grid-row: 1/2;
  }

  .left {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 3px;
    box-shadow: 0px 0px 20px #2f2f2f44;

    img {
      width: 150px;
      height: 150px;
    }
  }

  .right {
    grid-column: 2/4;
    padding-left: 2rem;
    grid-row: 1/2;
  }

  .footer {
    grid-row: 2/3;
    grid-column: 1/4;
    line-height: 1.7rem;
    font-size: 1.3rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  p,
  h3,
  h4,
  h2,
  li {
    color: var(--blueish);
  }

  h3 {
    font-size: 22px;
    margin: 0;
    border-bottom: solid;
  }

  ul {
    padding: 0;
  }

  li {
    padding: 0.4rem 0;
  }

  @media (max-width: 425px) {
    margin-top: 3rem;
    padding: 0.5rem;

    li {
      font-size: smaller;
    }
    img {
      width: 125px;
    }

    .right {
      padding-left: 0.5rem;
    }
  }
`;
