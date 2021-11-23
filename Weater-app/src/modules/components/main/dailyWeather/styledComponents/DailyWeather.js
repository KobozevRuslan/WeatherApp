import styled from 'styled-components';

import { DodgerBlue, Gray } from '../../../../../assets/colors/colors';

export const MainDailyWeatherWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 15px 30px;
  height: 200px;
`;

export const DailyWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .dailyWeatherCardInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${DodgerBlue};
    }

    p {
      font-size: 25px;
    }
  }
  .dailyWeatherItem {
    display: flex;
    align-items: center;

    p {
      color: ${Gray};
      margin-right: 5px;
    }

    sup {
      margin-left: 3px;
      font-weight: bold;
      font-size: 13px;
    }
  }
`;
