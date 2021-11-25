import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 8rem;
  padding: 8rem 1rem 0;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  background-color: var(--darkBlue);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 10px;

  @media(min-width: 800px) {
    flex-direction: row;

    .stats {
    max-width: 75%;
    }
  } 

  .card {
    max-width: 350px;
    background-color: whitesmoke;
    
    border-radius: inherit;
    box-shadow: 0 0 0 3px var(--red), 0 0 0 5px var(--darkRed);
    margin: 0 auto;
  }

  
  .card_data {
    margin: 1rem;
    

    h2 {
      text-transform: capitalize;
      display: inline-block;
      background-color: var(--yellow);
      padding: 0 1em 0 0.5em;
      border-radius: 1rem;
      color: var(--greyBlue);
    }

    div {
      margin: 0.6rem 0 0;
      background-color: var(--darkRed);
      color: var(--white);
      padding: 0.2em 1em;
      border-radius: 1rem;
      text-transform: capitalize;
      box-shadow: 0 0 0 1px var(--grayBlue);
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  

  .item_list {
    background-color: whitesmoke;
    border-radius: 10px;
    max-height: 500px;
    overflow: scroll;
    overflow-x: hidden;
    margin-top: 2rem;
    padding: 0 0 1rem;
    scrollbar-color: yellow red;
    scrollbar-width: thin;
  }

  @supports not ( -moz-appearance:none) {
    .item_list {
        ::-webkit-scrollbar {
        width: 0.5rem;
      }

      ::-webkit-scrollbar-track {
        background: red;
        color: red;
        margin: 1rem 0;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--yellow);
        border-radius: 1rem;
      }
    }
  }

  .data {
    background-color: var(--yellow);
    padding: 0.5em 1em;
    border-radius: 1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    width: 90%;
    text-align: center;
    font-weight: 800;
  }

`;
