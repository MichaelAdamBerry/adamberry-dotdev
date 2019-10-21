import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;

  li {
    padding: 1rem 0;
    /* line-height: 3rem; */
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--dark-purp);
    margin-bottom: 1rem;
    text-align: center;
  }

  h3 {
    font-size: 1.4rem;
    text-align: center;
    line-height: 2.2rem;
    padding-top: 1rem;
    color: var(--blueish);
    border-top: solid var(--blueish);
  }

  p {
    line-height: 2rem;
    font-size: 1.2rem;
    margin: 0.5rem 0;

    &:first-of-type {
      margin-top: 1.5rem;
    }

    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 425px) {
    transform: translate3d(0, -20px, 0);

    h2 {
      margin-bottom: 1rem;
      transform: translate3d(0, -2rem, 0);
    }

    p:first-of-type {
      margin-top: 1rem;
    }
  }

  @media (max-width: 370px) {
    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }

    h3 {
      margin-top: 0;
    }

    h3,
    h2 {
      font-size: 1.6rem;
    }
  }
`;
