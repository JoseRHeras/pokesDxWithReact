import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    :root {
        --fontSmall: 1rem;
        --fontMedium: 1.3rem;
        --fontBig: 1.5rem;
        --maxWidth: 1050px;

        --red: #FF0000;
        --darkRed: rgb(204, 0, 0);
        --grayBlue: #3b4cca;
        --white: whitesmoke;
        --darkBlue: rgb(59, 76, 202);
        --yellow: rgb(255, 220, 0);
        --darkYellow: rgb(179, 161, 37)

    }

    body {
        font-family: sans-serif;
    }


`;