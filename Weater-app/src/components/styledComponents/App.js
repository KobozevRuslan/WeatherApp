import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  Gray,
  LightBlack,
  White,
} from '../../assets/colors/colors';

export const lightTheme = {
  background: `${White}`,
  color: `${Black}`,
  darkColor: `${Black}`,
  backgroundHover: `${DodgerBlue}`,
  imageCircleBackground: 'none',
  detailsImageCircle: 'none',
  detailsP: `${Gray}`,
  btnBackgroundHover: `${DodgerBlue}`,
};

export const blackTheme = {
  background: `${LightBlack}`,
  color: `${White}`,
  darkColor: `${DarkGray}`,
  backgroundHover: `${LightBlack}`,
  imageCircleBackground: `${LightBlack}`,
  detailsImageCircle: `${White}`,
  detailsP: `${DarkGray}`,
  btnBackgroundHover: `${DarkGray}`,
};

export const MainAppWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
