import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --cl-primary: #FF8A00;
    --cl-secondary: #FFFAE6;
    --cl-tertier: #1BD97B;
    --cl-white: #FFFFFF;
    --cl-black: #000000;
    --cl-grey: #2D2A40;
    --screen-max-width: 1080px;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p {
    margin: 0;
    font-family: "Roboto"
  }

  span,
  a {
    font-family: "Roboto"
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
    border: 0;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
