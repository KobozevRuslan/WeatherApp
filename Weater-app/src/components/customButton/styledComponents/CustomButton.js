import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  LightBlack,
  White,
} from '../../../assets/colors/colors';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  .btn {
    font-size: 22px;
    padding: 7px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background: ${(props) =>
      props.switchTheme ? `${LightBlack}` : `${White}`};
    border-radius: 8px;
    color: ${(props) => (props.switchTheme ? `${DarkGray}` : `${Black}`)};
    transition: all 0.2s ease;
    :hover {
      background: ${(props) =>
        props.switchTheme ? `${LightBlack}` : `${DodgerBlue}`};
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
      background: ${(props) => (props.switchTheme ? `${DarkGray}` : 'none')};
    }

    img {
      width: 30px;
      height: 40px;
      padding: 5px 0;
      cursor: pointer;
    }
  }
`;
