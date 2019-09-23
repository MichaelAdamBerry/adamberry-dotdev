import styled from "@emotion/styled";

export default styled.li`
  width: 100%;
  justify-self: center;
  align-self: center;
  margin-bottom: 1rem;

  @media (max-width: 425px) {
    grid-row: ${props => props.rowStart + "/" + props.rowStart + 1};
    grid-column: 1/6;
  }
`;
