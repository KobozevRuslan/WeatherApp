import styled from 'styled-components';

import { White } from '../../../../assets/colors/colors';

export const LinkErrorWrapper = styled.div`
  text-align: center;

  h2 {
    transition: color 0.2s ease;
    margin-bottom: 50px;
    color: ${(props) => props.theme.color};
  }

  a {
    text-decoration: none;
    padding: 7px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.theme.background};
    border-radius: 20px;
    color: ${(props) => props.theme.darkColor};
    transition: all 0.2s ease;
    :hover {
      background: ${(props) => props.theme.backgroundHover};
      color: ${White};
    }
  }
`;
