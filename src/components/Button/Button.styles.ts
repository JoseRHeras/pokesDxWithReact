import styled from "styled-components";

export const Wrapper = styled.button`
  font-size: var(--fontMed);
  padding: 0.5em 3em;
  margin: 0 auto 2rem;
  display: block;
  border: none;

  background-color: var(--grayBlue);
  color: var(--white);

  border-radius: 5px;
  cursor: pointer;

  :hover {
    box-shadow: 0 0px 2px 0px var(--darkBlue);
  }
`;
