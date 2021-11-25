import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(200, 75%, 95%);
  border-radius: 0.5rem;
  align-items: center;
  box-shadow: 0 0 0px 4px var(--yellow), 0 0 6px 5px var(--darkBlue);
  width: 200px;
  transition: transform 200ms;

  h3 {
    text-align: center;
    background-color: var(--darkRed);
    color: var(--white);
    font-size: 1rem;
    padding: 0.3em 0;
    border-top: 4px solid var(--yellow);
    border-radius: 0 0 0.5rem 0.5rem;
  }

  a {
    text-decoration: none;
  }

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
