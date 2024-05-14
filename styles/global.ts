import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        color: inherit;
    }

    html, body {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: OpenSans-Bold, sans-serif;
    }

    h1 {
        font-size: 6rem;
        letter-spacing: -2px;
    }

    h2 {
        font-size: 5rem;
        letter-spacing: -1.6px;
    }

    h3 {
        font-size: 4rem;
        letter-spacing: -1px;
    }

    h4 {
        font-size: 3.4rem;
        letter-spacing: -1px;
    }

    h5 {
        font-size: 2.8rem;
        letter-spacing: -1px;
    }

    h6 {
        font-size: 2rem;
        letter-spacing: -1px;
    }


    p {
        font-family: OpenSans-Regular, sans-serif;
        font-size: 2.5rem;
        line-height: 3.1rem;
    }
    
    .MuiContainer-maxWidthXl {
        max-width: 2000px !important;
        height: 100%;
    }
`;

export default GlobalStyle;
