import styled from 'styled-components';

import { White } from '../../../assets/colors/colors';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  .btn {
    font-size: 22px;
    padding: 7px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.theme.background};
    border-radius: 8px;
    color: ${(props) => props.theme.darkColor};
    transition: all 0.2s ease;
    :hover {
      background: ${(props) => props.theme.backgroundHover};
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
      background: ${(props) => props.theme.imageCircleBackground};
    }

    .iconBtn {
      width: 30px;
      height: 40px;
      padding: 5px 0;
      cursor: pointer;
    }
  }
`;
