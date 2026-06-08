import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
  }

  a {
    color: #8798e3;
    text-decoration: none;
    font-size: 12px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
