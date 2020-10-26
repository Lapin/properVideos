import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

  ${normalize}

  /* latin-ext */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v13/qkBbXvYC6trAT7RbLtyU5rZPoAU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v13/qkBbXvYC6trAT7RVLtyU5rZP.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Karla Bold'), local('Karla-Bold'), url(https://fonts.gstatic.com/s/karla/v13/qkBWXvYC6trAT7zuC8m3xLtlmgzDCNg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Karla Bold'), local('Karla-Bold'), url(https://fonts.gstatic.com/s/karla/v13/qkBWXvYC6trAT7zuC8m5xLtlmgzD.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  *,
  *::before,
  *::after {
    border-width: 0;
    border-style: solid;
    border-color: theme('borderColor.default', currentColor);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif; 
    letter-spacing: -0.05em;
    }
  

`;

export default GlobalStyle;