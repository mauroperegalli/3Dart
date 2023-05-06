import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html{
    scroll-behavior: smooth;
    }
    body {
    margin: 0;
    padding: 0;
    background: #131415;
    font-family: 'Merriweather Sans', sans-serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

`;
