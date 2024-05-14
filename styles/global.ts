import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        color: inherit;
    }

    html, body {
        box-sizing: 62.5%;
        font-size: 62.5%;
    }

    code {
        font-size: 5rem;
    }

    p {
        font-size: 4rem;
    }

`;

export default GlobalStyle;
