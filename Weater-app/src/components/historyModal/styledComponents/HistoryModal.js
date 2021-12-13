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

export const HistoryModalWrapper = styled.div`
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

  .history_modal_content {
    padding: 20px;
    border-radius: 12px;
    background: ${White};
    width: 400px;
    transform: ${(props) => (props.switchModal ? 'scale(1)' : 'scale(0.5)')};
    transition: 0.4s all;
    text-align: center;
    display: flex;
    flex-direction: column;

    .history_modal_table {
      margin-top: 10px;
      border-collapse: collapse;
      width: 100%;

      .activeTh {
        cursor: pointer;
        border-radius: 8px 8px 0 0;
        :hover {
          background: ${(props) => props.theme.btn.backgroundHover};
          color: ${White};
        }
      }

      th {
        padding: 10px;
        border-bottom: 2px solid black;
        transition: all 0.2s ease;
      }

      td {
        padding: 10px;
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: black;
        :last-child {
          border-width: 0 0px 1px 0;
        }
      }
    }
  }
`;
