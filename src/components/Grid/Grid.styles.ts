import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0rem auto;

  h2 {
    text-align: center;
    padding: 1em 0;
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: auto;
  padding: 0 1em;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2em;
  
  justify-items: center;

  @media (min-width: 1050px) {
    padding: 0;
  }
`;
