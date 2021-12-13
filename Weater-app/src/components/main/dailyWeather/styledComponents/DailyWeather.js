import styled from 'styled-components';

import {
  Black,
  DarkGray,
  DodgerBlue,
  Gray,
  LightBlack,
  White,
} from '../../../../assets/colors/colors';

export const lightTheme = {
  background: `${White}`,
  h3: {
    color: `${Black}`,
  },
  dailyWeatherItem: {
    color: `${Black}`,
  },
  p: {
    color: `${Gray}`,
  },
};

export const blackTheme = {
  background: `${LightBlack}`,
  h3: {
    color: `${White}`,
  },
  dailyWeatherItem: {
    color: `${White}`,
  },
  p: {
    color: `${DarkGray}`,
  },
};

export const MainDailyWeatherWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 15px 30px;
  height: 200px;
  transition: background 0.3s ease-in;
  background: ${(props) => props.theme.background};

  .dailyWeatherWrapper {
    display: flex;
    flex-direction: column;

    .dailyWeatherCardInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        color: ${DodgerBlue};
      }

      h3 {
        transition: color 0.3s ease-in;
        color: ${(props) => props.theme.h3.color};
      }
    }

    .dailyWeatherItem {
      display: flex;
      align-items: center;
      transition: color 0.3s ease-in;
      color: ${(props) => props.theme.dailyWeatherItem.color};

      p {
        margin-right: 5px;
        transition: color 0.3s ease-in;
        color: ${(props) => props.theme.p.color};
      }

      sup {
        margin-left: 3px;
        font-weight: bold;
        font-size: 13px;
      }
    }
  }
`;
