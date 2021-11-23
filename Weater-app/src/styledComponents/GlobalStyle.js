import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

	body {
    font-family: 'M PLUS 2', sans-serif;
		font-size: 18px;
	}
`;

export default GlobalStyle;
