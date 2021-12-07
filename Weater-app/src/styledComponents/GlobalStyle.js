import { createGlobalStyle } from 'styled-components';
import { Black, White } from '../assets/colors/colors';

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
    background: ${(props) => (props.switchTheme ? `${Black}` : `${White}`)};
	}
`;

export default GlobalStyle;
