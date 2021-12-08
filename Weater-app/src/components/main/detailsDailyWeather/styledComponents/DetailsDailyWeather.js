import styled from 'styled-components';

import {
  Black,
  DarkGray,
  Gray,
  LightBlack,
  White,
} from '../../../../assets/colors/colors';

export const MainDetailsDailyWeatherWrapper = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 15px 30px;
  height: 200px;
  transition: background 0.3s ease-in;
  background: ${(props) => (props.blackTheme ? `${LightBlack}` : `${White}`)};

  .detailsDailyItems {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .imageCircle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      transition: background 0.3s ease-in;
      background: ${(props) => (props.blackTheme ? `${White}` : '')};
    }

    img {
      width: 20px;
      padding: 5px 0;
    }

    p {
      max-width: 120px;
      width: 100%;
      text-transform: capitalize;
      margin: 0 10px;
      transition: color 0.3s ease-in;
      color: ${(props) => (props.blackTheme ? `${DarkGray}` : `${Gray}`)};
    }

    span {
      position: relative;
      z-index: 2;
      transition: color 0.3s ease-in;
      color: ${(props) => (props.blackTheme ? `${White}` : `${Black}`)};
    }
  }

  .cloud_image {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
  }
`;
