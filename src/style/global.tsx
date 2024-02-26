import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    @-webkit-keyframes list-loading {
        0% {
            background: #6b6b6b;
        }
        100% {
            background: #b1b1b1;
        }
    }

    @keyframes list-loading {
        0% {
            background: #6b6b6b;
        }
        100% {
            background: #b1b1b1;
        }
    }
`;
