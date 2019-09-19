import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Roboto:300,400,700', 'sans-serif'],
    },
});

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    html, body, #app {
        min-height: 100%;
    }

    body {
        background-color: #161616;
        -webkit-font-smoothing: antialiased !important;
    }

    button {
        cursor: pointer;
    }
`;
