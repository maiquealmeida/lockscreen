import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;

  }

  html, body {
    height: 100%;
    width: 100%;
    background: #f7f7f7;


    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  div#root{
    width: 100%;
    height: 100%;
  }


  input {

  }
`;

export default GlobalStyle;
