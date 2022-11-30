import { createGlobalStyle } from "styled-components";
import Props from "./themeType";

const GlobalStyle = createGlobalStyle<Props>`
  *
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html
  {
    scroll-behavior: smooth;
  }

  body
  {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: #fff;
    width: auto;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
