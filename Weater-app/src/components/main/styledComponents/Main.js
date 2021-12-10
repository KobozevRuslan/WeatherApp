import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  LightBlack,
  White,
} from '../../../assets/colors/colors';

export const lightTheme = {
  link: {
    background: `${White}`,
    color: `${Black}`,
    backgroundHover: `${DodgerBlue}`,
  },
};

export const blackTheme = {
  link: {
    background: `${LightBlack}`,
    color: `${DarkGray}`,
    backgroundHover: `${LightBlack}`,
  },
};

export const MainCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const LinkWrapper = styled.div`
  margin-top: 30px;
  text-align: center;

  a {
    text-decoration: none;
    margin-left: 10px;
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
