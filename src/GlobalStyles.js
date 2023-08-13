import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
 height : 100%;
}

body {
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.04em; 
  color: #111111;
  margin: 0;
  padding: 0;
  min-width: 320px;
  height: 100%;

 

  &.no-scroll {
  overflow: hidden !important;
}
 
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
}





`;
