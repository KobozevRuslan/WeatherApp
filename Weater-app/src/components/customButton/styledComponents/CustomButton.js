import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  LightBlack,
  White,
} from '../../../assets/colors/colors';

export const lightTheme = {
  btn: {
    background: `${White}`,
    color: `${Black}`,
    backgroundHover: `${DodgerBlue}`,
  },
  imageCircle: {
    backgroundHover: 'none',
  },
};

export const blackTheme = {
  btn: {
    background: `${LightBlack}`,
    color: `${DarkGray}`,
    backgroundHover: `${LightBlack}`,
  },
  imageCircle: {
    backgroundHover: `${DarkGray}`,
  },
};

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  .btn {
    font-size: 22px;
    padding: 7px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.theme.btn.background};
    border-radius: 8px;
    color: ${(props) => props.theme.btn.color};
    transition: all 0.2s ease;
    :hover {
      background: ${(props) => props.theme.btn.backgroundHover};
      color: ${White};
    }
  }

  .imageCircle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-radius: 50%;
    margin-left: 15px;
    transition: all 0.2s ease;

    :hover {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      background: ${(props) => props.theme.imageCircle.backgroundHover};
    }

    img {
      width: 30px;
      height: 40px;
      padding: 5px 0;
      cursor: pointer;
    }
  }
`;
