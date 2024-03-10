import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  small: "600px",
  medium: "900px",
  large: "1280px",
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
`;