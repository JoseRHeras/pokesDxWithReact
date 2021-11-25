import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 6rem;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;

  margin: 0 auto;
  text-align: start;

  padding: 0 1rem;

  input {
    padding: 0.6em 1em;
    width: 100%;
    border-radius: 15px 0 0 15px;
    border: solid black 1px;
    font-size: var(--fontMed);

    background-color: var(--white);

    outline: none;

    :focus {
      box-shadow: 0 0 2px 2px var(--red);
    }
  }

  button {
    padding: 0 2em;
    border-radius: 0 10px 10px 0;
    border: none;
    cursor: pointer;
    outline: none;

    :hover {
      box-shadow: 0 0 2px 2px var(--red);
    }
  }
`;
