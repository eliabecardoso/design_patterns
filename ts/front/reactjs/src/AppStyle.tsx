import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  }

  html, body, #root {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    background: linear-gradient(rgba(125, 30, 170), rgba(50, 170, 150));
    color: #fff;  

    width: 100%;
    height: 100%;
  }

  a {
    color: #fff;
  }
`;
