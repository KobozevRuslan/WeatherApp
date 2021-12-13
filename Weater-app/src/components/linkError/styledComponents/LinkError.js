import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  LightBlack,
  White,
} from '../../../assets/colors/colors';

export const lightTheme = {
  h2: {
    color: `${Black}`,
  },
  link: {
    background: `${White}`,
    color: `${Black}`,
    backgroundHover: `${DodgerBlue}`,
  },
};

export const blackTheme = {
  h2: {
    color: `${White}`,
  },
  link: {
    background: `${LightBlack}`,
    color: `${DarkGray}`,
    backgroundHover: `${LightBlack}`,
  },
};

export const LinkErrorWrapper = styled.div`
  text-align: center;

  h2 {
    transition: color 0.2s ease;
    margin-bottom: 50px;
    color: ${(props) => props.theme.h2.color};
  }

  a {
    text-decoration: none;
    padding: 7px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.theme.link.background};
    border-radius: 20px;
    color: ${(props) => props.theme.link.color};
    transition: all 0.2s ease;
    :hover {
      background: ${(props) => props.theme.link.backgroundHover};
      color: ${White};
    }
  }
`;
