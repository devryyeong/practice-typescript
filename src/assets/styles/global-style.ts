import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css 초기화
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;