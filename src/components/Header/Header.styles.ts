import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--red);
  width: 100%;
  height: 4rem;
  padding: 0 1rem;

  border-bottom: solid 3px black;
  box-shadow: 0px 1px 3px 2px black;

  position: fixed;
  top: 0;
  z-index: 100;

  @media (min-width: 1060px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  width: 100%;
  height: inherit;
  padding: 0.3em 0;
`;

export const Logo = styled.img`
  width: 130px;
`;
