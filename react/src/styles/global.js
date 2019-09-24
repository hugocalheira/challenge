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
        height: 100%;
        min-height: 100%;
    }

    body {
        background-color: #161616;
        -webkit-font-smoothing: antialiased !important;
    }

    button {
        cursor: pointer;
    }

    .container {
        margin: 0 auto;
        padding-top: 60px;
        width: 80%;
    }

    .logo {
        background: #fff;
        border-radius: 25px;
        display: block;
        position: absolute;
        width: 41px;
        height: 41px;
        margin: 35px;

        svg {
            margin-top: -3px;
            margin-left: -3px;
        }
    }
`;
