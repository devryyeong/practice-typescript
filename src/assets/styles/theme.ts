// 많이 사용하는 css를 변수로 등록하는 theme
import { DefaultTheme } from "styled-components";



const theme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "#1c1f25",
    sub: "#fff"
  }
};

const nextTheme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "#1c1f25",
    sub: "#fff"
  }
};

export { theme, nextTheme };