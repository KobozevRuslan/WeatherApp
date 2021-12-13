import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  LightBlack,
  White,
} from '../../../assets/colors/colors';

export const lightTheme = {
  color: `${Black}`,
  background: `${White}`,
  backgroundHover: `${DodgerBlue}`,
  btn: {
    background: `${White}`,
    color: `${Black}`,
    backgroundHover: `${DodgerBlue}`,
  },
  link: {
    background: `${White}`,
    color: `${Black}`,
    backgroundHover: `${DodgerBlue}`,
  },
};

export const blackTheme = {
  color: `${White}`,
  background: `${LightBlack}`,
  backgroundHover: `${LightBlack}`,
  btn: {
    background: `${LightBlack}`,
    color: `${DarkGray}`,
    backgroundHover: `${LightBlack}`,
  },
  link: {
    background: `${LightBlack}`,
    color: `${DarkGray}`,
    backgroundHover: `${LightBlack}`,
  },
};

export const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .searchInput {
    max-width: 420px;
    width: 100%;
    height: 40px;
    font-size: 22px;
    padding: 12px 32px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    transition: all 0.3s ease-in;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.background};
    outline: none;
  }

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

  .autocomplete {
    position: absolute;
    left: 28%;
    top: 50px;
    max-width: 420px;
    width: 100%;
    background: ${White};
    list-style: none;
    margin: 0;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    max-height: 240px;
    height: auto;
    overflow: auto;
    border-radius: 20px;

    .autocompelete_item {
      padding: 10px;
      :hover {
        color: ${White};
        background: ${(props) => props.theme.backgroundHover};
        cursor: pointer;
        transition: cubic-bezier(1, 0, 0, 1) 0.3s all;
      }
    }
  }
`;
