import { createGlobalStyle } from 'styled-components';

import { Black, White } from '../assets/colors/colors';

export const lightTheme = {
  body: {
    background: `${White}`,
  },
};
export const blackTheme = {
  body: {
    background: `${Black}`,
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

	body {
    font-family: 'M PLUS 2', sans-serif;
		font-size: 18px;
    transition: background 0.3s ease-in;
    background: ${(props) => props.theme.body.background};
  }
`;

export default GlobalStyle;
