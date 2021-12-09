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
};

export const blackTheme = {
  btn: {
    background: `${LightBlack}`,
    color: `${DarkGray}`,
    backgroundHover: `${LightBlack}`,
  },
};

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.switchModal ? '1' : '0')};
  pointer-events: ${(props) => (props.switchModal ? 'all' : 'none')};
  transition: 0.2s;

  .modal_content {
    padding: 20px;
    border-radius: 12px;
    background: ${White};
    width: 400px;
    transform: ${(props) => (props.switchModal ? 'scale(1)' : 'scale(0.5)')};
    transition: 0.4s all;
    text-align: center;

    .btn_wrapper {
      display: flex;
      justify-content: end;
    }

    .btn {
      margin-top: 10px;
      font-size: 18px;
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

    .modal_list {
      display: flex;
      justify-content: space-around;
      list-style: none;

      li {
        padding: 10px;
      }
    }
  }
`;
